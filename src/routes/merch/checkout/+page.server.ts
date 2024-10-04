import { loadStripe } from '@stripe/stripe-js';
import { STRIPE_PUBLISHABLE_KEY } from '$env/static/private';

const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

