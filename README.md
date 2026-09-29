# TasteTrail

A responsive, frontend-only recipe discovery website built with HTML, CSS, and vanilla JavaScript. Recipe content is predefined in `app.js`; no server, database, or package installation is required.

## Run locally

Open `index.html` directly in a browser. All pages work as static files. The food photography and Google Fonts are loaded from their public CDNs, so an internet connection is needed for those visual assets; navigation and recipe content remain local.

## Pages

- `index.html` — home, seasonal picks, cuisines, and newsletter UI
- `breakfast.html`, `lunch.html`, `dinner.html` — meal collections
- `snacks.html`, `desserts.html` — bites and sweets
- `indian.html`, `italian.html`, `healthy.html` — cuisine and wellness collections
- `recipe-details.html` — recipe instructions; accepts an optional `?id=` recipe parameter

## Check the project

With Node.js installed, run the dependency-free route and catalog checks:

```sh
node tests.js
node --check app.js
```