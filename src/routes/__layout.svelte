<script lang="ts">
  import SafeInsetDiv from '@components/SafeInsetDiv.svelte'
  import '../i18n'
  import "../global.postcss"
</script>

<SafeInsetDiv class="w-screen h-screen">
  <div class="flex flex-col h-full p-6">
    <slot />
  </div>
</SafeInsetDiv>
