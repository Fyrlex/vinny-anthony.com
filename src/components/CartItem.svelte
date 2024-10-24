<script lang="ts">
  import Cookies from 'js-cookie';
  import { Cart, type ICartItem } from '../stores/cart.js';
  import { getProductInfo } from '../lib/getProductInfo.js';
  import Icon from '@iconify/svelte';

  export let item: ICartItem;

  const { checkoutName, image, size } = getProductInfo(item.id);

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
  <img src={image} alt={checkoutName} class="w-full h-40 object-cover rounded-t-lg object-top" />
  <div class="flex flex-col space-y-4 mt-2">
    <div class="flex flex-row justify-between">
      <p class="text-3xl">{checkoutName}</p>
      <p class="text-xl">Size: {size}</p>
    </div>
    <div class="flex flex-row justify-between text-lg">
      <button class="text-white bg-red-400 hover:bg-red-500 duration-300 rounded py-1 px-2" on:click={removeFromCart}
        ><Icon icon="fa-regular:trash-alt" /></button
      >
      <p>Qty: {item.quantity}</p>
    </div>
  </div>
</div>
