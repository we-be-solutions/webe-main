/**
 * Homepage copy for the Engineering Capability Accelerator.
 * Kept as data so the page, structured data and tests share one source.
 * Australian English throughout.
 */

export const offer = {
	name: 'Engineering Capability Accelerator',
	summary:
		'A structured, personalised development programme for your software engineers, built around the work they’re already doing rather than courses or hypothetical exercises.'
} as const;

export const problems: string[] = [
	'Complex work keeps escalating to your most senior developer.',
	'Developers can implement tasks but struggle to design the solution.',
	'Technical decisions queue up and become bottlenecks.',
	'Engineers need support to move from completing tasks to owning outcomes.',
	'Managers don’t have the time, or the technical depth, to mentor consistently.'
];

export const outcomes: string[] = [
	'Make better technical decisions',
	'Solve more complex problems independently',
	'Take greater ownership of solutions and delivery',
	'Need less intervention from senior engineers',
	'Contribute more directly to business outcomes',
	'Have a clear path for their professional development'
];

export type Capability = { title: string; body: string };

export const capabilities: Capability[] = [
	{
		title: 'Technical judgement',
		body: 'Evaluate alternatives, understand trade-offs and make sound architectural decisions.'
	},
	{
		title: 'Problem-solving',
		body: 'Break down ambiguous problems, investigate issues and design practical solutions with confidence.'
	},
	{
		title: 'Engineering ownership',
		body: 'Plan, build, test and deliver increasingly complex work with less hand-holding.'
	},
	{
		title: 'Engineering practices',
		body: 'Strengthen code quality, testing, maintainability, code reviews and delivery habits.'
	}
];

export type Step = { title: string; body: string };

export const steps: Step[] = [
	{
		title: 'Assess',
		body: 'Understand each developer’s current capability, strengths, responsibilities and opportunities to grow.'
	},
	{
		title: 'Develop',
		body: 'Set individual goals that serve both the engineer’s growth and what the business needs from them.'
	},
	{
		title: 'Apply',
		body: 'Coach through pairing, technical discussions, code reviews and challenges drawn from real work.'
	},
	{
		title: 'Measure',
		body: 'Review progress against the agreed goals and identify where each developer is ready for more responsibility.'
	}
];

export type Phase = { label: string; title: string; items: string[] };

/** The proposed initial engagement. Not a fixed commercial commitment. */
export const engagement: Phase[] = [
	{
		label: 'Start',
		title: 'Assess and set goals',
		items: [
			'Capability assessment for each engineer',
			'Individual development goals, agreed with you and the engineer'
		]
	},
	{
		label: 'Throughout',
		title: 'Coach on real work',
		items: [
			'Regular one-on-one coaching and technical guidance',
			'Pairing, design discussions and code review on current projects',
			'Regular progress reviews against the agreed goals'
		]
	},
	{
		label: 'Finish',
		title: 'Review and plan ahead',
		items: [
			'A closing assessment of each engineer’s progress',
			'Recommendations for continued development'
		]
	}
];

export const engagementFacts: { value: string; label: string }[] = [
	{ value: '12 weeks', label: 'Proposed initial programme' },
	{ value: '1–3', label: 'Engineers to start with' },
	{ value: 'Real work', label: 'No courses or classroom time' }
];

export const lowEffort: string[] = [
	'No generic courses',
	'No extra hires',
	'No replacing your engineering leadership',
	'No pause in delivery while people train'
];

export const experience: string[] = [
	'Delivering production software',
	'Designing and improving complex systems',
	'Technical leadership and mentoring',
	'Improving engineering standards and delivery practices',
	'Working with engineers and business stakeholders',
	'Turning technical complexity into practical decisions'
];

export type Faq = { question: string; answer: string[] };

export const faqs: Faq[] = [
	{
		question: 'Is this a training course?',
		answer: [
			'No. There’s no curriculum, slide deck or set of exercises. Coaching happens on the work your engineers are already doing, so what they learn is applied straight away.'
		]
	},
	{
		question: 'Which engineers is it for?',
		answer: [
			'Developers who are capable and want to grow, but aren’t yet confidently owning complex work. That’s often mid-level engineers stepping up, or seniors moving towards technical leadership. We choose the starting group together.'
		]
	},
	{
		question: 'Will it slow down delivery?',
		answer: [
			'Coaching fits into your existing projects and workflows, so delivery continues. It does take some of each engineer’s time, mostly in pairing, discussion and reflection, and we plan that with you up front.'
		]
	},
	{
		question: 'Does this replace our tech lead or engineering manager?',
		answer: [
			'No. I work alongside your existing leadership, not instead of it. Managers stay involved in setting goals and reviewing progress, and often find it frees up some of their own mentoring time.'
		]
	},
	{
		question: 'How will we know it’s working?',
		answer: [
			'Each engineer has agreed goals tied to the four capabilities, and progress is reviewed regularly against them. You’ll see it in the work itself: fewer escalations, clearer designs, and engineers taking on things they’d previously have handed up.'
		]
	},
	{
		question: 'What happens after 12 weeks?',
		answer: [
			'You get a closing assessment and recommendations for each engineer’s continued development. From there you might continue with the same group, start with others, or carry on without outside help. The aim is for that last option to be a real one.'
		]
	}
];
