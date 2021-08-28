import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tsconfigPaths from 'vite-tsconfig-paths'
import preprocess from 'svelte-preprocess'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Consult https://github.com/sveltejs/svelte-preprocess for more information
    svelte({
      preprocess: preprocess(),
    }),
    tsconfigPaths(),
  ],
  optimizeDeps: { exclude: ['@roxi/routify'] },
})
