# CSS & HTML Course — HES-SO Valais

Interactive demo pages for the **Web Development** course (2nd-year Bachelor, HES-SO Valais).
Each page covers a core HTML/CSS topic with live examples, visual explanations, and interactive playgrounds.

## Table of contents

- [What this project provides](#what-this-project-provides)
- [Pages](#pages)
- [Project structure](#project-structure)
- [Installation](#installation)
- [License](#license)

## What this project provides

This collection of demo pages is designed to help students **learn by doing**. Instead of reading static documentation, you interact directly with the concepts:

- **Visual demonstrations** — Every CSS property is shown in action with clear, labelled examples so you can *see* what each value does.
- **Interactive playgrounds** — Sliders, buttons, and live previews let you tweak values in real time and observe the result instantly (no need to edit code and refresh).
- **Explanatory "Why" boxes** — Each section includes short explanations of *why* a property behaves the way it does, bridging the gap between syntax and understanding.
- **Progressive structure** — Pages are ordered from foundational concepts (box model, selectors) to layout systems (flexbox, grid) to advanced topics (typography, CSS functions, custom properties).
- **Modular CSS architecture** — The project itself serves as a real-world example of how to organise stylesheets by concern (reset, variables, layout, typography, forms, components, responsive).
- **Zero dependencies** — Pure HTML, CSS, and vanilla JavaScript. No frameworks, no build tools. What you see in the source is exactly what runs in the browser.

## Pages

### HTML pages

| Page | Topic | Highlights |
| ---- | ----- | ---------- |
| **index.html** | Hub | Central navigation to every demo page |
| **basic.html** | HTML Basics | Document structure skeleton, heading hierarchy, paragraphs, interactive semantic layout diagram, block vs inline |
| **formatting.html** | Formatting & Lists | Inline text elements, hyperlinks with security notes, ordered/unordered/definition lists, blockquotes |
| **imagesmedias.html** | Images & Media | `<img>` attributes, `object-fit` explorer, `<figure>`, `<picture>`, inline SVG, `<video>`, `<audio>`, `<iframe>` with sandbox |
| **head.html** | Head & Meta | `<title>` tab preview, Open Graph card builder, `<link>` rel types, defer vs async mini-timeline, `<base>` |
| **forms.html** | Forms | Every native HTML form element — input types, selection controls, file uploads, buttons, grouping, validation |
| **scripts.html** | Script Integration | Inline, external, blocking head, defer, async, end-of-body, ES modules, animated loading timeline |

### CSS pages

| Page | Topic | Highlights |
| ---- | ----- | ---------- |
| **boxmodel.html** | Box Model | Live sliders for width, height, padding, border, margin; CSS position explorer (5 types) |
| **flexbox.html** | Flexbox | 7 demos — nav bar, centered hero, card gallery, grow/shrink visualiser, sidebar, responsive layout, image cropping |
| **grid.html** | Grid | 7 demos — columns & rows, spanning mosaic, named areas, auto-fit/minmax, auto-fill vs auto-fit, dense flow, alignment |
| **selectors.html** | CSS Selectors | Basic, combinators, attributes, pseudo-classes, pseudo-elements, interactive specificity calculator |
| **typography.html** | Typography & Functions | Font families, sizing units, text properties, CSS custom properties, calc(), clamp(), min(), max(), live playgrounds |

## Project structure

```text
webdev/
├── index.html              # Hub page
├── basic.html              # HTML structure & semantics
├── formatting.html         # Inline elements, lists, quotes
├── imagesmedias.html       # Images, SVG, video, audio, iframe
├── head.html               # Head sub-elements & meta tags
├── scripts.html            # Script loading strategies
├── boxmodel.html           # CSS box model
├── flexbox.html            # CSS flexbox
├── grid.html               # CSS grid
├── forms.html              # HTML forms
├── selectors.html          # CSS selectors
├── typography.html         # Typography & CSS functions
├── css/
│   ├── reset.css           # CSS reset
│   ├── variables.css       # CSS custom properties (design tokens)
│   ├── layout.css          # Grid and flex layouts
│   ├── typography.css      # Font and text styles
│   ├── forms.css           # Form-specific styles
│   ├── components.css      # Cards, buttons, demo boxes
│   └── responsive.css      # Media queries
└── js/
    ├── basic.js            # Semantic diagram hover interactions
    ├── boxmodel.js         # Box model sliders
    ├── flexbox.js          # Flexbox interactive controls
    ├── forms.js            # Form demos
    ├── head.js             # Tab title preview, OG card builder
    ├── imagesmedias.js     # object-fit explorer
    ├── scripts.js          # Loading timeline animation
    ├── selectors.js        # Specificity calculator
    └── typography.js       # Theme switcher, calc/clamp playgrounds
```

## Installation

No build step, no dependencies. This is plain HTML, CSS, and JavaScript.

1. **Clone the repository**

   ```bash
   git clone https://github.com/reyraph/webdev.git
   cd webdev
   ```

2. **Open in a browser** — pick one of:
   - Double-click `index.html` to open it directly.
   - Use the **Live Server** extension in VS Code (right-click `index.html` → *Open with Live Server*).
   - Serve with any static server, for example:

     ```bash
     # Python
     python -m http.server 8000

     # Node (npx, no install needed)
     npx serve .
     ```

     Then open `http://localhost:8000` in your browser.

## License

Course material — HES-SO Valais, Web Development.
