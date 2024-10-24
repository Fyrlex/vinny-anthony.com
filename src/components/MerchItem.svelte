<script lang="ts">
  import Cookies from 'js-cookie';
  import { Cart, type ICartItem, type IMerchItem } from '../stores/cart.js';
  import { fade, fly } from 'svelte/transition';

  export let item: IMerchItem;
  export let size: string;
  export let quantity: number;

  let showAlternateImage = false;
  let showAddedMessage = false;

  function setSize(s: string) {
    Cookies.set('shop-' + item.id + '-size', (size = s), { expires: 1 });
  }

  function increaseQuantity() {
    Cookies.set('shop-' + item.id + '-quantity', (++quantity).toString(), { expires: 1 });
  }

  function decreaseQuantity() {
    Cookies.set('shop-' + item.id + '-quantity', (--quantity).toString(), { expires: 1 });
  }

  function addToCart(itemName: string, size: string, quantity: number) {
    const cart = JSON.parse(Cookies.get('cart') || '[]') as ICartItem[];

    const index = cart.findIndex(cartItem => cartItem.id === itemName + '-' + size);

    if (index !== -1) {
      cart[index].quantity += quantity;
    } else {
      cart.push({ id: itemName + '-' + size, quantity });
    }

    Cookies.set('cart', JSON.stringify(cart));

    Cart.set(cart);

    showAddedMessage = true;

    setTimeout(() => {
      showAddedMessage = false;
    }, 1500);
  }

  function toggleImage() {
    showAlternateImage = !showAlternateImage;
  }
</script>

<div class="ring-2 ring-orange-300 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
  <button type="button" class="w-full p-0 border-0 bg-transparent cursor-pointer relative" on:click={toggleImage}>
    {#if showAlternateImage}
      <img in:fade={{ duration: 500 }} src={item.imageB} alt={item.name} class="w-full object-cover rounded-t-lg" />
    {:else}
      <img in:fade={{ duration: 500 }} src={item.imageA} alt={item.name} class="w-full object-cover rounded-t-lg" />
    {/if}
  </button>
  <div class="mt-2">
    <div class="flex flex-row justify-between items-center">
      <h2 class="text-2xl font-semibold">{item.name}</h2>
      <p class="text-xl items-end">Qty.</p>
    </div>
    <div class="flex flex-row justify-between my-2">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
        {#each ['S', 'M', 'L', 'XL'] as s}
          <button
            class="rounded-md px-2 py-2 duration-300 hover:bg-orange-200 {size === s
              ? 'bg-orange-300 text-white'
              : 'bg-gray-100 text-gray-700'}"
            on:click={() => setSize(s)}
          >
            {s.toUpperCase()}
          </button>
        {/each}
      </div>
      <div class="flex flex-row items-center">
        <button
          class={'bg-gray-100 duration-300 text-gray-700 font-bold w-7 h-full rounded-l select-none' +
            (quantity === 1 ? ' cursor-not-allowed' : ' hover:bg-gray-300')}
          on:click={() => quantity > 1 && decreaseQuantity()}
        >
          -
        </button>
        <span class="w-8 py-2 h-full bg-orange-300 flex items-center justify-center">{quantity}</span>
        <button
          class={'bg-gray-100 duration-300 text-gray-700 font-bold w-7 h-full rounded-r select-none' +
            (quantity === 5 ? ' cursor-not-allowed' : ' hover:bg-gray-300')}
          on:click={() => quantity < 5 && increaseQuantity()}
        >
          +
        </button>
      </div>
    </div>
    <div class="flex flex-row justify-between items-center mt-5">
      <p class="text-2xl font-bold">${item.price}</p>
      <div class="flex flex-row space-x-2 items-center">
        {#if showAddedMessage}
          <p out:fly={{ x: 10, duration: 100 }} class="text-orange-300">Added!</p>
        {/if}
        <button
          class="bg-orange-500 duration-300 hover:bg-orange-600 text-white font-bold py-2 px-3 rounded"
          on:click={() => {
            addToCart(item.id, size.toLowerCase(), quantity);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</div>
