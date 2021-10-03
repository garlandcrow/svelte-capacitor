<script lang="ts">
  import { onDestroy } from 'svelte'
  import { browser } from '$app/env';
  import safeAreaInsets from 'safe-area-insets'
  

  export let top = true
  export let bottom = true
  export let left = true
  export let right = true

  interface Insets {
    top: number
    left: number
    right: number
    bottom: number
  }

  let insets: Insets = {top: 0, left: 0, right: 0, bottom: 0 }
  
  if (browser) {
    insets = safeAreaInsets
    const updateinsets = (newInsets: Insets) => {
      insets = { ...insets, ...newInsets }
    }
  
    safeAreaInsets.onChange(updateinsets)
  
    onDestroy(() => {
      safeAreaInsets.offChange(updateinsets)
    })
  }
</script>

<div
  {...$$props}
  style={`padding:
    ${top ? insets.top : 0}px
    ${right ? insets.right : 0}px
    ${bottom ? insets.bottom : 0}px
    ${left ? insets.left : 0}px;`}
>
  <slot />
</div>
