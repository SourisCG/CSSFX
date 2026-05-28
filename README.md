# CSSFX

**JavaFX CSS autocomplete for VSCode**

[English](#english) | [Español](#español)

---

## English

### What is this?

CSSFX brings proper IntelliSense to your JavaFX CSS files. Instead of fighting with 
generic CSS autocomplete that suggests properties JavaFX doesn't even support, you 
get suggestions that actually work: all 155 `-fx-` properties with their valid values, 
pseudo-classes, and style classes.

Just name your files `.fx.css` and you're good to go.

### Features

- **155 JavaFX properties** with autocomplete (`-fx-background-color`, `-fx-text-fill`, etc.)
- **Smart value suggestions** - colors, enums, functions, all context-aware
- **35 pseudo-classes** (`:hover`, `:pressed`, `:focused`, etc.)
- **70+ style class selectors** (`.button`, `.label`, `.text-field`, etc.)
- **Hover info** - see what each property does without leaving the editor
- **Validation** - catch typos and invalid values before runtime
- **Syntax highlighting** - proper CSS coloring
- **Color decorators** - see your colors inline
- **Formatting** - keep your CSS clean

### Installation

**Option 1: Download the VSIX**
1. Grab `cssfx-x.x.x.vsix` from [Releases](https://github.com/SourisCG/CSSFX/releases)
2. In VSCode: `Ctrl+Shift+P` → "Extensions: Install from VSIX..."
3. Pick the file, done

**Option 2: Build from source**
```bash
git clone https://github.com/SourisCG/CSSFX
cd CSSFX
npm install
npm run package
code --install-extension cssfx-0.0.2.vsix
```

### How to use

1. Name your JavaFX CSS files with `.fx.css` (e.g., `styles.fx.css`)
2. Open in VSCode - it just works
3. Type `-fx-` and watch the magic happen
4. After `:` you'll see valid values for that property
5. Type `.` for style classes, `:` for pseudo-classes

**Pro tip:** JavaFX doesn't care about the filename, only the content. So `styles.fx.css` 
works exactly like `styles.css` in your Java code. The `.fx.css` extension is just for VSCode 
to know it should use this extension's autocomplete.

### Examples

**Colors and gradients:**
```css
.button {
    -fx-background-color: linear-gradient(to bottom, #3498db, #2980b9);
    -fx-text-fill: derive(#333, 20%);
    -fx-border-color: ladder(#fff, black 49%, white 50%);
}
```

**Layout:**
```css
.container {
    -fx-padding: 10 20 10 20;
    -fx-spacing: 15px;
    -fx-alignment: center;
}
```

**Effects:**
```css
.card {
    -fx-effect: dropshadow(gaussian, rgba(0,0,0,0.3), 10, 0.5, 0, 2);
    -fx-background-radius: 8;
}

.card:hover {
    -fx-effect: dropshadow(gaussian, rgba(0,0,0,0.5), 15, 0.6, 0, 4);
}
```

### Requirements

VS Code 1.85.0 or higher. That's it.

### License

MIT - see [LICENSE](LICENSE). Use it, modify it, do whatever.

---

## Español

### ¿Qué es esto?

CSSFX le da IntelliSense decente a tus archivos CSS de JavaFX. En lugar de pelear con 
el autocompletado genérico de CSS que sugiere propiedades que JavaFX ni soporta, tienes 
sugerencias que realmente funcionan: las 155 propiedades `-fx-` con sus valores válidos, 
pseudo-clases y style classes.

Solo nombra tus archivos `.fx.css` y listo.

### Características

- **155 propiedades JavaFX** con autocompletado (`-fx-background-color`, `-fx-text-fill`, etc.)
- **Sugerencias inteligentes** - colores, enums, funciones, todo contextual
- **35 pseudo-clases** (`:hover`, `:pressed`, `:focused`, etc.)
- **70+ selectores de style classes** (`.button`, `.label`, `.text-field`, etc.)
- **Info al pasar el mouse** - ve qué hace cada propiedad sin salir del editor
- **Validación** - detecta typos y valores inválidos antes de ejecutar
- **Resaltado de sintaxis** - coloreado CSS correcto
- **Decoradores de color** - ve tus colores inline
- **Formateo** - mantén tu CSS limpio

### Instalación

**Opción 1: Descargar el VSIX**
1. Baja `cssfx-x.x.x.vsix` desde [Releases](https://github.com/SourisCG/CSSFX/releases)
2. En VSCode: `Ctrl+Shift+P` → "Extensiones: Instalar desde VSIX..."
3. Elige el archivo, listo

**Opción 2: Compilar desde el código**
```bash
git clone https://github.com/SourisCG/CSSFX
cd CSSFX
npm install
npm run package
code --install-extension cssfx-0.0.2.vsix
```

### Cómo usar

1. Nombra tus archivos CSS de JavaFX con `.fx.css` (ej: `styles.fx.css`)
2. Abre en VSCode - simplemente funciona
3. Escribe `-fx-` y mira la magia
4. Después de `:` verás valores válidos para esa propiedad
5. Escribe `.` para style classes, `:` para pseudo-clases

**Tip:** A JavaFX no le importa el nombre del archivo, solo el contenido. Así que `styles.fx.css` 
funciona exactamente igual que `styles.css` en tu código Java. La extensión `.fx.css` es solo 
para que VSCode sepa que debe usar el autocompletado de esta extensión.

### Ejemplos

**Colores y gradientes:**
```css
.button {
    -fx-background-color: linear-gradient(to bottom, #3498db, #2980b9);
    -fx-text-fill: derive(#333, 20%);
    -fx-border-color: ladder(#fff, black 49%, white 50%);
}
```

**Layout:**
```css
.container {
    -fx-padding: 10 20 10 20;
    -fx-spacing: 15px;
    -fx-alignment: center;
}
```

**Efectos:**
```css
.card {
    -fx-effect: dropshadow(gaussian, rgba(0,0,0,0.3), 10, 0.5, 0, 2);
    -fx-background-radius: 8;
}

.card:hover {
    -fx-effect: dropshadow(gaussian, rgba(0,0,0,0.5), 15, 0.6, 0, 4);
}
```

### Requisitos

VS Code 1.85.0 o superior. Eso es todo.

### Licencia

MIT - ver [LICENSE](LICENSE). Úsalo, modifícalo, haz lo que quieras.
