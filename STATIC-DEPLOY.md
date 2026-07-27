# Static build for GitHub Pages

The `docs/` folder contains a fully static, prerendered build of the site
(no backend, no server functions required).

- Built with base path `/grandbuild-studio/` so it works at
  `https://abdullahnasre.github.io/grandbuild-studio/`
- One prerendered `index.html` per route (`/`, `/about`, `/services`,
  `/projects`, `/industries`, `/news`, `/careers`, `/contact`)
- `404.html` acts as the SPA fallback for client-side routing
- `.nojekyll` keeps GitHub Pages from filtering asset folders

## Enable GitHub Pages

1. Push this repo to `https://github.com/abdullahnasre/grandbuild-studio`
   (the connected GitHub repo syncs automatically from Lovable).
2. Repo → **Settings → Pages**
3. Source: **Deploy from a branch**
4. Branch: `main`, Folder: **/docs** → Save

The site goes live at `https://abdullahnasre.github.io/grandbuild-studio/`.

> If you later deploy to a custom domain or the repo root, rebuild with the
> base path changed to `/`.
