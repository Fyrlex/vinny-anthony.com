<script lang="ts">
  import Cookies from 'js-cookie';
  import { Cart } from '../stores/cart.js';

  export let item: {
    name: string;
    id: string;
    price: number;
    image: string;
  };

  export let size: string;
  export let quantity: number;

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
    const cart = JSON.parse(Cookies.get('cart') || '[]');

    const index = cart.findIndex((cartItem: any) => cartItem.id === itemName + '-' + size);

    if (index !== -1) {
      cart[index].quantity += quantity;
    } else {
      cart.push({ id: itemName + '-' + size, quantity });
    }

    Cookies.set('cart', JSON.stringify(cart));

    Cart.set(cart);
  }
</script>

<div class="ring-2 ring-orange-300 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
  <img src={item.image} alt={item.name} class="w-full h-48 object-cover rounded-t-lg" />
  <div class="mt-2">
    <div class="flex flex-row justify-between">
      <h2 class="text-xl font-semibold">{item.name}</h2>
      <p class="items-end">Qty.</p>
    </div>
    <div class="flex flex-row justify-between my-2">
      <div>
        {#each ['S', 'M', 'L', 'XL'] as s}
          <button
            class="rounded-md px-2 py-2 mr-2 duration-300 hover:bg-orange-200 {size === s
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
          class={'bg-gray-100 duration-300 text-gray-700 font-bold w-5 h-full rounded-l select-none' +
            (quantity === 1 ? ' cursor-not-allowed' : ' hover:bg-gray-300')}
          on:click={() => quantity > 1 && decreaseQuantity()}
        >
          -
        </button>
        <span class="w-7 text-center py-2 bg-orange-300">{quantity}</span>
        <button
          class={'bg-gray-100 duration-300 text-gray-700 font-bold w-5 h-full rounded-r select-none' +
            (quantity === 5 ? ' cursor-not-allowed' : ' hover:bg-gray-300')}
          on:click={() => quantity < 5 && increaseQuantity()}
        >
          +
        </button>
      </div>
    </div>
    <div class="flex flex-row justify-between items-center mt-5">
      <p class="text-lg font-bold">${item.price}</p>
      <button
        class="bg-orange-500 duration-300 hover:bg-orange-600 text-white font-bold py-2 px-3 rounded"
        on:click={() => addToCart(item.id, size.toLowerCase(), quantity)}
      >
        Add to Cart
      </button>
    </div>
  </div>
</div>
