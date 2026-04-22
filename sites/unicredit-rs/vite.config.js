import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project sites use /<repo-name>/; local dev uses /
// Set VITE_BASE_URL in CI (see .github/workflows/deploy-github-pages.yml)
const base = process.env.VITE_BASE_URL ?? '/'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
})
