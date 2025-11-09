# Notate.ai

A macOS productivity app that helps you capture thoughts and track time effortlessly.

## Features

- **Quick Capture**: Type `///` anywhere on your Mac to instantly capture thoughts with AI processing
- **Activity Timer**: Type `;;;` to track work sessions with automatic calendar sync
- **Three Views**: Timeline, List, and Analysis views for organizing your data
- **AI-Powered**: Automatic extraction and organization of notes and tasks

## Website

This repository contains the landing page for Notate.ai, built with:

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui components

## Development

```bash
cd frontend
npm install
npm run dev
```

Visit http://localhost:3000 to see the site.

## Building for Production

```bash
cd frontend
npm run build
```

The static site will be exported to the `out` directory.

## GitHub Pages Deployment

This site is automatically deployed to GitHub Pages when you push to the main branch.

Visit: https://vw-ai.github.io/Notate.ai/

### Setup Instructions

1. Ensure GitHub Pages is enabled in your repository settings
2. Set the source to "GitHub Actions"
3. Push to main branch to trigger deployment

## Project Structure

```
frontend/
├── app/              # Next.js app router pages
├── components/       # React components
│   ├── features.tsx  # Workflow demonstrations
│   ├── hero.tsx      # Hero section
│   ├── navigation.tsx # Navigation bar
│   ├── team.tsx      # Team section
│   ├── triple-view.tsx # Product views
│   └── video-showcase.tsx # Demo video
├── public/           # Static assets (images, logo)
└── ...
```

## License

© 2025 VW.ai. All rights reserved.
