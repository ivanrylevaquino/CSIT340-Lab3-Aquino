# CSIT340 — Commands

Command Prompt or Git Bash. Not PowerShell. Keep the project on C:.

## Project

```
npm create vite@latest <name>
npm install
npm run dev
```

Stop the server: `Ctrl + C`

## Tailwind

```
npm install tailwindcss @tailwindcss/vite
```

Config: `@tailwindcss/vite` plugin in `vite.config.js`, `@import "tailwindcss";` in `src/index.css`.
Ignore any guide using `postcss`, `autoprefixer`, or `npx tailwindcss init -p`.

## Git

```
git init
git add .
git commit -m "message"
git branch -M main
git remote add origin <url>
git push -u origin main
git push
```
