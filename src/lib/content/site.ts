/**
 * Homepage copy for WeBe Technology Consulting.
 * Kept as data so the page, structured data and tests share one source.
 *
 * Style: Australian English. Plain words, short sentences. If a twelve-year-old
 * couldn't follow a line, rewrite it.
 */

export const headline = 'Senior tech leadership, without hiring a CTO.';

export const tagline = 'Better products. Stronger teams. Smarter technology decisions.';

/** The one action the whole page asks for. Use it on every button. */
export const cta = 'Tell me what you need';

/** Shown under calls to action to lower the risk of reaching out. */
export const reassurance = ['Reply within 1 business day', 'No obligation', 'Australia-wide'];

export const promise = 'Build capability, not dependency.';

export type Problem = { problem: string; fix: string };

/** The problems a visitor should recognise. Write them in the visitor's own words. */
export const problems: Problem[] = [
	{
		problem: 'You’re not sure which technology to choose.',
		fix: 'Get clear, independent advice before you spend.'
	},
	{
		problem: 'Your systems don’t talk to each other.',
		fix: 'Connect them, so work flows without double handling.'
	},
	{
		problem: 'You know AI could help, but not where to start.',
		fix: 'Find the simple wins and put them to work.'
	},
	{
		problem: 'Your team gets stuck waiting on one person.',
		fix: 'Grow their skills, so more people can solve problems.'
	},
	{
		problem: 'You need senior tech help, but not full-time.',
		fix: 'Get experienced help, only when you need it.'
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
		id: 'strategy',
		title: 'Technology Strategy & System Design',
		headline: 'Fix the technology.',
		outcome: 'Spend on the right things and stop fighting your systems.',
		body: 'Good technology starts with the problem, not the tools. I help you choose, plan and design systems that fit your business, your budget and the way you work.',
		helpsWith: [
			'Planning your tech direction',
			'Designing new systems',
			'Choosing software and platforms',
			'Connecting systems, AI and automation',
			'Cutting risk and cost'
		]
	},
	{
		id: 'capability',
		title: 'Team Capability & Development',
		headline: 'Grow the people.',
		outcome: 'A team that solves more on its own and needs you less.',
		body: 'You don’t always need to hire more people to get more done. I work with your team on their real work, so they learn by doing and get more confident every week.',
		helpsWith: [
			'One-on-one mentoring and coaching',
			'Building technical skills',
			'Better ways of working',
			'Getting the most from new tools and AI',
			'Solving problems without getting stuck'
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
			'Businesses across Australia that rely on technology but don’t have a dedicated tech lead or CTO. Some have a small tech team. Some have none.'
	},
	{
		question: 'How does working together work?',
		answer:
			'Most clients use a simple retainer. That might be a few set hours each week, or help when you need it. We agree what’s included up front.'
	},
	{
		question: 'What does it cost?',
		answer:
			'I charge by the hour. After our first chat you’ll get a clear quote based on what you need, so there are no surprises.'
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
