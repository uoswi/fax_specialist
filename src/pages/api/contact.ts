import type { APIRoute } from 'astro';

export const prerender = false;

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.company || !data.email || !data.message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // In production, send email via Resend, SendGrid, or similar
    // For now, log the submission and return success
    console.log('Contact form submission:', {
      name: data.name,
      company: data.company,
      email: data.email,
      phone: data.phone || 'Not provided',
      service: data.service || 'Not specified',
      message: data.message,
      timestamp: new Date().toISOString()
    });

    // Example: Send via Resend (uncomment when API key is configured)
    /*
    const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;

    if (RESEND_API_KEY) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'Fax Specialist <noreply@faxspecialist.com>',
          to: ['your-email@example.com'],
          subject: `New Contact: ${data.company} - ${data.name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Company:</strong> ${data.company}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
            <p><strong>Service Interest:</strong> ${data.service || 'Not specified'}</p>
            <h3>Message:</h3>
            <p>${data.message}</p>
          `
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }
    }
    */

    return new Response(
      JSON.stringify({ success: true, message: 'Form submitted successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
