import { loadStripe } from '@stripe/stripe-js';
import Stripe from 'stripe';
import { STRIPE_PUBLISHABLE_KEY, ORIGIN } from '$env/static/private';
import Cookies from 'js-cookie';

const stripe = new Stripe(STRIPE_PUBLISHABLE_KEY, {
  apiVersion: '2024-06-20',
});

export async function load({ request }) {
  const cookies = request.headers.get('cookie');

  const cookieArray = cookies?.split('; ').map(cookie => cookie.split('=').map(decodeURIComponent)) || [];

  const cookieMap = new Map<'hoodie-quantity' | 'tshirt-quantity', string>();

  cookieArray.forEach(([key, value]) => {
    cookieMap.set(key as 'hoodie-quantity' | 'tshirt-quantity', value);
  });

  let paymentIntent: string | undefined;
  let clientSecret: string | undefined;

  try {

    console.log('y');
    console.log(cookieMap.get('tshirt-quantity'));
    console.log(cookieMap.get('hoodie-quantity'));

    const response = await fetch(ORIGIN + '/api/stripe/payment_intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: [cookieMap.get('hoodie-quantity'), cookieMap.get('tshirt-quantity')] }),
    });

    const data = await response.json();
    paymentIntent = data.data.id;
    clientSecret = data.data.clientSecret;
  } catch (error) {
    console.error(error);
  }

  return {
    paymentIntent,
    clientSecret,
  };
}
