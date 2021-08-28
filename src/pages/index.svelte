<script>
  import { _ } from 'svelte-i18n'
  import { url } from '@roxi/routify'
  import Counter from '@components/Counter.svelte'

  const image = 'svelte_cap.png'
</script>

<img src={image} alt="logo" />

<h1 class="">{$_('greeting')}</h1>

<Counter />

<a href={$url('/test')}>{$_('links.test')}</a>

<style>
  img {
    max-width: 100%;
  }
</style>
