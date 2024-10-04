<script lang="ts">
  import { fly } from 'svelte/transition';
  import Meta from '../../components/meta.svelte';
  import { onMount } from 'svelte';
  import MerchItem from '../../components/MerchItem.svelte';

  import Ant1 from '$lib/assets/Ant1.jpg';
  import Ant2 from '$lib/assets/Ant2.jpg';

  let load = false;

  export let data: { hoodieSize: string; tshirtSize: string };

  let items = [
    {
      name: 'T-Shirt',
      description: 'Comfortable cotton t-shirt',
      price: 20,
      image: Ant1,
    },
    {
      name: 'Hoodie',
      description: 'Warm and cozy hoodie',
      price: 40,
      image: Ant2,
    },
  ];

  onMount(() => {
    load = true;

    console.log(data.hoodieSize);
    console.log(data.tshirtSize);
  });
</script>

<svelte:head>
  <Meta data={{ title: 'Self proclaimed local legend indie sleaze artist', url: '/shop' }} />
</svelte:head>

{#if load}
  <div class="text-center items-center">
    <h1
      transition:fly={{ delay: 300, duration: 1000, y: 50 }}
      class="text-3xl md:text-5xl text-orange-300 hover:cursor-pointer duration-300 hover:text-orange-400"
    >
      Merch
    </h1>
  </div>
  <div class="flex justify-center my-10">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <MerchItem item={items[0]} size={data.tshirtSize} />
      <MerchItem item={items[1]} size={data.hoodieSize} />
    </div>
  </div>
{/if}
