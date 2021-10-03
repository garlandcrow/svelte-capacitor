import sveltePreprocess from 'svelte-preprocess'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
export default {
  // Consult https://github.com/sveltejs/svelte-preprocess for more information
  preprocess: sveltePreprocess({
    postcss: true,
  }),
  kit: {
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
