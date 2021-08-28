import { defineConfig } from 'windicss/helpers'

// we are using tailwind.config.js instead of windicss so that vscode extension headwind will
// detect this file and be enabled. so if you have tailwind intellisense plugin, you need to disable
// it for this workspace and use the windicss intellisense plugin instead so it doesnt errror here

export default defineConfig({
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      'light', // first one will be the default theme
      'dark',
    ],
  },
  plugins: [
    require('daisyui'),
    require('windicss/plugin/forms'),
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/typography'),
  ],
})
