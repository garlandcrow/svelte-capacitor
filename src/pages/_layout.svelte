<script lang="ts">
  import SafeInsetDiv from '@components/SafeInsetDiv.svelte'
</script>

<SafeInsetDiv class="main">
  <slot />
</SafeInsetDiv>

<style>
  .main {
    margin: 50px auto;
  }
</style>
