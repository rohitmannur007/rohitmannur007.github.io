# ROHIT — Product Manager Portfolio

A dark, cinematic, editorial portfolio for **Rohit — Product Manager (AI · Data · Systems)**. Fully static: no backend, no database, no tracking. Deploys to GitHub Pages.

## Stack

- React 19 + Tailwind CSS (Create React App / craco toolchain)
- Self-hosted fonts (Fraunces, Plus Jakarta Sans, JetBrains Mono) — no runtime font CDN
- All visuals are local, hand-built SVG system diagrams — no stock photography, no hotlinks
- Static routing with a GitHub Pages SPA fallback (`public/404.html`)

## Local development

```bash
yarn install
yarn start
```

Opens at `http://localhost:3000`.

## Production build

```bash
yarn build
```

Outputs a fully static site to `build/`. The build compiles entirely from repository assets — no runtime network dependencies.

## Deployment (GitHub Pages)

The site is live at **https://rohitmannur007.github.io/**.

Repository layout:

- `main` branch — the built static site. GitHub Pages serves this branch directly (Settings → Pages → Deploy from a branch → `main` / root). Every push to `main` redeploys automatically in about a minute — no Actions needed.
- `source` branch — the full React source code (this project).

To publish changes: edit source → `yarn build` → copy `build/` contents to a checkout of `main` → commit → push.

## How to replace the resume

**Fastest (no computer tools needed):** open the repository on GitHub → `resume/current-resume.pdf` → replace the file with your new PDF using GitHub's upload (keep the exact filename) → commit. GitHub Pages redeploys automatically in about a minute and the new resume is live.

**From the source code:**

1. Export your new resume as a PDF.
2. Replace `public/resume/current-resume.pdf` with it — **keep the filename exactly the same**.
3. `yarn build`, copy `build/` to the `main` branch, commit, push.

The same instructions are shown on the site itself (Resume section → "Other way to update").

## How to replace the profile photo

Replace `public/assets/profile/rohit.jpg` with a new JPG (same filename), commit, push.

## How to update content

All content lives in structured data files — edit, commit, push:

| Content | File |
| --- | --- |
| Projects (cards + full case-study pages) | `src/data/projects.js` |
| Research papers | `src/data/research.js` |
| Experience, education, certifications | `src/data/experience.js` |
| Lab items, open-source PRs, currently exploring | `src/data/lab.js` |

## Folder structure

```
public/
  assets/
    profile/rohit.jpg        # profile photo
    social/og.png            # social preview image
  fonts/                     # self-hosted woff2
  resume/current-resume.pdf  # THE resume — replace this file to update
  favicon.svg
  robots.txt
  sitemap.xml
  404.html                   # GitHub Pages SPA fallback
src/
  components/                # Header, Hero, SelectedWork, Research, Lab, Experience, …
  components/visuals.jsx     # hand-built SVG system diagrams per project
  data/                      # all content (projects, research, experience, lab)
  pages/                     # Home, ProjectDetail, NotFound
.github/workflows/deploy.yml # GitHub Pages deployment
```

## Troubleshooting

- **Refresh on a project URL shows GitHub's 404**: make sure `public/404.html` is in the build and Pages source is "GitHub Actions".
- **Resume didn't update**: confirm the file is named exactly `current-resume.pdf` and the Actions run finished.

## Privacy

No analytics, no cookies, no trackers, no third-party runtime scripts.
