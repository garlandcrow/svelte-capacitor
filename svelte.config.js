import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
export default {
  // Consult https://github.com/sveltejs/svelte-preprocess for more information
  preprocess: sveltePreprocess({
    postcss: true,
  }),
  kit: {
    adapter: adapter({
      fallback: "index.html",
    }),
    prerender: {
      enabled: false,
    },
    ssr: false,
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    vite: {
      resolve: {
        alias: {
          '@components': path.resolve('./src/components'),
        },
      },
    },
  },
}

