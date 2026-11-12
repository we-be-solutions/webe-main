/**
 * Site copy. Kept as data so pages, structured data and tests share one source.
 * Australian English throughout.
 */

/** Topics offered on the contact form. Keys are sent with the form. */
export const contactTopics = {
	team: 'Strengthening a technical team',
	decision: 'A technology decision or challenge',
	other: 'Something else'
} as const;

export type ContactTopic = keyof typeof contactTopics;

export type ServiceGroup = { title: string; items: string[] };

export type Service = {
	slug: string;
	name: string;
	/** Short question used on the homepage card to help visitors self-select. */
	question: string;
	proposition: string;
	cta: string;
	topic: ContactTopic;
	audience: string;
	summary: string;
	signsTitle: string;
	signs: string[];
	groups: ServiceGroup[];
	outcome: string;
	approach: { title: string; body: string }[];
	scopeNote: string;
	metaTitle: string;
	metaDescription: string;
};

export const services: Service[] = [
	{
		slug: 'engineering-enablement',
		name: 'Engineering Enablement',
		question: 'Already have a technical team?',
		proposition: 'Make the team you have more capable.',
		cta: 'Strengthen your team',
		topic: 'team',
		audience:
			'For businesses that already have software developers, technical leads or an engineering team.',
		summary:
			'I work alongside your developers and technical leads to improve how they make decisions, design systems and deliver software, so the team keeps getting better after I step back.',
		signsTitle: 'Does this sound familiar?',
		signs: [
			'Your developers are capable, but no one has the time or experience to set technical direction.',
			'Senior engineers are stretched across architecture questions, reviews and production issues.',
			'Some releases go smoothly and others drag on, and it’s hard to say why.',
			'Technical debt and fragile systems are building up, and knowledge sits with one or two people.',
			'Ways of working that suited a small team are starting to creak as the business grows.',
			'Leaders want a clearer view of what the team can deliver and where the risks are.'
		],
		groups: [
			{
				title: 'Leadership and capability',
				items: [
					'Part-time engineering leadership, embedded with your team',
					'Mentoring and developing engineers and technical leads',
					'Engineering capability assessments',
					'Engineering standards and clear technical ownership',
					'Improving team autonomy and reducing key-person dependencies'
				]
			},
			{
				title: 'Architecture and risk',
				items: [
					'Solution architecture and technical direction',
					'Technical debt and engineering risk assessment'
				]
			},
			{
				title: 'Delivery',
				items: [
					'SDLC improvement and delivery effectiveness',
					'Code review, testing and CI/CD practices',
					'Responsible use of AI-assisted engineering'
				]
			}
		],
		outcome:
			'A stronger, more confident team that makes better decisions and delivers reliably, without depending on me.',
		approach: [
			{
				title: 'Alongside, not instead',
				body: 'I work with your engineers in their day-to-day: design discussions, code reviews, planning and incident follow-ups. Your team keeps ownership of the code, systems and decisions.'
			},
			{
				title: 'Building on what’s there',
				body: 'Most teams already have capable people. The aim is to give them the direction, support and room to step up, not to criticise how they’ve got here.'
			},
			{
				title: 'Explained, not handed down',
				body: 'Trade-offs are talked through and written down, so the team understands the reasoning and can make the next call on its own.'
			}
		],
		scopeNote:
			'Engineering risk work focuses on architecture, operations and delivery. It isn’t a formal cybersecurity audit, certification or compliance assurance.',
		metaTitle: 'Engineering Enablement | WeBe Solutions',
		metaDescription:
			'Engineering leadership, mentoring, architecture and delivery improvement for Australian businesses that want to make their existing software team more capable.'
	},
	{
		slug: 'technology-advisory',
		name: 'Technology Advisory',
		question: 'Need someone technical in your corner?',
		proposition: 'Make your next technology decision with confidence.',
		cta: 'Get technical guidance',
		topic: 'decision',
		audience:
			'For owners, founders and leaders who make technology decisions without senior technical leadership in-house.',
		summary:
			'Independent technical advice that represents your business when you’re evaluating, investing in or changing technology. Practical judgement, explained in plain language, so you can decide with your eyes open.',
		signsTitle: 'Common situations',
		signs: [
			'You have a quote or estimate from a developer and no way to tell if it’s reasonable.',
			'You’re weighing up off-the-shelf software against building something custom.',
			'A technology project is running late or over budget, and it’s hard to see why.',
			'You depend on one supplier, or one person, who understands how everything works.',
			'You need to hire technical people but aren’t sure what to look for.',
			'You want a second opinion on the technology before you invest, buy or commit.'
		],
		groups: [
			{
				title: 'Strategy and decisions',
				items: [
					'Translating business problems into technical requirements',
					'Technology strategy and practical roadmaps',
					'Build-versus-buy assessments',
					'Software and platform selection'
				]
			},
			{
				title: 'Suppliers and projects',
				items: [
					'Reviewing supplier proposals and development estimates',
					'Oversight and guidance during technology projects',
					'Helping you communicate effectively with developers and vendors'
				]
			},
			{
				title: 'Risk and capability',
				items: [
					'Technical due diligence and second opinions',
					'Technical risk and dependency assessments',
					'Solution architecture and system design',
					'Guidance on technical hiring and building internal capability'
				]
			}
		],
		outcome:
			'You understand your options, risks, costs and trade-offs before you commit time and money.',
		approach: [
			{
				title: 'On your side of the table',
				body: 'The advice is about what’s right for your business, not about selling you software or a development team.'
			},
			{
				title: 'Plain language',
				body: 'You get clear explanations of options, risks and trade-offs, without the jargon. You make the decision; I make sure it’s an informed one.'
			},
			{
				title: 'Building your own capability',
				body: 'Where it makes sense, I help you understand your systems and suppliers well enough to rely less on any one of them, including me.'
			}
		],
		scopeNote:
			'This is independent technical advice. It isn’t managed IT support, certified security auditing or legal and compliance assurance.',
		metaTitle: 'Independent Technology Advisory | WeBe Solutions',
		metaDescription:
			'Independent technical advice for Australian business leaders: build-versus-buy, supplier proposals, software selection, technical due diligence and project oversight.'
	}
];

export const getService = (slug: string) => {
	const service = services.find((s) => s.slug === slug);
	if (!service) throw new Error(`Unknown service: ${slug}`);
	return service;
};

export type Outcome = { title: string; body: string };

export const outcomes: Outcome[] = [
	{
		title: 'Stronger engineering capability',
		body: 'Teams that make good technical calls on their own and keep improving.'
	},
	{
		title: 'Better architectural decisions',
		body: 'Systems designed around where the business is going, with the trade-offs understood.'
	},
	{
		title: 'More predictable software delivery',
		body: 'Less rework and friction, and dates the rest of the business can rely on.'
	},
	{
		title: 'Clearer visibility of technology risk',
		body: 'Knowing which risks matter, what they could cost and what to do about them first.'
	},
	{
		title: 'Smarter technology investments',
		body: 'Spending on the right things, with proposals and estimates you understand.'
	},
	{
		title: 'Less dependence on individuals',
		body: 'Knowledge and ownership spread across the business, not held by one person or supplier.'
	}
];

export const principles: string[] = [
	'Start with the business problem, not the technology.',
	'Understand the people, systems and constraints already in place.',
	'Make risks and trade-offs visible.',
	'Prefer practical, proportionate solutions over unnecessary complexity.',
	'Develop internal capability wherever possible.',
	'Transfer knowledge rather than create dependence.',
	'Measure improvement by meaningful outcomes, not activity.'
];

export type Step = { title: string; body: string };

export const steps: Step[] = [
	{
		title: 'Understand',
		body: 'Establish the business goals, current capabilities and constraints.'
	},
	{
		title: 'Assess',
		body: 'Identify the decisions, risks and opportunities that matter most.'
	},
	{
		title: 'Act',
		body: 'Provide practical guidance, leadership and improvement alongside the people doing the work.'
	},
	{
		title: 'Enable',
		body: 'Establish clear ownership, transfer knowledge and leave the business better equipped.'
	}
];

export type Engagement = { title: string; summary: string; suits: string };

export const engagements: Engagement[] = [
	{
		title: 'Focused Assessment',
		summary:
			'A defined review of a team, solution, architecture, supplier proposal or technology decision, with clear, prioritised recommendations.',
		suits: 'A good first step when you want a clear picture before committing to anything bigger.'
	},
	{
		title: 'Ongoing Technology Advisory',
		summary:
			'Regular access to an experienced technical advisor for decisions, planning, supplier discussions and risk assessment.',
		suits: 'Suits leaders who want someone technical to call on as decisions come up.'
	},
	{
		title: 'Fractional Engineering Leadership',
		summary:
			'Part-time technical leadership embedded alongside your engineering team, supporting architecture, capability development and delivery improvement.',
		suits: 'Suits teams that need experienced leadership but not a full-time hire.'
	}
];

export type Faq = { question: string; answer: string[] };

export const faqs: Faq[] = [
	{
		question: 'Do I need a technical team to work with you?',
		answer: [
			'No. Technology Advisory is designed for businesses without senior technical leadership in-house. If you do have a team, Engineering Enablement focuses on making that team more capable.'
		]
	},
	{
		question: 'How is this different from hiring a developer or an agency?',
		answer: [
			'A developer or agency builds things. I help you decide what to build, whether to build it at all, and how to get it done well, and I help your own people get better at those decisions over time.'
		]
	},
	{
		question: 'Will you work with our existing team and suppliers?',
		answer: [
			'Yes. I work alongside your developers, technical leads and suppliers rather than replacing them. Your business keeps ownership of its systems and decisions.'
		]
	},
	{
		question: 'Do we need a full-time technology leader instead?',
		answer: [
			'Possibly, eventually. Many businesses don’t yet need, or can’t yet justify, a full-time senior technology hire. Part-time support gives you experienced judgement now.',
			'If a full-time role becomes the right move, I can help you work out what that role should look like and who to look for.'
		]
	},
	{
		question: 'What does a first engagement look like?',
		answer: [
			'It starts with a conversation about what you’re working through. From there, a Focused Assessment is often the most useful first step: it gives everyone a shared view of where things stand and what to tackle first.',
			'Scope and timing are agreed with you up front, based on what you need.'
		]
	},
	{
		question: 'How will we know it’s working?',
		answer: [
			'We agree early on what “better” looks like for you. That might be more predictable delivery, fewer surprises in projects, decisions made with less escalation, or clearer answers from suppliers.',
			'Where it helps, we put simple measures in place so progress is visible rather than a matter of opinion.'
		]
	},
	{
		question: 'What don’t you do?',
		answer: [
			'I don’t provide managed IT support, certified security audits, legal or compliance assurance, or outsourced development. If you need those, I can help you work out what to ask for and who to ask.'
		]
	}
];
