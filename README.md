# Portfolio

A single-page portfolio site built with **Angular 18** for showcasing your background, skills, experience, education, and contact — ideal for TM R&D front-end applications.

## Features

- **Multi-page layout**: Home, About, Skills, Experience, Education, Resume, Contact (each has its own route)
- **Light / dark theme**: Toggle with persistence (saved in browser)
- **Aesthetic styling**: Teal accent, clean typography (DM Sans, Outfit)
- **Easy to edit**: All content lives in one file — see below
- **GitHub Pages ready**: Deploy by pushing to `main`

---

## 1. Fill in your data

Edit **`src/app/data/portfolio-data.ts`** and replace the placeholder values with your own:

| Section    | What to edit |
|-----------|--------------|
| **Hero**  | `name`, `tagline`, `shortDescription`, CTA text and links (use routes: `/skills`, `/contact`) |
| **About** | `title`, `paragraphs` (array of strings) |
| **Skills** | `skills` — array of `{ title, items[] }` |
| **Experience** | `experience` — array of `{ role, company, period, description[] }` |
| **Education** | `education` — array of `{ degree, institution, period, notes? }` |
| **Resume** | `title`, `description?`, `pdfUrl` (link to your PDF), `downloadButtonText?` |
| **Contact** | `email`, optional: `phone`, `linkedIn`, `github`, `location` |

No need to touch HTML or components — just update that one file.

---

## 2. Run locally

```bash
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200).

---

## 3. Deploy to GitHub Pages

1. **Create a repo** on GitHub (e.g. `Portfolio` or `username.github.io`).

2. **Enable GitHub Pages** in the repo:
   - **Settings → Pages**
   - **Source**: GitHub Actions

3. **Push this project** to the repo (e.g. `main` branch).

4. The **`.github/workflows/deploy.yml`** workflow will:
   - Build the app with the correct `base-href` for your repo name
   - Deploy the built files to GitHub Pages

5. Your site will be live at:
   - **`https://<your-username>.github.io/<repo-name>/`**

Example: if the repo is `Portfolio`, the URL is `https://yourusername.github.io/Portfolio/`. You can share this link with TM R&D.

---

## Build

```bash
npm run build
```

Artifacts go to `dist/portfolio/browser/`. For manual deploy with a custom repo name:

```bash
npm run build -- --base-href /YourRepoName/
```

---

## Tech

- Angular 18, standalone components, signals
- SCSS, CSS variables for theming
- No backend — static site suitable for GitHub Pages
