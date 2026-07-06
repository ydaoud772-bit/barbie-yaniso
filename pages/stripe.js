import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_KEY;

const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let event;

  try {
    const sig = req.headers['stripe-signature'];
    const body = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);

    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    console.error(`Webhook signature verification failed:`, error.message);
    return res.status(400).json({ error: 'Invalid signature' });
  }

  console.log(`Received event: ${event.type}`);

  try {
    if (event.type === 'checkout.session.completed') {
      await handleCheckoutSessionCompleted(event.data.object);
    }

    res.status(200).json({ received: true });
  } catch (error) {
    console.error(`Error processing webhook:`, error.message);
    res.status(200).json({ error: error.message });
  }
}

async function handleCheckoutSessionCompleted(session) {
  console.log(`Processing checkout session: ${session.id}`);

  const {
    id: sessionId,
    payment_status,
    metadata,
    amount_total,
    customer_email,
  } = session;

  const {
    customerName,
    customerPhone,
    branch,
    appointmentDate,
    appointmentTime,
    service,
    serviceName,
    paymentMethod,
    paymentStatus,
  } = metadata;

  if (!customerName || !customerPhone || !appointmentDate || !appointmentTime) {
    console.error('Missing required metadata in session:', metadata);
    throw new Error('Invalid session metadata');
  }

  const amountPaid = (amount_total / 100).toFixed(2);

  console.log(`Customer: ${customerName}`);
  console.log(`Date/Time: ${appointmentDate} at ${appointmentTime}`);
  console.log(`Service: ${serviceName}`);
  console.log(`Amount: $${amountPaid}`);
  console.log(`Payment Status: ${paymentStatus}`);

  try {
    const { data, error } = await supabase
      .from('appointments')
      .upsert(
        {
          name: customerName,
          phone: customerPhone,
          email: customer_email,
          branch: branch,
          date: appointmentDate,
          time: appointmentTime,
          service: service,
          payment_method: paymentMethod,
          payment_status: paymentStatus,
          amount_paid: parseFloat(amountPaid),
          stripe_session_id: sessionId,
          status: 'confirmed',
          updated_at: new Date().toISOString(),
        },
        {
          onConflict: 'stripe_session_id',
        }
      );

    if (error) {
      console.error('Supabase error:', error);
      throw new Error(`Failed to insert appointment: ${error.message}`);
    }

    console.log(`Appointment created/updated in database`);
  } catch (error) {
    console.error('Error processing appointment:', error.message);
    throw error;
  }
}
