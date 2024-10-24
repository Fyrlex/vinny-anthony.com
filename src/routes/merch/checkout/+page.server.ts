import { ORIGIN } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

export const prerender = false;

export async function load({ request }) {
  const cookies = request.headers.get('cookie');

  const cookieArray = cookies?.split('; ').map(cookie => cookie.split('=').map(decodeURIComponent)) || [];

  const cookieMap = new Map();

  cookieArray.forEach(([key, value]) => {
    cookieMap.set(key, value);
  });

  if (JSON.parse(cookieMap.get('cart')).length === 0) {
    return redirect(303, '/merch');
  }

  const res = await fetch(ORIGIN + '/api/stripe/payment_intent', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items: cookieMap.get('cart') }),
  });

  if (res) {
    const data = await res.json();

    if (data.url) {
      redirect(303, data.url);
    }
  }
}
