<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import Meta from '../../components/Metadata.svelte';
  import { onMount } from 'svelte';
  import MerchItem from '../../components/MerchItem.svelte';

  import HoodieFront from '$lib/assets/merch/hoodiefront.png';
  import HoodieBack from '$lib/assets/merch/hoodieback.png';
  import TShirtFront from '$lib/assets/merch/tshirtfront.png';
  import TShirtBack from '$lib/assets/merch/tshirtback.png';

  import Cookies from 'js-cookie';
  import CartItem from '../../components/CartItem.svelte';
  import { Cart, type ICartItem, type IMerchItem } from '../../stores/cart.js';

  let load = false;

  let categoryItems: IMerchItem[] = [
    {
      name: 'Hoodie',
      id: 'hoodie',
      price: 35.0,
      imageA: HoodieFront,
      imageB: HoodieBack,
    },
    {
      name: 'T-Shirt',
      id: 't-shirt',
      price: 20.0,
      imageA: TShirtFront,
      imageB: TShirtBack,
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
  <Meta url="/shop" />
</svelte:head>

{#if load}
  <div class="flex flex-col md:flex-row mx-5 md:mx-20 md:space-x-5 space-y-5 md:space-y-0">
    <div class="md:w-1/5 invisible"></div>
    <div class="md:w-3/5 mx-auto container text-center items-center justify-start flex flex-col space-y-10">
      <h1
        transition:fly={{ delay: 300, duration: 1000, y: 50 }}
        class="text-5xl text-orange-300 hover:cursor-pointer duration-300 hover:text-orange-400"
      >
        Merch
      </h1>
      <div class="flex justify-center">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          {#each categoryItems as item}
            <MerchItem {item} size={getShopSize(item.id)} quantity={getShopQuantity(item.id)} />
          {/each}
        </div>
      </div>
      <a class="text-2xl bg-blue-500 hover:bg-blue-600 duration-300 text-white font-bold py-2 px-4 rounded" href="/">
        Home Page
      </a>
    </div>
    {#if cart.length === 0}
      <div class="md:w-1/5 invisible"></div>
    {:else}
      <div
        in:fly={{ y: 100, duration: 500 }}
        class="md:w-1/5 text-center bg-[#887160] rounded-md shadow-lg py-5 h-fit flex flex-col"
      >
        <h3 class="text-4xl md:text-5xl text-emerald-800 hover:text-cyan-200 hover:cursor-pointer duration-300">
          Cart
        </h3>
        <div>
          <div>
            {#each cart as item (item.id)}
              <CartItem {item} />
            {/each}
            <div class="flex justify-center">
              <button
                class="text-2xl bg-orange-300 hover:bg-orange-400 duration-300 text-white font-bold py-2 px-4 rounded"
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
