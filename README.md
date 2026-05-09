# Brian Oberley Apps

This repository contains multiple independent web applications and projects.

## Projects

### BabyGate
A professional product website for selling BabyGate.

- **Tech Stack**: Next.js 14+, React, TypeScript, Tailwind CSS
- **Hosting**: GitHub Pages (https://brianmoberley.github.io/apps/babygate/)
- **Directory**: `/babygate`

## Setup & Development

Each project is self-contained with its own dependencies and build configuration.

### BabyGate Development

```bash
cd babygate
npm install
npm run dev
```

The development server will run at `http://localhost:3000/apps/babygate`

## Deployment

Deployments to GitHub Pages are automatic via GitHub Actions when pushing to `main` or the feature branches. See the workflow in `.github/workflows/deploy.yml`.

## Project Structure

```
.
├── babygate/           # BabyGate project (Next.js)
│   ├── app/           # Next.js app directory
│   ├── public/        # Static assets
│   ├── package.json
│   └── next.config.ts
├── .github/
│   └── workflows/     # CI/CD workflows
├── .gitignore
└── README.md
```
