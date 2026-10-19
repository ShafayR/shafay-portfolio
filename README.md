# Shafay Rameez — Portfolio

React + TypeScript + Vite. Two designs (editorial and playful) share one content file, and a switch in the bottom-right corner flips between them.

## Run it

```bash
npm install
npm run dev
```

## Edit content

All copy, projects and case studies live in `src/content.ts`.

## Add images

1. Put files in `public/images/` (e.g. `tgr-home.png`).
2. In `src/content.ts`, set `src: '/images/tgr-home.png'` on the matching item. Until then, each slot shows a labelled placeholder saying what belongs there.
3. Export your CV as `public/Shafay-Rameez-CV.pdf` and set your LinkedIn URL in `profile`.

## Pick one design

Once you've decided, delete `StyleSwitch` from `src/App.tsx`, remove the other design's folder and its CSS import in `src/main.tsx`.

## Deploy

Push to GitHub and import into Vercel. `vercel.json` already handles the `/work/...` routes.
