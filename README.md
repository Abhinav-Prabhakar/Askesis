# Askēsis

A pocket library of philosophy, built with Astro and published as a static
site on GitHub Pages. No build service, no GitHub Actions: the compiled site
in `docs/` is committed and Pages serves it from the branch.

## Local

```sh
npm install
npm run dev       # http://localhost:4321/Askesis/
```

## Build

```sh
npm run build     # writes the static site to docs/
npm run preview   # serve the build locally
```

## Deploy (GitHub Pages, branch-based)

One-time repository setting:

> **Settings → Pages → Build and deployment → Source: Deploy from a branch**
> Branch: `main` · Folder: `/docs`

After that, publishing is just a rebuild and commit:

```sh
npm run deploy    # build, commit docs/, push
```

or, if you prefer to review the output first:

```sh
npm run build
git add docs && git commit -m "Rebuild site" && git push
```

`public/.nojekyll` is copied into `docs/` so GitHub Pages serves Astro's
`_astro/` assets unchanged. The site is configured for the
`https://abhinav-prabhakar.github.io/Askesis/` URL in `astro.config.mjs`;
change `site` and `base` there if the repository moves.
