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

The repository ships with `.github/workflows/deploy.yml`.

1. Push this project to `https://github.com/rohitmannur007/rohitmannur007.github.io` (the app lives at the repository root — `package.json` at the top level).
2. In the GitHub repository: **Settings → Pages → Source → GitHub Actions**.
3. Every push to `main` rebuilds and redeploys automatically.

The live site will be `https://rohitmannur007.github.io/`. Direct links and browser refresh on project routes work because `public/404.html` redirects unknown paths back into the SPA.

## How to replace the resume

The public site always serves the committed resume at `public/resume/current-resume.pdf`.

1. Export your new resume as a PDF.
2. Replace `public/resume/current-resume.pdf` with it — **keep the filename exactly the same**.
3. Commit and push to `main`.
4. GitHub Actions rebuilds and redeploys; the new resume is live everywhere.

The same instructions are shown on the site itself (Resume section → "How to update this resume").

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
