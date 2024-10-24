import { writable } from 'svelte/store';
import Cookies from 'js-cookie';

export const Cart = writable<ICartItem[]>(JSON.parse(Cookies.get('cart') || '[]'));

export interface ICartItem {
  id: string;
  quantity: number;
}

export interface IMerchItem {
  name: string;
  id: string;
  price: number;
  imageA: string;
  imageB: string;
}
