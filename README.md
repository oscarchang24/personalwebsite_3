# Oscar Chang Portfolio

React + Vite portfolio for game design, 3D art, animation, and research work.

## Local preview

1. Install Node.js 22 or newer.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open the local URL shown in the terminal.

## Production build

Run `npm run build`. The production site will be generated in `dist/`.

## GitHub deployment

Upload all files in this package to a GitHub repository. The simplest deployment route is to connect that repository to Vercel, Netlify, or Cloudflare Pages.

- Build command: `npm run build`
- Output directory: `dist`
- Node.js version: 22 or newer

## Cloudflare Pages settings

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: leave blank
- Node.js version: `22`

The refreshed `package-lock.json` is synchronized with `package.json` and has
been verified with the same clean-install workflow used by Cloudflare Pages.
No Wrangler configuration file is required for this static portfolio.

The package contains only the optimized WebP images and optimized MP4 videos used by the live site. Original high-resolution media is intentionally excluded to keep the repository compact.
