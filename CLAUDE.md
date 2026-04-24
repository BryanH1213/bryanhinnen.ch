# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**MonPortfolio** — static personal portfolio site. Pure HTML, CSS, and vanilla JavaScript. No framework, no build step, no dependencies.

## Development

Open directly in a browser — no server required:

```bash
open index.html
```

Or serve locally:

```bash
python3 -m http.server 8080
```

## Architecture

Single-page site. As the project grows, keep files separated:

- `index.html` — structure only, no inline styles or scripts
- `css/style.css` — all styles
- `js/main.js` — all interactivity
- `assets/images/` — images and visual assets

## Color palette

| Role | Hex |
|---|---|
| Background (main) | `#0f1e2a` |
| Background (alt sections) | `#152b3b` |
| Surface (cards) | `#1d3a4f` |
| Border | `#2f5875` |
| Primary — buttons, links, titles | `#53F0DB` |
| Text (main) | `#F5F5F5` |
| Text muted | `#A4BACB` |

Always use these values via CSS custom properties in `style.css`. Do not introduce colors outside this palette.

## Design principles

- **Mobile-first**: write styles for small screens first, use `min-width` media queries to scale up
- **Color palette**: use the palette defined above — no arbitrary colors
- **Minimalist & professional**: no decorative noise, generous whitespace, restrained use of accent color

## Language conventions

- **Code** (variables, functions, CSS class names, comments): English
- **Visible content** (headings, labels, paragraphs, UI text): French
