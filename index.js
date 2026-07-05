import React from 'react';
import Head from 'next/head';
import App from '../components/App';

export default function Home() {
  return (
    <>
      <Head>
        <title>Barbier Yaniso - Premium Barber Shop | Two Locations, One Standard</title>
        <meta
          name="description"
          content="Experience precision barbering at Barbier Yaniso. Expert barbers, luxury dark theme, online booking with Stripe payment."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Barbier Yaniso - Premium Barber Shop" />
        <meta property="og:description" content="Two locations. One standard of excellence." />
        <meta property="og:site_name" content="Barbier Yaniso" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Barbier Yaniso" />
        <meta name="twitter:description" content="Two locations. One standard of excellence." />

        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      <App />
    </>
  );
}
