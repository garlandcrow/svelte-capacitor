import App from './App.svelte'
import './i18n'
import './global.postcss'

const app = new App({
  target: document.getElementById('app'),
})

export default app
