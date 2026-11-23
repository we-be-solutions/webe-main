import { fail, type RequestEvent } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { Resend } from 'resend';
import * as z from 'zod';
import { site } from '$lib/config';

const formSchema = z
	.object({
		name: z.string().trim().min(1, 'Full name is required').max(100, 'Name is too long'),
		email: z
			.string()
			.trim()
			.min(1, 'Email is required')
			.email('Please enter a valid email address'),
		company: z.string().trim().max(100, 'Company name is too long').optional().default(''),
		message: z.string().trim().max(2000, 'Message is too long').optional().default(''),
		honeypot: z.string().max(0, 'honeypot'),
		'cf-turnstile-response': z.string()
	})
	.strict();

// Created lazily so builds and tests don't require RESEND_API_KEY.
let resend: Resend | undefined;
const getResend = () => (resend ??= new Resend(env.RESEND_API_KEY));

const escapeHtml = (value: string) =>
	value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');

/** Shared form action for the "Let's talk" contact form. Registered on the homepage. */
export const contactAction = async ({ request }: RequestEvent) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);

	// Human check
	const cfToken = formData.get('cf-turnstile-response');
	if (cfToken) {
		const success = await checkWithCF(cfToken.toString());
		if (!success) {
			// Fake success so bots don't learn anything
			return { success: true, message: 'honeypot' };
		}
	}

	const result = formSchema.safeParse(data);
	if (!result.success) {
		const issues = result.error.issues.map((issue) => ({
			message: issue.message,
			path: issue.path.map((p) => String(p))
		}));
		if (issues.some((issue) => issue.message === 'honeypot')) {
			// Fake success so bots don't learn anything
			return { success: true, message: 'honeypot' };
		}
		console.error('Contact form failed validation');
		return fail(400, { error: 'Please check the highlighted details.', issues });
	}

	const name = escapeHtml(result.data.name);
	const email = escapeHtml(result.data.email);
	const company = escapeHtml(result.data.company);
	const message = escapeHtml(result.data.message).replace(/\n/g, '<br />');

	const sender = env.SENDER_EMAIL || '';
	const receiver = env.RECEIVER_EMAIL || '';

	// Send the confirmation as Brett, so the enquirer's replies reach him and his reply
	// (sent from his copy of the confirmation) lands in the same thread. This needs the
	// site email's domain to be verified in Resend, which it is whenever the sender shares it.
	const domainOf = (address: string) => address.split('@').pop()?.replace(/>$/, '').toLowerCase();
	const canSendAsBrett = domainOf(sender) === domainOf(site.email);
	const confirmationFrom = canSendAsBrett ? `Brett at ${site.shortName} <${site.email}>` : sender;

	try {
		// Notify WeBe
		await getResend().emails.send({
			from: sender,
			to: receiver,
			replyTo: result.data.email,
			subject: `New enquiry: ${result.data.name}${result.data.company ? ` (${result.data.company})` : ''}`,
			html: `
				<h2>New enquiry from webe.au</h2>
				<p><strong>Name:</strong> ${name}</p>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Company:</strong> ${company || '<em>Not provided</em>'}</p>
				<p><strong>Message:</strong><br />${message || '<em>Not provided</em>'}</p>
				${
					canSendAsBrett
						? '<p style="color: #64748b; font-size: 14px;">Tip: reply to your copy of their confirmation email (“Thanks for getting in touch”) to keep everything in one thread.</p>'
						: ''
				}
			`
		});

		// Acknowledgement to the enquirer
		await getResend().emails.send({
			from: confirmationFrom,
			to: result.data.email,
			// Brett gets a copy to reply from. When it's sent as him, replying to that copy goes
			// to the enquirer; a Reply-To would point it back at himself, so only set one otherwise.
			bcc: receiver || undefined,
			...(canSendAsBrett ? {} : { replyTo: site.email }),
			subject: `Thanks for getting in touch, ${result.data.name}`,
			html: `
				<div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; padding: 20px; line-height: 1.6;">
					<h2 style="color: #007a99; margin-top: 0;">Thanks for getting in touch</h2>
					<p>Hi ${name},</p>
					<p>Thanks for reaching out. I’ve received your message and will reply myself within 1 business day to set up a short chat.</p>
					<p>If there’s anything you’d like me to know beforehand, just reply to this email.</p>
					<p>Cheers,<br />Brett</p>
					${
						message
							? `<div style="margin-top: 24px; padding: 12px 16px; border-left: 3px solid #e2e8f0; color: #64748b;"><p style="margin: 0 0 4px; font-size: 14px;">What you sent:</p><p style="margin: 0;">${message}</p></div>`
							: ''
					}
					<hr style="margin: 24px 0; border: none; border-top: 1px solid #e2e8f0;" />
					<p style="margin-bottom: 0; font-size: 14px; color: #64748b;">
						${site.name} · Technology Consulting ·
						<a href="${site.url}" style="color: #007a99; text-decoration: none;">webe.au</a>${
							site.linkedin
								? ` · <a href="${site.linkedin}" style="color: #007a99; text-decoration: none;">LinkedIn</a>`
								: ''
						}
					</p>
				</div>
			`
		});

		return { success: true, message: result.data.name };
	} catch (error) {
		console.error('Failed to send email:', error);
		return fail(500, {
			error: `Sorry, something went wrong sending your message. Please try again or email ${site.email}.`
		});
	}
};

const checkWithCF = async (token: string) => {
	const formData = new URLSearchParams();
	formData.append('secret', env.CF_TS_SECRET_KEY || '');
	formData.append('response', token);

	const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: formData.toString()
	});

	if (!res.ok) {
		console.error('Turnstile verification failed with status', res.status);
		return false;
	}

	const data = await res.json();
	return data.success === true;
};
