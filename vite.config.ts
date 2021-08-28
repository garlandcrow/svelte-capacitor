import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tsconfigPaths from 'vite-tsconfig-paths'
import preprocess from 'svelte-preprocess'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Consult https://github.com/sveltejs/svelte-preprocess for more information
    svelte({
      preprocess: preprocess(),
    }),
    WindiCSS(),
    tsconfigPaths(),
  ],
  optimizeDeps: { exclude: ['@roxi/routify'] },
})
