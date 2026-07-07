import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const SERVICES = {
  classic: { name: 'Classic Haircut', price: 35 },
  fade: { name: 'Premium Haircut + Fade', price: 50 },
  grooming: { name: 'Full Grooming Package', price: 75 },
  beard: { name: 'Beard Trim Only', price: 25 },
  kids: { name: 'Kids Haircut', price: 25 },
  shave: { name: 'Hot Shave', price: 40 },
};

const BRANCHES = {
  downtown: 'Downtown Location - 123 Main Street',
  uptown: 'Uptown Location - 456 Oak Avenue',
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
return res.status(200).json({ id: 'mock_session' });
  try {
    const { appointment, paymentMethod, price } = req.body;

    if (!appointment || !paymentMethod || !price) {
      return res.status(400).json({
        error: 'Missing required appointment details',
      });
    }

    const { name, phone, branch, date, time, service } = appointment;

    if (!name || !phone || !branch || !date || !time || !service) {
      return res.status(400).json({
        error: 'Incomplete appointment information',
      });
    }

    if (!SERVICES[service]) {
      return res.status(400).json({
        error: 'Invalid service selected',
      });
    }

    if (!BRANCHES[branch]) {
      return res.status(400).json({
        error: 'Invalid branch selected',
      });
    }

    const serviceData = SERVICES[service];
    const branchName = BRANCHES[branch];

    let lineItems;
    let paymentStatus;

    if (paymentMethod === 'full_online') {
      lineItems = [
        {
          price_data: {
            currency: 'cad',
            product_data: {
              name: serviceData.name,
              description: `Barbier Yaniso - ${branchName}\nDate: ${date} at ${time}`,
            },
            unit_amount: serviceData.price * 100,
          },
          quantity: 1,
        },
      ];
      paymentStatus = 'paid_full';
    } else if (paymentMethod === 'deposit_online') {
      lineItems = [
        {
          price_data: {
            currency: 'cad',
            product_data: {
              name: `${serviceData.name} - Deposit`,
              description: `Reservation deposit for ${serviceData.name}`,
            },
            unit_amount: 1000,
          },
          quantity: 1,
        },
      ];
      paymentStatus = 'paid_deposit';
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: lineItems,
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/booking-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/booking-canceled`,
      metadata: {
        customerName: name,
        customerPhone: phone,
        branch: branch,
        appointmentDate: date,
        appointmentTime: time,
        service: service,
        serviceName: serviceData.name,
        paymentMethod: paymentMethod,
        paymentStatus: paymentStatus,
      },
    });

    res.status(200).json({
      sessionId: session.id,
      publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    });
  } catch (error) {
    console.error('Stripe session creation error:', error);

    res.status(500).json({
      error: 'Unable to create payment session. Please try again.',
    });
  }
}
