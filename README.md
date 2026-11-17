# Ranjitha Rajesh — Portfolio

A single-page portfolio for **Ranjitha Rajesh**, BCA AR/VR student and Unity developer.
Hand-built with plain HTML, CSS and a few lines of vanilla JavaScript — no build step, no
dependencies, no framework.

## Sections

- **Hero** — illustration, headline, subtitle and intro
- **My Projects** — Flappy Bird Clone, Cube Runner, Open Work Project
- **My Skills** — Unity, C#, Blender, Figma, Canva, HTML, CSS
- **About Me** / **Contact Me** — GitHub, LinkedIn and Gmail links
- Footer

## Project structure

```
.
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── bg.webp                 soft lavender background
│   ├── blob.png                "Thanks for visiting!" blob
│   ├── project-*.jpg           project thumbnails
│   └── icons/                  logo, doodle and skill icons
└── fonts/                      self-hosted Poppins, Nunito, Baloo 2
```

## Run locally

Because everything is static, any static server works:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Or just open `index.html` in a browser.

> Browsers cache CSS aggressively. `index.html` links the stylesheet as `styles.css?v=5`;
> bump that number whenever you edit `styles.css` so a hard refresh isn't needed.

## Deploy to GitHub Pages

1. Create a new repository on GitHub and push this folder:

   ```bash
   git init
   git add .
   git commit -m "Add portfolio"
   git branch -M main
   git remote add origin https://github.com/ranjitha-rajesh/<repo-name>.git
   git push -u origin main
   ```

2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Save — the site goes live at `https://ranjitha-rajesh.github.io/<repo-name>/`.

## Editing content

- Text lives in `index.html`.
- Colours, spacing and typography are the custom properties at the top of `styles.css`.
- The layout is authored against a 1199 × 1312 artboard; one unit (`--u`) equals one artboard
  pixel, so the whole composition scales fluidly, then re-flows at 900px and 620px.

## Links

- GitHub: https://github.com/ranjitha-rajesh
- LinkedIn: https://www.linkedin.com/in/ranjitha-rajesh-5b3747381/
- Email: ranjitharajeshv@gmail.com

## Notes

- Fonts are self-hosted, so the page renders identically offline.
