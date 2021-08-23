<script>
  import { url } from '@roxi/routify'
  import Counter from '@components/Counter.svelte'

  const name = 'svelte'
</script>

<h1 class="bg-red-300">Welcome to {name}!</h1>
<Counter />
<h1 class="tester">Test HMR style change.</h1>
<a href={$url('/test')}>Link to Test Page</a>

<style>
  .tester {
    @apply bg-green-300;
  }
</style>
