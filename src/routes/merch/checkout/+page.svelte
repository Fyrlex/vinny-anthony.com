<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import Meta from '../../../components/Metadata.svelte';
  import { onMount } from 'svelte';

  import Ant1 from '$lib/assets/Ant1.jpg';
  import Ant2 from '$lib/assets/Ant2.jpg';

  let load = false;

  onMount(() => {
    load = true;
  });
</script>

<svelte:head>
  <Meta url="/merch/checkout" />
</svelte:head>

{#if load}
  <div class="flex flex-col md:flex-row mx-5 md:mx-20 md:space-x-5 space-y-5 md:space-y-0">
    <div class="md:w-3/5 mx-auto container text-center items-center justify-start flex flex-col space-y-10">
      <h1
        transition:fly={{ delay: 300, duration: 1000, y: 50 }}
        class="text-5xl text-orange-300 hover:cursor-pointer duration-300 hover:text-orange-400"
      >
        Checkout
      </h1>
      <p>
        Hello! This page is not supposed to be seen. If you can easily see this, there might be a problem with our
        website. Contact us!
      </p>
      <a class="bg-blue-500 hover:bg-blue-600 duration-300 text-white font-bold py-2 px-4 rounded" href="/">
        Home Page
      </a>
    </div>
  </div>
{/if}
