<script lang="ts">
  import { _ } from 'svelte-i18n'
  let count: number = 0
</script>

<div class="flex flex-col gap-4 p-4">
  <div class="gap-4 p-4 bg-blue-500 rounded" on:click={() => count++}>
    {$_('counter.label', { values: { count } })}
  </div>

  <div class="use-style">This is styled in style tag.</div>
</div>

<style lang="postcss">
  .use-style {
    @apply bg-green-500 text-white p-4 rounded;
  }
</style>
