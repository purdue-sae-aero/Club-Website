# Purdue SAE Aero Website

Official website for the Purdue SAE Aero Design team built with Next.js and TypeScript.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm (comes with Node.js)
- Git

### First Time Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/purdue-sae-aero/Club-Website.git
   cd Club-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

   This will download all required packages into a `node_modules/` folder. This folder is **automatically excluded from Git** by the `.gitignore` file, so you don't need to worry about committing it.

3. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## 📝 Making Changes

### Standard Workflow

1. **Pull latest changes**
   ```bash
   git pull
   ```

2. **Install any new dependencies** (if package.json was updated)
   ```bash
   npm install
   ```

3. **Make your changes** to the code

4. **Test locally**
   ```bash
   npm run dev
   ```

5. **Commit and push** (node_modules is automatically excluded!)
   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```

**That's it!** The `.gitignore` file automatically prevents `node_modules/` and `.next/` from being committed, so you don't need any extra steps.

## 🛠️ Available Commands

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Run production build locally
- `npm run lint` - Run linting

## 📁 Project Structure

```
Club-Website/
├── app/                        # Next.js pages (App Router)
│   ├── page.tsx               # Home page
│   ├── layout.tsx             # Root layout
│   ├── globals.css            # Global styles
│   ├── leadership/            # Leadership page
│   ├── sponsors/              # Sponsors page
│   └── competition-*/         # Competition pages
├── components/                 # Reusable components
│   ├── Navbar.tsx
│   └── Footer.tsx
├── public/                     # Static files
│   ├── images/
│   │   ├── leadership/        # Leadership photos
│   │   ├── backgrounds/       # Background images
│   │   └── other/             # Other media
│   └── favicon.ico
├── .gitignore                 # Excludes node_modules, .next, etc.
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
└── next.config.js             # Next.js configuration
```

## 🎨 Adding New Pages

1. Create a new folder in `app/` with the page name
2. Add a `page.tsx` file inside that folder

Example:
```bash
mkdir app/gallery
touch app/gallery/page.tsx
```

## 📦 Adding Dependencies

If you need to add a new npm package:

```bash
npm install package-name
```

This will:
- Install the package to `node_modules/`
- Update `package.json` and `package-lock.json`

**Important:** Only commit the `package.json` and `package-lock.json` files, **not** `node_modules/` (this is automatic thanks to `.gitignore`).

## 🚨 Common Issues

### "Module not found" errors
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 is already in use
```bash
# Kill the process or use a different port
npm run dev -- -p 3001
```

### Changes not showing up
```bash
# Clear Next.js cache and restart
rm -rf .next
npm run dev
```

## 🌐 Deployment

The site automatically deploys to Vercel when you push to the `main` branch:

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Vercel automatically:**
   - Detects the push
   - Runs `npm install`
   - Runs `npm run build`
   - Deploys the static output

3. **View your site** at the Vercel URL

## 📸 Adding Media Files

### Images
- Add images to `public/images/` in the appropriate subfolder
- Use Next.js Image component for optimization:

```tsx
import Image from 'next/image';

<Image
  src="/images/folder/filename.jpg"
  alt="Description"
  width={600}
  height={400}
/>
```

### Videos
- **Recommendation:** Convert .mov files to .mp4 for better browser compatibility
- Place videos in `public/images/other/`
- Use standard HTML video tag:

```tsx
<video controls>
  <source src="/images/other/video.mp4" type="video/mp4" />
</video>
```

## 🔧 Troubleshooting

### If someone accidentally commits node_modules:

Don't panic! Here's how to fix it:

1. **Remove from Git (keeps local copy)**
   ```bash
   git rm -r --cached node_modules
   git commit -m "Remove node_modules from Git"
   git push
   ```

2. **Verify .gitignore includes:**
   ```
   /node_modules
   /.next
   ```

### If you see "Your branch has diverged":

```bash
git pull --rebase
# or
git pull
```

## 👥 Team Workflow Best Practices

1. **Always pull before starting work**
   ```bash
   git pull
   ```

2. **Create descriptive commit messages**
   ```bash
   git commit -m "Add team photo gallery page"
   ```

3. **Test locally before pushing**
   ```bash
   npm run dev
   # Test your changes
   npm run build  # Make sure it builds
   ```

4. **Keep dependencies up to date**
   ```bash
   npm update
   ```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For questions or issues:
- Open an issue on GitHub
- Contact the web development team
- Email: sae-aero@purdue.edu

---

**Built with ❤️ by Purdue SAE Aero**
