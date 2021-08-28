import { init, addMessages, getLocaleFromNavigator } from 'svelte-i18n'

import en from './en.json'

addMessages('en', en)

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
})
