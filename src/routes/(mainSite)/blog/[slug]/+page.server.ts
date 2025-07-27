import { fail, type Actions } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { Resend } from 'resend';
import * as z from 'zod';

const resend = new Resend(env.RESEND_API_KEY);

const formSchema = z
	.object({
		name: z
			.string()
			.min(1, 'Full name is required')
			.max(100, 'Name is too long')
			.transform((val) => val.trim()),
		email: z
			.string()
			.min(1, 'Email is required')
			.email('Please enter a valid email address')
			.transform((val) => val.trim()),
		company: z
			.string()
			.min(1, 'Company is required')
			.max(100, 'Company name is too long')
			.transform((val) => val.trim()),
		timeline: z.enum(['now', '1-3', '4+']),
		project: z
			.string()
			.max(2000, 'Project description is too long')
			.transform((val) => val.trim()),
		honeypot: z.string().max(0, 'honeypot'),
		'cf-turnstile-response': z.string()
	})
	.strict();

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData);

		//human
		const cfToken = formData.get('cf-turnstile-response');
		if (cfToken) {
			const success = await checkWithCF(cfToken.toString());
			if (!success) {
				//Honey pot represents fake success to trick bots
				return { success: true, message: `honeypot` };
			}
		}
		// Validate and sanitize
		const result = formSchema.safeParse(data);
		if (!result.success) {
			const issues = result.error.issues.map((issue) => ({
				message: issue.message,
				path: issue.path.map((p) => String(p)) // ensure path is string[]
			}));
			const honeypot = issues.filter((val) => val.message === 'honeypot');
			if (honeypot) {
				return { success: true, message: `honeypot` };
			}
			console.error('failed validation');
			return fail(400, {
				error: 'Validation failed',
				issues,
				values: data
			});
		}
		const sender = env.SENDER_EMAIL || '';
		const receiver = env.RECEIVER_EMAIL || '';

		try {
			await resend.emails.send({
				from: sender, // Use a domain you own and have verified with Resend
				to: receiver,
				subject: `New Strategy Call Application: ${result.data.name}`,
				html: `
          <h2>New Strategy Call Application</h2>
          <p><strong>Name:</strong> ${result.data.name}</p>
          <p><strong>Email:</strong> ${result.data.email}</p>
          <p><strong>Company:</strong> ${result.data.company}</p>
          <p><strong>Timeline:</strong> ${result.data.timeline}</p>
          <p><strong>Project:</strong> ${result.data.project}</p>
        `
			});

			await resend.emails.send({
				from: sender, // Use a domain you own and have verified with Resend
				to: result.data.email,
				subject: `Thanks for contacting WeBe Solutions ${result.data.name}`,
				html: `
				<div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #222; padding: 20px;">
				  <h2 style="color: #0e7490;">Thanks for reaching out!</h2>
				  
				  <p>We’ve received your enquiry and we’ll be in touch shortly.</p>
				  
				  <hr style="margin: 24px 0; border: none; border-top: 1px solid #ddd;" />
				  
				  <p style="margin-bottom: 0;">
				    While you're here, check out how we help Aussie businesses automate the boring stuff —
				    <a href="https://www.linkedin.com/company/webe-au" style="color: #0e7490; text-decoration: none;">follow us on LinkedIn</a> or visit
				    <a href="https://webe.au" style="color: #0e7490; text-decoration: none;">webe.au</a>.
				  </p>
				</div>
				`
			});

			return { success: true, message: `${result.data.name}` };
		} catch (error) {
			console.error('Failed to send email:', error);
			return fail(500, { error: 'Failed to send message. Please try again.' });
		}
	}
} satisfies Actions;

const checkWithCF = async (token: string) => {
	const secret = env.CF_TS_SECRET_KEY;

	const formData = new URLSearchParams();
	formData.append('secret', secret || '');
	formData.append('response', token);

	const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: formData.toString()
	});

	if (!res.ok) {
		console.error('Turnstile verification failed with status', res.status);
		return false;
	}

	const data = await res.json();
	return data.success === true;
};
