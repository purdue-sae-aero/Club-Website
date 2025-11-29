# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Install dependencies
npm install

# Development server (http://localhost:3000)
npm run dev

# Production build (MUST pass before deploying)
npm run build

# Run production build locally
npm run start

# Linting
npm run lint
```

## Architecture Overview

This is a **static export Next.js 16** site using the App Router with TypeScript. The site is configured for static generation and deployed to Vercel.

### Key Configuration

- **Static Export Mode**: `next.config.js` has `output: 'export'` - this means:
  - All pages must be statically generated at build time
  - No server-side rendering or API routes
  - Images use `unoptimized: true`
  - Static files exported to `out/` directory
  - **Vercel Configuration**: `vercel.json` must include `outputDirectory: "out"` to serve static files correctly (prevents 404 errors)

- **TypeScript**: Strict mode enabled with ES2017 target
  - Path alias `@/*` maps to project root
  - Use arrow functions for event listeners (avoid `function() { this }` due to TypeScript implicit 'this' errors)

### Project Structure

```
app/                          # Next.js App Router pages
├── page.tsx                 # Home page (main landing)
├── layout.tsx               # Root layout (includes Navbar & Footer)
├── globals.css              # Global styles (Purdue gold/black theme)
├── leadership/page.tsx      # Leadership team page
├── sponsors/page.tsx        # Sponsors page
├── competition-*/page.tsx   # Individual competition pages
└── competition-archive/page.tsx

components/
├── Navbar.tsx              # Responsive nav with scroll behavior
└── Footer.tsx              # Site footer

public/images/
├── leadership/             # Team member photos
├── backgrounds/            # Hero/background images
└── other/                  # Competition photos, videos, logos
```

### Client-Side Patterns

All pages use `'use client'` directive for interactivity:

1. **Scroll Animations**: Home page uses IntersectionObserver for fade-in effects
2. **Navbar Behavior**: Shrinks on scroll, expands on hover
3. **Image Hover Effects**: Competition achievements trigger image changes via data attributes

### Styling Approach

- **CSS-in-globals**: All styles in `app/globals.css` using class-based selectors
- **Color Scheme**: Purdue colors - Gold (#CFB53B), Black (#000000), White (#FFFFFF)
- **Responsive**: Mobile-first with hamburger menu breakpoint
- **Animations**: Smooth transitions using cubic-bezier easing

### Deployment

- Automatic deployment on push to `main` via Vercel
- Build MUST succeed locally before pushing (`npm run build`)
- Static files exported to `out/` directory
- All routes pre-rendered at build time
- **Vercel Configuration**: `vercel.json` includes:
  - `cleanUrls: true` - removes `.html` extensions from URLs
  - `outputDirectory: "out"` - tells Vercel to serve static files from Next.js export directory

### Media Files

- **Videos**: Convert .mov to .mp4 for browser compatibility, place in `public/images/other/`
- **Images**: Use Next.js `Image` component with `unoptimized: true`
- Reference all public assets with `/images/...` paths

## Common Patterns

### Adding a New Page

1. Create folder in `app/` matching the route name
2. Add `page.tsx` with default export component
3. Include `'use client'` if using hooks/interactivity
4. Route automatically generated (e.g., `app/gallery/page.tsx` → `/gallery`)

### TypeScript Event Listeners

**Always use arrow functions**, not regular functions:
```tsx
// ✅ Correct
item.addEventListener('click', () => {
  const value = item.getAttribute('data-value');
});

// ❌ Wrong - causes TypeScript "implicit this" error
item.addEventListener('click', function() {
  const value = this.getAttribute('data-value');
});
```

### Image References

```tsx
// In JSX
<Image src="/images/other/photo.jpg" alt="..." width={600} height={400} />

// In CSS or dynamic paths
setImage('/images/backgrounds/hero.jpg')
```

## Troubleshooting

### 404 Errors on Vercel

If the site shows 404 errors after deployment, check:

1. **Vercel Configuration**: Ensure `vercel.json` includes `outputDirectory: "out"`. Without this, Vercel may treat the site as serverless functions instead of static files.

2. **Build Output**: Verify `out/` directory is generated after `npm run build` and contains `index.html` and all page directories.

3. **Deployment Type**: In Vercel dashboard, check that deployment type is correct (should serve static files, not LAMBDAS).

**Fix**: Add to `vercel.json`:
```json
{
  "cleanUrls": true,
  "outputDirectory": "out"
}
```
