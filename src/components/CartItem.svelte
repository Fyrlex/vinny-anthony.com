<script lang="ts">
  import Cookies from 'js-cookie';
  import { Cart, type ICartItem } from '../stores/cart.js';
  import { getProductInfo } from '../lib/getProductInfo.js';

  export let item: ICartItem;

  const { checkoutName: name, image, size } = getProductInfo(item.id);

  function removeFromCart() {
    const cart = JSON.parse(Cookies.get('cart') || '[]') as ICartItem[];

    const index = cart.findIndex((cartItem: any) => cartItem.id === item.id);

    if (index !== -1) {
      cart.splice(index, 1);
    }

    Cookies.set('cart', JSON.stringify(cart));

    Cart.update(cart => cart.filter(cartItem => cartItem.id !== item.id));
  }
</script>

<div class="ring-2 ring-orange-300 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 m-5">
  <img src={image} alt={name} class="w-full h-40 object-cover rounded-t-lg" />
  <div class="mt-2">
    <div class="flex flex-row justify-between">
      <h2 class="text-lg md:text-xl font-semibold">{name}</h2>
      <button class="text-red-500 hover:text-red-300 duration-300 rounded" on:click={removeFromCart}>Remove</button>
    </div>
    <div class="flex flex-row justify-between md:mt-2">
      <p>Size: {size}</p>
      <p>Qty: {item.quantity}</p>
    </div>
  </div>
</div>
