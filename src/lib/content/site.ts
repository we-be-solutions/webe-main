/**
 * Homepage copy for WeBe Technology Consulting.
 * Kept as data so the page, structured data and tests share one source.
 *
 * Style: Australian English. Plain words, short sentences. If a twelve-year-old
 * couldn't follow a line, rewrite it.
 */

export const headline = 'Senior technical leadership, without the full-time hire.';

export const tagline = 'Better tech decisions. Stronger teams.';

/** The one action the whole page asks for. Use it on every button. */
export const cta = 'Tell me what you need';

/** Shown under calls to action to lower the risk of reaching out. */
export const reassurance = ['Reply within 1 business day', 'No obligation', 'Australia-wide'];

export const promise = 'Build capability, not dependency.';

export type Problem = { problem: string; fix: string };

/** The problems a visitor should recognise. Write them in the visitor's own words. */
export const problems: Problem[] = [
	{
		problem: 'You’re making big tech calls with nobody to check them.',
		fix: 'Check them first with someone who has made them before.'
	},
	{
		problem: 'Clients ask about tech you can’t properly judge.',
		fix: 'Get a straight answer you can take back to them.'
	},
	{
		problem: 'What you sell is moving faster than your team’s skills.',
		fix: 'Grow their skills on real client work.'
	},
	{
		problem: 'Clients want AI and you’re not sure what you can deliver.',
		fix: 'Work out what you can offer, and how to build it properly.'
	},
	{
		problem: 'Your juniors can code, but you can’t put them in front of a client.',
		fix: 'Grow them into consultants who can run a project end to end.'
	}
];

export type Service = {
	id: string;
	title: string;
	/** The short, plain promise. Shown large. */
	headline: string;
	/** What the client ends up with. */
	outcome: string;
	body: string;
	helpsWith: string[];
};

export const services: Service[] = [
	{
		id: 'advisory',
		title: 'Technical Advice for Leaders',
		headline: 'Make better tech calls.',
		outcome: 'Know what to choose, what it will cost and what could go wrong, before you commit.',
		body: 'You run the business, but technology shapes what you can sell and deliver. I’m the senior technical person you check things with: platform choices, system designs, vendor quotes and what your team proposes. You get a clear recommendation and the reasons behind it.',
		helpsWith: [
			'Big technology and platform decisions',
			'System design and architecture',
			'Where AI fits in what you sell',
			'Checking what your team or vendors propose',
			'Cutting risk and cost'
		]
	},
	{
		id: 'team',
		title: 'Developer Mentoring',
		headline: 'Grow the people.',
		outcome: 'Junior developers who can run a client project, from the first meeting to delivery.',
		body: 'Each week we set goals and work through problems. Then we spend two hours coding together on real client work, and finish with a short look back at what worked. Your developers learn the technical work and the consulting around it: client meetings, writing briefs, planning and delivery.',
		helpsWith: [
			'Pair coding on real client work',
			'Solution architecture',
			'Client meetings and briefs',
			'Planning and delivering projects',
			'Weekly goals and retros'
		]
	}
];

export type Step = { title: string; body: string };

export const steps: Step[] = [
	{
		title: 'Tell me what you need',
		body: 'Fill in the short form. I’ll reply within 1 business day.'
	},
	{
		title: 'Have a short chat',
		body: 'We talk through the problem. Free, with nothing to prepare and no pressure.'
	},
	{
		title: 'Get a clear plan',
		body: 'Simple next steps and a quote. Yours to keep, even if we don’t work together.'
	},
	{
		title: 'Work together',
		body: 'A few hours a week, or help when you need it. I step back as your team grows.'
	}
];

export const experience: string[] = [
	'Advising founders and leaders',
	'Software engineering',
	'Solution architecture',
	'Integrations and business systems',
	'Technical leadership',
	'Mentoring and coaching'
];

export type Faq = { question: string; answer: string };

/** Answer the questions people ask before they get in touch. Add real ones as they come up. */
export const faqs: Faq[] = [
	{
		question: 'Who do you work with?',
		answer:
			'Founders and leaders of agencies, consultancies and other service firms across Australia. Your business runs on technology, but you don’t have a senior technical leader. Some have a small tech team. Some have none.'
	},
	{
		question: 'Is this just about AI?',
		answer:
			'No. AI is one part of it. Most of the work is platform choices, system design and helping your team deliver. When something new comes along, I help you work out if it matters to your business.'
	},
	{
		question: 'How does working together work?',
		answer:
			'You choose a simple monthly plan. Some clients have regular time booked each week. Others keep me on call for help when they need it. We agree what’s included up front.'
	},
	{
		question: 'What does it cost?',
		answer:
			'It depends on how much help you need. After our first chat you’ll get a clear monthly price, so there are no surprises.'
	},
	{
		question: 'Do I need a tech team already?',
		answer:
			'No. I can help you make the right calls now, and help the people you already have build their skills.'
	},
	{
		question: 'Do you build things, or only give advice?',
		answer:
			'Both. I can help you plan and decide, and I can roll up my sleeves to design and build alongside your team.'
	},
	{
		question: 'Do you work remotely?',
		answer: 'Yes. I work with businesses all over Australia, mostly online.'
	}
];
