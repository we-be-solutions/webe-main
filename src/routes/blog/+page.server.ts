import { fail, type Actions, type Load } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { Resend } from 'resend';
import * as z from 'zod';
import type { Post } from '../api/content/+server';

export const load: Load = async ({ fetch }) => {
	const res = await fetch('/api/content');
	const posts: Promise<Post[]> = res.json();
	return { posts };
};

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
	//Vercel limits form actions to not "?/nameofaction", TODO: update this to a route or similar
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
				//Honey pot represents fake success to trick bots
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
