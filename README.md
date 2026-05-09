# Peaceful PlayGate

A beautifully designed, premium play gate website for modern urban parents.

## Project

### Peaceful PlayGate
A professional product website for selling Peaceful PlayGate - premium safety gates with intentional design.

- **Tech Stack**: Next.js 16+, React, TypeScript, Tailwind CSS
- **Hosting**: GitHub Pages (https://brianmoberley.github.io/PeacefulBabyGate/)
- **Directory**: `/babygate`

## Setup & Development

Each project is self-contained with its own dependencies and build configuration.

### BabyGate Development

```bash
cd babygate
npm install
npm run dev
```

The development server will run at `http://localhost:3000/PeacefulBabyGate`

## Deployment

Deployments to GitHub Pages are automatic via GitHub Actions when pushing to `main`. See the workflow in `babygate/.github/workflows/deploy.yml`.

## Project Structure

```
.
├── babygate/              # Peaceful PlayGate Next.js application
│   ├── app/              # Next.js app directory
│   │   ├── components/   # Reusable components (Header, Footer)
│   │   ├── about/        # About page
│   │   ├── shop/         # Shop page
│   │   ├── orders/       # Order tracking page
│   │   ├── page.tsx      # Home page
│   │   ├── layout.tsx    # Root layout with Header/Footer
│   │   └── globals.css   # Global styles and design system
│   ├── .github/
│   │   └── workflows/    # GitHub Actions CI/CD
│   ├── public/           # Static assets
│   ├── package.json
│   ├── next.config.ts    # Next.js configuration
│   └── tailwind.config.ts # Tailwind CSS configuration
├── .gitignore
└── README.md
```
