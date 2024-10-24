import { StatusCodes } from 'http-status-codes';
import Stripe from 'stripe';
import { ORIGIN, STRIPE_LIVE_KEY } from '$env/static/private';
import type { ICartItem } from '../../../../stores/cart.js';
import { getProductInfo } from '../../../../lib/getProductInfo.js';

const stripe = new Stripe(STRIPE_LIVE_KEY, {
  apiVersion: '2024-06-20',
});

export async function POST({ request }) {
  const body = await request.json();

  const items = JSON.parse(body.items) as ICartItem[];

  const lineItems = items.map((item) => {
    const productInfo = getProductInfo(item.id);

    return {
      price: productInfo.priceId,
      quantity: item.quantity,
    };
  });

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: `${ORIGIN}/paymentSuccess`,
      cancel_url: `${ORIGIN}/merch`,
      shipping_address_collection: {
        allowed_countries: ['US']
      },
      expires_at: Math.round(Date.now() / 1000) + (30 * 1000),
      invoice_creation: {
        enabled: true,
      }
    });

    return new Response(JSON.stringify({ url: session.url, sessionId: session.id }), {
      status: StatusCodes.OK,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);

    return new Response(JSON.stringify({ error: error }), {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
