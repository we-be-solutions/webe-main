/**
 * Homepage copy for WeBe Technology Consulting.
 * Kept as data so the page, structured data and tests share one source.
 *
 * Style: Australian English. Plain words, short sentences. If a twelve-year-old
 * couldn't follow a line, rewrite it.
 */

export const tagline = ['Better products.', 'Stronger teams.', 'Smarter technology decisions.'];

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
	body: string;
	helpsWith: string[];
};

export const services: Service[] = [
	{
		id: 'strategy',
		title: 'Technology Strategy & System Design',
		headline: 'Fix the technology.',
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
	{ title: 'We talk', body: 'Tell me what’s going on and what you want to fix.' },
	{ title: 'We make a plan', body: 'Clear goals and simple next steps. No jargon.' },
	{ title: 'We do the work', body: 'I work alongside you and your team, then step back.' }
];

export const experience: string[] = [
	'Software engineering',
	'Solution architecture',
	'Integrations and business systems',
	'Technical leadership',
	'Mentoring and coaching'
];
