# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is Aritra Sadhukhan's personal portfolio site (swiftgeek.in), a fork of the [dillionverma/portfolio](https://github.com/dillionverma/portfolio) template. It's a single-page Next.js 14 App Router site built with Shadcn/UI, Magic UI, TailwindCSS, and Framer Motion.

## Commands

```bash
npm install       # install dependencies (package-lock.json is npm; README mentions pnpm but CI/Docker use npm ci)
npm run dev        # start local dev server
npm run build       # production build (output: "standalone" per next.config.mjs)
npm run start       # run the production build
npm run lint        # next lint (config: .eslintrc.json extends next/core-web-vitals)
```

There is no test suite configured in this repo.

## Architecture

**Single config file drives the entire site.** All personal content — bio, work history, education, skills, projects, contributions, and social links — lives in `src/data/resume.tsx` as one `DATA` object. `src/app/page.tsx` renders every section (`hero`, `about`, `work`, `education`, `skills`, `projects`, `contributions`, `contact`) by mapping over `DATA`. To update site content, edit `src/data/resume.tsx`; to change layout/sections, edit `src/app/page.tsx`. There are no dynamic routes — everything is one page.

**Component layers:**
- `src/components/ui/` — Shadcn/UI primitives (avatar, badge, button, card, separator, tooltip), configured via `components.json` (style: "new-york", baseColor: "neutral").
- `src/components/magicui/` — Magic UI animation components (`blur-fade`, `blur-fade-text`, `dock`), used for scroll-in animations throughout `page.tsx` via a shared `BLUR_FADE_DELAY` stagger constant.
- `src/components/` (top level) — page-specific composites: `resume-card`, `project-card`, `contribution-card`, `hackathon-card`, `navbar` (uses `dock.tsx` for the floating nav), `mode-toggle` (dark/light via `next-themes`), `theme-provider`, `mdx.tsx`, `icons.tsx`.
- Path alias `@/*` maps to `src/*` (see `tsconfig.json` / `components.json` aliases).

**Blog (currently unused/vestigial):** `src/data/blog.ts` contains MDX-processing utilities (`getBlogPosts`, `getPost`, `markdownToHTML` via `unified`/`remark`/`rehype-pretty-code`) that read `.mdx` files from a `content/` directory. There is no `content/` directory and no blog route under `src/app` currently — the live navbar links to an external Medium blog instead (`DATA.navbar` in `resume.tsx`). Note this before assuming blog infrastructure is wired up.

**Theming:** Dark mode is the default (`defaultTheme="dark"` in `ThemeProvider`, `src/app/layout.tsx`), toggled via `next-themes` and `mode-toggle.tsx`. Styling uses TailwindCSS with CSS variables (`tailwind.config.ts`, `src/app/globals.css`), plus `tailwindcss-animate` and `@tailwindcss/typography` for the Markdown-rendered `summary`/bio text.

## Deployment

Deployment is self-hosted via Docker, not Vercel (despite the README's Vercel button):
- `Dockerfile` — multi-stage build producing a Next.js `standalone` output image running as a non-root `nextjs` user, listening on port 3000.
- `.github/workflows/ci.yml` — on push to `main`, builds and pushes the Docker image (`aritradevelops/aritradevelops`, `linux/arm64`) to Docker Hub. Build-time secrets are passed as `NEXT_BUILD_ENVS` and written to a `.env` file inside the image build.
- `.github/workflows/cd.yml` — triggers after CI completes; SSHes into the server, pulls the new image, and restarts the `aritradevelops` container on host port 3001.
