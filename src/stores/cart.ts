import { writable } from 'svelte/store';

// Define the cart store
const cart = writable<{ id: string; quantity: number; }[]>([]);

// Function to add an item to the cart
export function addToCart(item: { id: string; quantity: number; }) {
  cart.update(items => {
    const existingItem = items.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      items.push(item);
    }
    return items;
  });
}

// Function to remove an item from the cart
export function removeFromCart(itemId: string) {
  cart.update(items => items.filter(item => item.id !== itemId));
}

// Function to clear the cart
export function clearCart() {
  cart.set([]);
}

// Sync cart with localStorage
cart.subscribe(items => {
  localStorage.setItem('cart', JSON.stringify(items));
});

// Initialize cart from localStorage
const storedCart = localStorage.getItem('cart');
if (storedCart) {
  cart.set(JSON.parse(storedCart));
}

export default cart;
