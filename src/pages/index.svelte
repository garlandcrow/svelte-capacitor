<script>
  import { url } from '@roxi/routify'
  const name = 'svelte'
  const image = 'assets/svelte_cap.png'

  let count = 0
</script>

<img src={image} alt="logo" />
<h1 class="bg-red-300">Welcome to {name}!</h1>
<div class="p-4 rounded-lg bg-blue-500 text-white" on:click={() => count++}>
  Count: {count}
</div>
<h1 class="tester">Test HMR style change.</h1>
<a href={$url('/test')}>Link to Test Page</a>

<style>
  img {
    max-width: 100%;
  }
  .tester {
    @apply bg-green-300;
  }
</style>
