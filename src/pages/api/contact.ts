import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    const response = await fetch(
      'https://hooks.airtable.com/workflows/v1/genericWebhook/appc1ny3km4ph3kTi/wfleYL9wMKDoJRAXb/wtr2vJHN6AcOUZC9h',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    const responseText = await response.text();
    console.log('Airtable response:', response.status, responseText);

    if (response.ok) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      console.error('Airtable error:', response.status, responseText);
      return new Response(JSON.stringify({ success: false, error: responseText }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.error('Server error:', error);
    return new Response(JSON.stringify({ success: false, error: String(error) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
