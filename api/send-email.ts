import { Resend } from 'resend';

export const config = {
    runtime: 'edge',
};

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(request: Request) {
    if (request.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const { email, name } = await request.json();

        if (!email || !name) {
            return new Response(JSON.stringify({ error: 'Missing required fields' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const { data, error } = await resend.emails.send({
            from: 'Consulting on Cooking <onboarding@resend.dev>', // Updating this to a generic verified sender for now or the user's domain if verified
            to: email,
            subject: 'Welcome to Consulting on Cooking!',
            html: `
        <div style="font-family: sans-serif; color: #333;">
          <h1>Welcome, ${name}!</h1>
          <p>We're thrilled to have you join our community of cooking enthusiasts.</p>
          <p>Get ready to master your kitchen with AI-powered guidance.</p>
          <br/>
          <p>Happy Cooking,<br/>The Coen Team</p>
        </div>
      `,
        });

        if (error) {
            return new Response(JSON.stringify({ error: error.message }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        return new Response(JSON.stringify({ message: 'Email sent successfully', id: data?.id }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
