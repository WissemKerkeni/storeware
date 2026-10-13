import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { defineConfig, type Connect, type Plugin } from 'vite'

// Pages served from their own folder; keep in sync with the rewrites in vercel.json.
const pages = ['/fr', '/de', '/de/impressum']

// Serve /fr from fr/index.html instead of falling back to the English page (dev and preview).
const rewritePages: Connect.NextHandleFunction = (req, _res, next) => {
  const [path, query] = (req.url ?? '').split('?')
  if (pages.includes(path)) req.url = `${path}/${query ? `?${query}` : ''}`
  next()
}

const pageRoutes: Plugin = {
  name: 'page-routes',
  configureServer: (server) => void server.middlewares.use(rewritePages),
  configurePreviewServer: (server) => void server.middlewares.use(rewritePages),
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [pageRoutes, react(), tailwindcss()],
  build: {
    rollupOptions: {
      // One HTML file per page so each language gets its own title, description and hreflang tags.
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        fr: resolve(import.meta.dirname, 'fr/index.html'),
        de: resolve(import.meta.dirname, 'de/index.html'),
        impressum: resolve(import.meta.dirname, 'de/impressum/index.html'),
      },
    },
  },
})
