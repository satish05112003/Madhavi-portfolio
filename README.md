# Madhavi Portfolio

A professional developer portfolio built for CH. Yudaya Madhavi, Gen AI Engineer & ML Developer, featuring a premium Apple-inspired design system.

## Overview

This is a modern portfolio application built using the following technologies:

* Next.js
* TypeScript
* Tailwind CSS
* Framer Motion

Key visual and functional features:

* Apple-inspired glassmorphism user interface
* Interactive spatial skill bubbles with drag-and-spring momentum physics
* Product showcase case study layout with aspect-ratio mockups
* Vertical VisionOS-style sticky dock navigation with inertial lagging parallax
* Responsive layouts tailored for mobile, tablet, and desktop viewports

## Project Structure

The project code resides in the `portfolio` subdirectory:

```
portfolio/
├── src/
│   ├── app/                # Next.js App Router pages and global layouts
│   ├── components/         # Reusable UI elements and page sections
│   │   └── sections/       # Section-specific components (Hero, Projects, Experience, etc.)
│   ├── lib/                # Shared utilities and data stores
│   └── types/              # TypeScript interface definitions
├── public/                 # Static assets, vector icons, and resume PDF
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS design system tokens
└── package.json            # Node dependency configuration
```

* `src/app/page.tsx`: The primary landing page orchestrating section display order.
* `src/components/sections/`: Contains independent visual segments of the page.
* `src/lib/portfolio-data.ts`: The central source of truth containing copy, data structures, and contact variables.

## Installation

Install the required dependencies from the `portfolio` subdirectory:

```bash
cd portfolio
npm install
```

## Run Locally

Launch the local Next.js development server:

```bash
npm run dev
```

The application runs on the default port:

http://localhost:3000

## Production Build

Compile the optimized static production export:

```bash
npm run build
npm start
```

## Customizing Content

Most text copy, data structures, and ordering configurations are centralized in:

`portfolio/src/lib/portfolio-data.ts`

### Personal Information

Modify the `profile` object at the top of `portfolio-data.ts` to edit:
* Name (`fullName`)
* Headline (`headline`)
* Bio paragraphs (`bio`)
* Role and company (`currentRole`, `currentCompany`)
* Location coordinates (`city`, `state`, `country`)
* Phone, Email, and social links

To replace the downloadable resume document, overwrite the file:

`portfolio/public/resume.pdf`

### Skills

Skills are managed in two places depending on the section:

1. **Skills & Technologies Grid**:
   * Add, remove, or modify items in the `skills` array inside `portfolio-data.ts`.
   * Each entry requires a `name` string, a `category` matching one of the predefined categories, and a `proficiency` status.
2. **Hero Floating Skill Bubbles**:
   * Managed directly in the `SKILL_ORBS` configuration array in `portfolio/src/components/sections/HeroSection.tsx`.
   * To add or remove bubbles, edit the list of objects.
   * Properties include:
     * `name`: Text label.
     * `size`: "large", "medium", or "small" (configures padding and font size).
     * `layer`: "far", "mid", or "front" (controls opacity, blur, and scroll parallax speed).
     * `cluster`: 1, 2, or 3 (assigns bubble to Top Left, Center Right, or Bottom Left cluster zones).
     * `priority`: "high", "medium", or "low" (handles viewport responsiveness capping).
     * `desktop`, `tablet`, `mobile`: `{ x, y }` percentage coordinates relative to the hero section bounds.

### Experience

Internship and work entries are declared in the `experience` array inside `portfolio-data.ts`:
* To add a job: insert a new object containing `company`, `role`, `type`, `location`, `description`, and `duration`.
* To edit: modify any of these string values directly.

### Projects

Projects are customized inside the `projects` array of `portfolio-data.ts` and their custom animations are controlled in `portfolio/src/components/sections/ProjectVisuals.tsx`:
* **Add a project**: Create a new project object in `portfolio-data.ts` with `title`, `category`, `problem`, `overview`, `metrics`, `specifications`, `techStack`, `githubUrl`, and `demoUrl`.
* **Remove a project**: Delete the corresponding object from the array.
* **Edit content**: Update fields within the target project object.
* **Change project SVG**: Rebuild or modify the rendering logic inside `portfolio/src/components/sections/ProjectVisuals.tsx` (which maps dynamic vector dashboards dynamically matching the project ID/title).

### Education

Modify the `education` array in `portfolio-data.ts`:
* Adjust objects containing `institution`, `degree`, `field`, `cgpa`, `percentage`, `startYear`, and `endYear`.

### Achievements

Edit entries in the `achievements` array in `portfolio-data.ts`:
* Modifying the objects updates the achievements timeline.

### Certificates

Certificates are hosted in:

`portfolio/src/components/sections/CertificatesSection.tsx`

* To add a certificate: Append a new object to the local `certificates` array containing `title`, `issuer`, `description`, and the `link` URL.
* To update link: Modify the `link` parameter to point to the new hosting URL (e.g. Google Drive, Credly).

## Color System

The project relies on a locked color system. Do not introduce raw tailwind color classes or alternative hexadecimal values outside of:

* **Carbon Black** (Primary background): `#1C1C1C`
* **Mocha** (Accent components, glass highlights, glowing layers): `#4E342E`
* **Latte** (Primary text, headers, border lines): `#D7CCC8`

## Deployment

### Deploy on Vercel

1. Commit and push the project repository to your GitHub account.
2. Sign in to your Vercel Dashboard.
3. Click "Add New" and select "Project".
4. Import the `Madhavi-portfolio` repository.
5. In the settings, specify the Root Directory as `portfolio` (since the Next.js app sits in the sub-folder).
6. Click "Deploy". Vercel will automatically configure the build command (`npm run build`) and output folder.
7. Subsequent updates pushed to the GitHub repository's main branch will trigger automatic redeployments on Vercel.

## Updating the Live Website

Push updates from your local workspace to trigger live updates:

```bash
git add .
git commit -m "Add comprehensive project documentation"
git push
```

Vercel will detect the push, run static checks, compile the production server, and switch routing automatically.

## License

This project is licensed under the terms of the MIT License.
