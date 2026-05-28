import {
  createConnection,
  TextDocuments,
  ProposedFeatures,
  InitializeParams,
  TextDocumentSyncKind,
  InitializeResult,
  CompletionItem,
  CompletionItemKind,
  Hover,
  TextDocumentPositionParams,
  DocumentFormattingParams,
  TextEdit,
  ColorInformation,
  ColorPresentation,
  FoldingRange,
  DocumentColorParams,
  ColorPresentationParams,
  FoldingRangeParams
} from 'vscode-languageserver/node';
import { TextDocument } from 'vscode-languageserver-textdocument';
import {
  getCSSLanguageService,
  LanguageService,
  Stylesheet
} from 'vscode-css-languageservice';
import { javafxProperties } from './data/javafxProperties';
import { javafxSelectors } from './data/javafxSelectors';

const connection = createConnection(ProposedFeatures.all);
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

let cssLanguageService: LanguageService;
const stylesheets: Map<string, Stylesheet> = new Map();

connection.onInitialize((params: InitializeParams): InitializeResult => {
  cssLanguageService = getCSSLanguageService({
    useDefaultDataProvider: false,
    customDataProviders: [javafxProperties]
  });

  return {
    capabilities: {
      textDocumentSync: TextDocumentSyncKind.Incremental,
      completionProvider: {
        resolveProvider: true,
        triggerCharacters: ['.', ':', '-', ' ']
      },
      hoverProvider: true,
      documentFormattingProvider: true,
      colorProvider: true,
      foldingRangeProvider: true
    }
  };
});

documents.onDidChangeContent(change => {
  validateTextDocument(change.document);
});

function validateTextDocument(textDocument: TextDocument): void {
  const stylesheet = cssLanguageService.parseStylesheet(textDocument);
  stylesheets.set(textDocument.uri, stylesheet);
  const diagnostics = cssLanguageService.doValidation(textDocument, stylesheet);
  connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}

documents.onDidClose(e => {
  stylesheets.delete(e.document.uri);
  connection.sendDiagnostics({ uri: e.document.uri, diagnostics: [] });
});

connection.onCompletion((textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
  const document = documents.get(textDocumentPosition.textDocument.uri);
  if (!document) return [];

  const stylesheet = stylesheets.get(document.uri);
  if (!stylesheet) return [];

  const cssCompletions = cssLanguageService.doComplete(document, textDocumentPosition.position, stylesheet);

  const items: CompletionItem[] = cssCompletions.items.map(item => ({
    ...item,
    kind: item.kind || CompletionItemKind.Property
  }));

  const text = document.getText();
  const offset = document.offsetAt(textDocumentPosition.position);
  const linePrefix = text.substring(text.lastIndexOf('\n', offset - 1) + 1, offset);

  if (linePrefix.trim().startsWith('.') || linePrefix.trim() === '') {
    javafxSelectors.forEach((selector, index) => {
      items.push({
        label: selector.name,
        kind: CompletionItemKind.Class,
        detail: selector.description,
        insertText: selector.name,
        sortText: `0${index.toString().padStart(4, '0')}`
      });
    });
  }

  return items;
});

connection.onCompletionResolve((item: CompletionItem): CompletionItem => {
  return item;
});

connection.onHover((textDocumentPosition: TextDocumentPositionParams): Hover | null => {
  const document = documents.get(textDocumentPosition.textDocument.uri);
  if (!document) return null;

  const stylesheet = stylesheets.get(document.uri);
  if (!stylesheet) return null;

  return cssLanguageService.doHover(document, textDocumentPosition.position, stylesheet);
});

connection.onDocumentFormatting((params: DocumentFormattingParams): TextEdit[] => {
  const document = documents.get(params.textDocument.uri);
  if (!document) return [];

  return cssLanguageService.format(document, {
    start: { line: 0, character: 0 },
    end: { line: document.lineCount - 1, character: Number.MAX_VALUE }
  }, params.options);
});

connection.onDocumentColor((params: DocumentColorParams): ColorInformation[] => {
  const document = documents.get(params.textDocument.uri);
  if (!document) return [];

  const stylesheet = stylesheets.get(document.uri);
  if (!stylesheet) return [];

  return cssLanguageService.findDocumentColors(document, stylesheet);
});

connection.onColorPresentation((params: ColorPresentationParams): ColorPresentation[] => {
  const document = documents.get(params.textDocument.uri);
  if (!document) return [];

  const stylesheet = stylesheets.get(document.uri);
  if (!stylesheet) return [];

  return cssLanguageService.getColorPresentations(document, stylesheet, params.color, params.range);
});

connection.onFoldingRanges((params: FoldingRangeParams): FoldingRange[] => {
  const document = documents.get(params.textDocument.uri);
  if (!document) return [];

  return cssLanguageService.getFoldingRanges(document);
});

documents.listen(connection);
connection.listen();
