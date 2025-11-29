# Repository Guidelines

## Project Structure & Module Organization
Routes live in `src/pages`; `src/layouts` hosts shared shells; reusable UI sits in `src/components` and `src/shared`. Bookshop blocks (view, `.bookshop.yml`, optional preview) live under `src/bookshop`. Styles and Tailwind tokens stay in `src/styles` plus `tailwind.config.cjs`, static assets ship from `public/`, and editor data such as navigation, color palettes, and site metadata are stored in `data/*.json`.

## Build, Test & Development Commands
- `npm install`: install project dependencies.
- `npm start` / `npm run dev`: hot-reload dev server on `localhost:4321`.
- `npm run build`: emit the production bundle into `dist/`.
- `npm run preview`: serve the last build for manual QA.
- `npm run astro -- check`: run Astro diagnostics (types, a11y, config).
- `npm run new-component`: scaffold a Bookshop block through `src/bookshop/create-new-component.js`.
- `npm run pagefind-server`: rebuild then serve Pagefind locally to test search.

## Coding Style & Naming Conventions
Use 2-space indentation and order imports Astro → npm → local. Keep component filenames PascalCase, directories kebab-case, and props/helper names camelCase. Declare prop interfaces at the top of `.astro` files to mirror the fields coming from `data/*.json`. Lean on Tailwind utilities and shared classes inside `src/styles` before introducing custom CSS.

## Testing Guidelines
Automated tests are not set up, so rely on command checks. Run `npm run astro -- check`, `npm run build`, and `npm run preview`, then click through `/blog`, `/tags`, and dynamic slugs to confirm Bookshop-driven content renders. If you touch navigation, search data, or Pagefind configuration, also run `npm run pagefind-server`; any future automated coverage should live in `src/tests/` and plug into a forthcoming `npm test` script.

## Commit & Pull Request Guidelines
History favors concise sentences like `create a title image block component for the homepage`. Keep subjects under ~60 characters, present tense, and mention the surface touched (`tighten hero spacing`). Pull requests should describe user impact, list commands executed, attach screenshots or GIFs for visual work, link the related issue or CloudCannon task, and note any schema/data adjustments editors must apply. Request at least one review before merging.

## CloudCannon & Configuration Tips
Whenever component props change, update the paired `.bookshop.yml` so editors immediately see the new controls. Call out edits to `data/site.json`, `data/navigation.json`, or `data/colors.json` in PR notes because those files feed CloudCannon forms. Store secrets in CloudCannon’s environment UI, mirror them locally via ignored `.env` files referenced in `astro.config.mjs`, and never commit sensitive values.
