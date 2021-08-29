import App from './App.svelte'
import './i18n'
// https://windicss.org/integrations/vite.html
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import './global.css'
import 'virtual:windi-utilities.css'

const app = new App({
  target: document.getElementById('app'),
})

export default app
