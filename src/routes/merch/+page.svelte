<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import Meta from '../../components/meta.svelte';
  import { onMount } from 'svelte';
  import MerchItem from '../../components/MerchItem.svelte';

  import Ant1 from '$lib/assets/Ant1.jpg';
  import Ant2 from '$lib/assets/Ant2.jpg';

  import Cookies from 'js-cookie';
  import CartItem from '../../components/CartItem.svelte';
  import { Cart, type ICartItem } from '../../stores/cart.js';

  let load = false;

  let categoryItems = [
    {
      name: 'T-Shirt',
      id: 't-shirt',
      price: 10.56,
      image: Ant1,
    },
    {
      name: 'Hoodie',
      id: 'hoodie',
      price: 20.99,
      image: Ant2,
    },
  ];

  onMount(() => {
    load = true;

    if (!Cookies.get('shop-t-shirt-size')) {
      Cookies.set('shop-t-shirt-size', 'M', { expires: 1 });
    }

    if (!Cookies.get('shop-hoodie-size')) {
      Cookies.set('shop-hoodie-size', 'M', { expires: 1 });
    }

    fetchCart();
  });

  function getShopSize(id: string) {
    return Cookies.get('shop-' + id + '-size')!;
  }

  function getShopQuantity(id: string) {
    if (!Cookies.get('shop-' + id + '-quantity')) {
      Cookies.set('shop-' + id + '-quantity', '1', { expires: 1 });
    }

    return parseInt(Cookies.get('shop-' + id + '-quantity')!);
  }

  let cart: ICartItem[] = [];

  Cart.subscribe(value => {
    cart = value;
  });

  function fetchCart() {
    if (!Cookies.get('cart')) {
      Cookies.set('cart', JSON.stringify([]), { expires: 1 });
    }

    Cart.set(JSON.parse(Cookies.get('cart') || '[]'));
  }
</script>

<svelte:head>
  <Meta data={{ title: 'Self proclaimed local legend indie sleaze artist', url: '/shop' }} />
</svelte:head>

{#if load}
  <div class="flex flex-col md:flex-row mx-5 md:mx-20 md:space-x-5 space-y-5 md:space-y-0">
    <div class="md:w-1/4 invisible" />
    <div class="md:w-1/2 mx-auto container text-center items-center justify-start flex flex-col">
      <h1
        transition:fly={{ delay: 300, duration: 1000, y: 50 }}
        class="text-5xl text-orange-300 hover:cursor-pointer duration-300 hover:text-orange-400"
      >
        Merch
      </h1>
      <div class="flex justify-center my-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          {#each categoryItems as item}
            <MerchItem {item} size={getShopSize(item.id)} quantity={getShopQuantity(item.id)} />
          {/each}
        </div>
      </div>

      <a class="bg-blue-500 hover:bg-blue-600 duration-300 text-white font-bold py-2 px-4 rounded" href="/">
        Home Page
      </a>
    </div>

    {#if cart.length === 0}
      <div class="md:w-1/5 invisible" />
    {:else}
      <div class="md:w-1/5 text-center bg-[#887160] rounded-md shadow-lg py-5 h-fit flex flex-col">
        <h3 class="text-4xl md:text-5xl text-emerald-800 hover:text-cyan-200 hover:cursor-pointer duration-300">
          Cart
        </h3>
        <div>
          <div>
            {#each cart as item}
              <CartItem {item} />
            {/each}
            <div class="flex justify-center">
              <button
                class="bg-orange-300 hover:bg-orange-400 duration-300 text-white font-bold py-2 px-4 rounded"
                on:click={() => {
                  window.location.href = '/merch/checkout';
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    {/if}
  </div>
{/if}
