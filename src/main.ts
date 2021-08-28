import App from './App.svelte'
import './i18n'
import './global.css'
import 'virtual:windi.css'

const app = new App({
  target: document.getElementById('app'),
})

export default app
