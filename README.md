# Moolino website

Minimal, static-first Astro foundation for the future Moolino product website.

## Local development

Requires Node.js 22.12 or newer. With nvm:

```sh
nvm install
nvm use
npm install
npm run dev
```

The local site is then available at `http://localhost:4321`.

## Quality checks

```sh
npm run check
npm run build
npm run preview
```

## Environment

Copy `.env.example` to `.env` when a real test hostname has been chosen.

- `SITE_URL` sets Astro's canonical site origin at build time.
- `PUBLIC_ALLOW_INDEXING` defaults to disabled. Set it to `true` only when the
  website should be discoverable by search engines.

## Future Cloudflare deployment

The project builds to the static `dist/` directory and does not require an
Astro server adapter. A future Cloudflare Pages project can use:

- Build command: `npm run build`
- Output directory: `dist`
- Node.js version: `22`

No Cloudflare account, DNS record, external repository, or production service
is connected by this project.

The existing WordPress website is not referenced or modified.
