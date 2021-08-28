<script>
  import { _ } from 'svelte-i18n'
  import { url } from '@roxi/routify'
</script>

<a href={$url('/')}>{$_('links.home')} </a>
