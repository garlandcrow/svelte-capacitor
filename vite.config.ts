import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tsconfigPaths from 'vite-tsconfig-paths'
import sveltePreprocess from 'svelte-preprocess'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Consult https://github.com/sveltejs/svelte-preprocess for more information
    svelte({
      preprocess: sveltePreprocess({
        defaults: {
          style: 'postcss',
        },
        postcss: true,
      }),
    }),
    tsconfigPaths(),
  ],
  publicDir: './assets/',
  build: {
    outDir: './public/',
  },
  optimizeDeps: { exclude: ['@roxi/routify', '@urql/svelte'] },
})
