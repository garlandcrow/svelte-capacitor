<script lang="ts">
  let count: number = 0
</script>

<div class="" on:click={() => count++}>
  Count: {count}
</div>

<div class="use-style">This is styled in style tag.</div>

<style>
  .use-style {
    background-color: red;
    color: white;
    padding: 5px;
  }
</style>
