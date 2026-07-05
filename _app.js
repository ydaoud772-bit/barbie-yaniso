import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import '../styles/globals.css';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

if (typeof window !== 'undefined') {
  window.Stripe = stripePromise;
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
