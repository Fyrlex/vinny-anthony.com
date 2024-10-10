<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import Meta from '../../components/meta.svelte';
  import { onMount } from 'svelte';
  import MerchItem from '../../components/MerchItem.svelte';

  import Ant1 from '$lib/assets/Ant1.jpg';
  import Ant2 from '$lib/assets/Ant2.jpg';

  import Cookies from 'js-cookie';

  let load = false;

  let items = [
    {
      name: 'T-Shirt',
      id: 'tshirt',
      description: 'Comfortable cotton t-shirt',
      price: 20,
      image: Ant1,
    },
    {
      name: 'Hoodie',
      id: 'hoodie',
      description: 'Warm and cozy hoodie',
      price: 40,
      image: Ant2,
    },
  ];

  onMount(() => {
    load = true;

    if (!Cookies.get('tshirt-size')) {
      Cookies.set('tshirt-size', 'M', { expires: 1 });
    }

    if (!Cookies.get('hoodie-size')) {
      Cookies.set('hoodie-size', 'M', { expires: 1 });
    }
  });

  function getSize(id: string) {
    return Cookies.get(id + '-size')!;
  }

  function getQuantity(id: string) {
    if (!Cookies.get(id + '-quantity')) {
      Cookies.set(id + '-quantity', '1', { expires: 1 });
    }

    return parseInt(Cookies.get(id + '-quantity')!);
  }
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
      {#each items as item}
        <MerchItem {item} size={getSize(item.id)} quantity={getQuantity(item.id)} />
      {/each}
    </div>
  </div>

  <div class="flex justify-center mt-10">
    <button
      class="bg-orange-300 hover:bg-orange-400 duration-300 text-white font-bold py-2 px-4 rounded"
      on:click={() => {
        window.location.href = '/merch/checkout';
      }}
    >
      Buy Now
    </button>
  </div>
{/if}
