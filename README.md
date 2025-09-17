# Bookmark Manager

A small project to organize and style bookmarks while practicing HTML/CSS (with Sass) and a bit of automation via npm scripts.

## How to run

Install dependencies:
```bash
npm install
```

Compile Sass once:
```bash
npm run sass:sass
```

Watch Sass changes (auto-compiles on save):
```bash
npm run sass:sass:watch
```

The commands above generate `css/styles.css` from `sass/styles.sass`.

## Available scripts

- `sass:sass`: compiles `sass/styles.sass` to `css/styles.css`.
- `sass:sass:watch`: keeps a watcher running to recompile whenever files change.

## Essential structure

- `sass/` — `.sass` source files (indented syntax)
- `css/` — compiled output (`styles.css`)
- `index.html` (or similar) — page to preview the styles
- `package.json` — scripts and dependencies

If you prefer SCSS syntax, just update the script paths and rename your files accordingly.

## Style conventions

- Mobile-first
- Descriptive class names
- Sass variables and mixins for colors, spacing, and typography

## Quick tips

- If the watcher stops reflecting changes, stop the process and run `npm run sass:sass:watch` again.
- Use the Live Server extension (or similar) to auto-reload the HTML in the browser.

## Short roadmap

- Improve component organization (partials in `sass/`)
- Refine focus/hover states for accessibility
- Light/dark theme using CSS custom properties

## License

ISC — see `package.json`. 