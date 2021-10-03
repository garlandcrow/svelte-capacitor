const sveltePreprocess = require('svelte-preprocess')

module.exports = {
  // Consult https://github.com/sveltejs/svelte-preprocess for more information
  preprocess: sveltePreprocess({
    postcss: true,
  }),
}
