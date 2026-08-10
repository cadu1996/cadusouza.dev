# cadusouza.dev

Personal portfolio and writing site for Carlos Eduardo de Souza, built with Astro and TypeScript. The site is static, English-only, and ready for Cloudflare Pages.

## Requirements

- Node.js 20.19+ or 22.12+ is recommended. The current Astro version also runs on the project's existing Node 22.5 environment.
- npm 9.6.5+

## Local development

```sh
npm install
npm run dev
```

Astro serves the site at `http://localhost:4321` by default.

```sh
npm run check    # Astro and TypeScript diagnostics
npm run build    # Production build in dist/
npm run preview  # Preview the production build
```

## Publishing a post

1. Duplicate `src/content/posts/_template.md` with a descriptive slug, such as `reliable-data-pipelines.md`.
2. Complete the frontmatter and write the article in Markdown.
3. Change `draft` to `false` when the article is ready.

Posts are sorted by `publishedAt`, newest first. Supported fields are defined in `src/content.config.ts`.

## Publishing a project

1. Duplicate `src/content/projects/_template.md` with a descriptive slug.
2. Complete the frontmatter and document the project in Markdown.
3. Change `draft` to `false` when the project is ready.

Featured projects are shown first. Optional `repositoryUrl` and `demoUrl` fields add links to the project page.

## Personal links

Public GitHub, LinkedIn, and email links are intentionally omitted from the first release. Add real values to `src/config/site.ts`, then render them in the shared footer when they are available.

## Cloudflare Pages

Connect this repository to Cloudflare Pages with these settings:

| Setting | Value |
| --- | --- |
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `22.12` or newer |

No Astro server adapter is required because the site builds to static HTML.