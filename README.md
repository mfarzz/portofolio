# Muhammad Fariz Portfolio

Personal portfolio website for Muhammad Fariz, an Information Systems student, developer, and data analyst. The site presents profile highlights, work experience, selected projects, GitHub repositories, skills, and contact information in a clean responsive layout.

Live site: https://mfariz.me

## Features

- Responsive portfolio layout for desktop and mobile
- Dark and light theme toggle
- Animated navigation and section transitions
- Featured project cards with screenshots, tech stack, source links, and live demo links
- GitHub repository section fetched from the GitHub API
- Centralized portfolio content in one data file
- SEO and social sharing meta tags

## Tech Stack

- React 18
- Vite
- TypeScript
- Tailwind CSS
- Motion
- Lucide React
- GitHub Pages deployment

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Deploy to GitHub Pages:

```bash
npm run deploy
```

## Editing Portfolio Content

Most portfolio content is centralized in:

```text
src/app/data/portfolio.ts
```

Edit this file when you want to update:

- Profile information
- Navigation sections
- Tech stack
- Work experience
- Organization experience
- Certifications
- Projects
- Skills
- Contact links
- GitHub repository configuration

UI components are kept in `src/app/components`. They mostly focus on rendering layout and animation, while the editable content lives in `portfolio.ts`.

## Project Structure

```text
src/
  app/
    App.tsx
    data/
      portfolio.ts
    components/
      Contact.tsx
      Experience.tsx
      FloatingProfile.tsx
      GithubRepos.tsx
      Navbar.tsx
      Overview.tsx
      Projects.tsx
      Skills.tsx
  styles/
    index.css
    tailwind.css
    theme.css
public/
  excamotion.png
  heoc.png
  portaltpb.png
  runup.png
```

## Notes

The custom domain is configured through `CNAME` and currently points to `mfariz.me`.
