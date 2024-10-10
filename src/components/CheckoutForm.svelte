<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  let load = false;

  onMount(() => {
    load = true;
  });
</script>

{#if load}
  <div in:fade={{ duration: 300 }}>
    <h2>Checkout</h2>
  </div>
{/if}
