# AG Pipeline Blueprint

## Project Overview

This deck presents a comprehensive roadmap for implementing an AI-assisted and USD-centric studio pipeline for a growing London team.

## Deck Usage (scroll-snap + PDF reference overlay)

This deck is built as **real HTML/CSS components** (not a PDF viewer).

If you already have a PDF, you can export it into images and use them as a **semi-transparent reference overlay** while you rebuild/adjust the real slides.

### Put reference images here

Place exported images in:

- `public/ref/slide-1.png`
- `public/ref/slide-2.png`
- ...

Slide numbers are based on the order of `navItems` in `src/pages/Index.tsx`.

### Controls

- Scroll / trackpad: snap between slides
- Nav bar buttons: jump to a section
- **R**: toggle reference overlay
- Nav **Ref** button: toggle reference overlay

### Where it's implemented

- `src/components/deck/DeckProvider.tsx`: global deck state (overlay toggle + opacity)
- `src/components/deck/SlideSection.tsx`: renders the optional reference overlay image
- `src/components/deck/Navigation.tsx`: active section tracking + hash syncing + Ref toggle button

## Run locally on Windows (Cursor/VS Code)

If you see **`npm : The term 'npm' is not recognized`**, you need to install Node.js.

- Install **Node.js LTS** using the official Windows installer: [Node.js downloads](https://nodejs.org/en/download)
- During install, make sure **"Add to PATH"** is enabled.
- Close and re-open **Cursor** (or at least open a new terminal) so PATH refreshes.

Verify:

```powershell
node -v
npm -v
```

Then run the dev server:

```powershell
npm install
npm run dev
```

## Free temporary hosting (share online)

This is a Vite + React app. To host it for others, build the static site:

```powershell
npm run build
```

Your built site will be in `dist/`.

### Option A: Netlify "Drop" (fastest)

1) Go to `https://app.netlify.com/drop`  
2) Drag-and-drop the `dist/` folder

### Option B: Cloudflare Pages (free tier)

Create a Pages project and deploy the `dist/` output directory.

Note: This repo includes `public/_redirects` so React Router routes work on static hosts.

## How can I edit this code?

**Use your preferred IDE**

If you want to work locally using your own IDE, clone this repo and push changes.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- GSAP ScrollSmoother

## Customization

All content, colors, and styling can be customized:

- **Content**: Edit `src/config/content.ts` for all text content
- **Theme/Colors**: Edit `src/config/theme.ts` for all colors
- **Animations**: Edit `src/config/animations.ts` for animation presets
- **Layouts**: Edit `src/config/layouts.ts` for layout templates

See `CUSTOMIZATION_GUIDE.md` for detailed instructions.

## About AG

AG is part of [Alongside](https://www.wearealongside.com) - A Collective of Specialist Studios.
