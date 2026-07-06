import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_KEY;

const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

const SERVICES = {
  classic: { name: 'Classic Haircut', price: 35 },
  fade: { name: 'Premium Haircut + Fade', price: 50 },
  grooming: { name: 'Full Grooming Package', price: 75 },
  beard: { name: 'Beard Trim Only', price: 25 },
  kids: { name: 'Kids Haircut', price: 25 },
  shave: { name: 'Hot Shave', price: 40 },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      name,
      phone,
      branch,
      date,
      time,
      service,
      paymentMethod,
      paymentStatus,
    } = req.body;

    if (!name || !phone || !branch || !date || !time || !service) {
      return res.status(400).json({
        error: 'Missing required appointment information',
      });
    }

    if (paymentMethod !== 'pay_at_shop') {
      return res.status(400).json({
        error: 'This endpoint is only for pay-at-shop appointments.',
      });
    }

    if (!SERVICES[service]) {
      return res.status(400).json({
        error: 'Invalid service selected',
      });
    }

    const serviceData = SERVICES[service];

    const appointmentDate = new Date(date);
    if (isNaN(appointmentDate.getTime())) {
      return res.status(400).json({
        error: 'Invalid date format',
      });
    }

    const confirmationNumber = `BY-${crypto.randomBytes(4).toString('hex').toUpperCase()}`;

    const { data, error } = await supabase
      .from('appointments')
      .insert([
        {
          name: name.trim(),
          phone: phone.trim(),
          branch: branch,
          date: date,
          time: time,
          service: service,
          payment_method: 'pay_at_shop',
          payment_status: 'unpaid',
          amount_paid: 0,
          status: 'confirmed',
          notes: `Confirmation: ${confirmationNumber}`,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);

      if (error.code === '23505') {
        return res.status(409).json({
          error: 'This time slot is already booked. Please select another time.',
        });
      }

      throw new Error(`Failed to create appointment: ${error.message}`);
    }

    if (!data || data.length === 0) {
      throw new Error('Appointment created but no data returned');
    }

    const appointment = data[0];

    return res.status(201).json({
      success: true,
      appointment: {
        id: appointment.id,
        name: appointment.name,
        phone: appointment.phone,
        branch: appointment.branch,
        date: appointment.date,
        time: appointment.time,
        service: appointment.service,
        serviceName: serviceData.name,
        servicePrice: serviceData.price,
        paymentMethod: appointment.payment_method,
        paymentStatus: appointment.payment_status,
        status: appointment.status,
        confirmationNumber: confirmationNumber,
        createdAt: appointment.created_at,
      },
    });
  } catch (error) {
    console.error('Error creating appointment:', error);

    return res.status(500).json({
      error: 'Unable to create appointment. Please try again.',
    });
  }
}
