<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import Meta from '../../../components/meta.svelte';
  import { onMount } from 'svelte';

  let load = false;

  onMount(() => {
    load = true;

    window.addEventListener('beforeunload', beforeUnload);

    return () => {
      window.removeEventListener('beforeunload', beforeUnload);
    };
  });

  function beforeUnload(event: BeforeUnloadEvent) {
    const message = 'Are you sure you want to leave?';
    event.returnValue = message; // Standard way to trigger the dialog
    return message; // For some browsers
  }
</script>

<svelte:head>
  <Meta data={{ title: 'Self proclaimed local legend indie sleaze artist', url: '/merch/checkout' }} />
</svelte:head>

{#if load}
  <div class="text-center items-center">
    <h1 class="text-3xl md:text-5xl text-orange-300 hover:cursor-pointer duration-300 hover:text-orange-400">
      Checkout
    </h1>
  </div>
{/if}
