/**
 * Homepage copy for WeBe, a fractional tech lead for teams of one to five developers, and owners who build it themselves.
 * Kept as data so the page, structured data and tests share one source.
 *
 * Style: Australian English. Plain words, short sentences. If a twelve-year-old
 * couldn't follow a line, rewrite it.
 */

export const headline = 'Your senior tech lead, whether you’re a team of one or five.';

export const tagline = 'Clear goals. Stronger teams. Better output.';

/** The one action the whole page asks for. Use it on every button. */
export const cta = 'Tell me what you need';

/** Shown under calls to action to lower the risk of reaching out. */
export const reassurance = ['Reply within 1 business day', 'No obligation', 'Australia-wide'];

export const promise = 'Build capability, not dependency.';

export type Problem = { problem: string; fix: string };

/** The problems a visitor should recognise. Write them in the visitor's own words. */
export const problems: Problem[] = [
	{
		problem: 'The business and the engineers don’t speak the same language.',
		fix: 'Turn business goals into clear work, and technical trade-offs into plain English.'
	},
	{
		problem: 'You’re building it yourself, with nobody to check your work.',
		fix: 'Build with a senior engineer beside you, and learn as you go.'
	},
	{
		problem: 'Software isn’t your field, and your developers have nobody senior to guide them.',
		fix: 'Give them an experienced lead, and get the plain-English version yourself.'
	},
	{
		problem: 'Work ships late, or not how you pictured it.',
		fix: 'Set up a simple way of working, from brief to release.'
	},
	{
		problem: 'You can’t tell if the team is getting better.',
		fix: 'Agree on goals and a few useful measures, then improve step by step.'
	},
	{
		problem: 'Everything still waits on you, or one developer.',
		fix: 'Spread the know-how, so more people can move work forward.'
	},
	{
		problem: 'You’re building with AI, but not sure the result is sound.',
		fix: 'Decide where it helps, and how its work gets checked.'
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
		id: 'guidance',
		title: 'Technical Guidance',
		headline: 'Connect business and engineering.',
		outcome: 'Build the things that matter, and know why.',
		body: 'I work between the people running the business and the people building the product. I help turn goals into technical plans, then bring the costs, risks and choices back in plain English so you can decide.',
		helpsWith: [
			'Turning business goals into technical plans',
			'Explaining risks and trade-offs',
			'Architecture and system design',
			'Planning and priorities',
			'Big platform and vendor decisions'
		]
	},
	{
		id: 'coaching',
		title: 'Hands-on Coaching',
		headline: 'Grow whoever’s building.',
		outcome: 'Get the work done properly, and keep the skills in your business.',
		body: 'I build alongside you or your developers on real work. We set goals, solve problems together and look back at what worked, so each person can take on more.',
		helpsWith: [
			'Building together on your real work',
			'Code and design reviews',
			'Solution architecture skills',
			'Individual goals and feedback',
			'Using AI tools well'
		]
	},
	{
		id: 'delivery',
		title: 'Process & Delivery',
		headline: 'Improve a little, every cycle.',
		outcome: 'See what’s working, and keep getting better.',
		body: 'We look at how work moves from idea to release and fix what slows it down most. Then we set goals, choose a few measures and make small changes your team can keep up. Measures are there to help the team, not rank people.',
		helpsWith: [
			'Software development lifecycle (SDLC)',
			'Briefs, planning and estimates',
			'Testing, reviews and releases',
			'Team goals, measures and outcomes',
			'Retros and steady improvement'
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
		body: 'Regular sessions, or help when you need it. I step back as your team grows.'
	}
];

export const experience: string[] = [
	'Advising founders and leaders',
	'Connecting business and engineering',
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
		question: 'What is a fractional tech lead?',
		answer:
			'A senior engineer who works with you or your team part-time. I help with architecture, review the work, build alongside whoever’s building and coach them as we go. I also help the business and the engineers understand each other.'
	},
	{
		question: 'Is that the same as a fractional CTO?',
		answer:
			'No. A CTO usually owns technology strategy, budgets and hiring. I work closer to the team and the code. I can advise on the bigger calls, but you make the final decision.'
	},
	{
		question: 'Who do you work with?',
		answer:
			'Two kinds of people, all over Australia: founders and owners building their own software, and leaders with up to five developers and no senior technical lead. Many are experts in their own field, and software isn’t it.'
	},
	{
		question: 'How do you measure improvement?',
		answer:
			'We start with the outcome you want and how things work today. Then we choose a few useful measures, such as how long work takes to ship or how often it needs fixing, and review them together.'
	},
	{
		question: 'Is this just about AI?',
		answer:
			'No. AI is one part of it. Most of the work is system design, growing your team and improving how you deliver. When something new comes along, I help you work out if it matters to your business.'
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
			'No. If you’re building it yourself, I work with you directly. If you’re about to hire your first developer, I can help you plan for that too.'
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
