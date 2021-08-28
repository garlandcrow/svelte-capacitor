<script>
  import { url } from '@roxi/routify'
  import Counter from '@components/Counter.svelte'

  const name = 'svelte'
  const image = 'svelte_cap.png'
</script>

<img src={image} alt="logo" />

<h1 class="">Welcome to {name}!</h1>

<Counter />

<a href={$url('/test')}>Link to Test Page</a>

<style>
  img {
    max-width: 100%;
  }
</style>
