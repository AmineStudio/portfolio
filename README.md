# Amine Studio — Portfolio de Fotografía

Portfolio personal de fotografía **Amine Studio**: un sitio web estático donde se presenta mi trabajo fotográfico, organizado por categorías, junto con información sobre mí y los servicios que ofrezco.

Especializado en fotografía de **retrato, eventos, calle y paisaje**.

## Características

- **Página principal** con secciones de portfolio, sobre mí, servicios y contacto.
- **Galerías por categoría**: eventos, paisaje, retratos y calle, cada una en su propia página.
- **Diseño responsive** adaptado a móvil y escritorio, con **menú de navegación móvil** (botón hamburguesa).
- **Modal de imágenes** para ver las fotos de la galería en grande.
- **Efecto de máquina de escribir** (typewriter) en la cabecera.
- **Año de copyright** que se actualiza automáticamente.

## Tecnologías

- HTML5
- CSS3
- JavaScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com/) (iconos)
- [Google Fonts](https://fonts.google.com/) (tipografía Roboto)

## Estructura del proyecto

```
portfolio/
├── index.html                 # Página principal (portfolio, sobre mí, servicios, contacto)
├── pages/                     # Galerías por categoría
│   ├── events.html
│   ├── landscape.html
│   ├── portraits.html
│   └── street.html
├── assets/
│   ├── css/styles.css         # Estilos propios
│   ├── js/main.js             # Menú móvil, modal de imágenes, año de copyright
│   └── images/                # Imágenes de contenido y de las galerías
├── src/
│   ├── input.css              # Entrada de Tailwind (@import "tailwindcss")
│   └── output.css             # CSS de Tailwind compilado (el que carga el sitio)
├── typewriting-master/        # Librería externa para el efecto typewriter
└── package.json               # Dependencias de Tailwind CSS
```

## Cómo ejecutarlo en local

Al ser un sitio estático, basta con abrir `index.html` en el navegador. Para evitar problemas con rutas relativas, se recomienda servirlo con un servidor local, por ejemplo:

```bash
# Con Python
python -m http.server 8000

# O con Node (npx)
npx serve
```

Luego abre `http://localhost:8000` en el navegador.

## Compilar los estilos de Tailwind

El sitio carga `src/output.css`, que es el CSS ya compilado. Si modificas los estilos o las clases de Tailwind, hay que regenerarlo con el CLI de Tailwind:

```bash
# Instalar dependencias
npm install

# Compilar una vez
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css

# O en modo observador (recompila al guardar cambios)
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

## Créditos

- Efecto de máquina de escribir mediante la librería **typewriting** (incluida en `typewriting-master/`, con su propia licencia).

## Autoría

Proyecto personal de **Amine** — portfolio de fotografía Amine Studio.
