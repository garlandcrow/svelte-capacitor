<script>
  import { url } from '@roxi/routify'
  const name = 'svelte'
  const image = 'assets/svelte_cap.png'
</script>

<img src={image} />
<h1>Welcome to {name}!</h1>
<a href={$url('/test')}>Link to Test Page</a>

<style>
  img {
    max-width: 100%;
  }
</style>
