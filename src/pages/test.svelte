<script lang="ts">
  import { _ } from 'svelte-i18n'
  import { url } from '@roxi/routify'
  const x = 'asdf'
</script>

<a href={$url('/')}>{$_('links.home')} </a>
