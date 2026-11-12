/**
 * Homepage copy. Kept as data so the page, structured data and tests share one source.
 * Australian English throughout.
 */

export type Problem = { title: string; body: string };

export const problems: Problem[] = [
	{
		title: 'Good developers, no one steering',
		body: 'The team can build. What’s missing is someone with the time and experience to set direction, make the hard calls and help others grow into those decisions.'
	},
	{
		title: 'Senior people are stretched thin',
		body: 'Your most experienced engineers are fielding every architecture question, reviewing everything and fixing production issues, on top of their own work.'
	},
	{
		title: 'Delivery is hard to predict',
		body: 'Some releases go smoothly, others drag on. It’s difficult to say why, and harder to give the rest of the business dates it can rely on.'
	},
	{
		title: 'Risk is building up quietly',
		body: 'Technical debt, fragile systems and knowledge held by one or two people. Nobody is ignoring it, but nobody has had the space to deal with it properly.'
	},
	{
		title: 'Practices haven’t kept up with the business',
		body: 'The ways of working that suited a small team and a single product are starting to creak as the team, the codebase and the customer base grow.'
	},
	{
		title: 'Leaders lack a clear view',
		body: 'Managers and executives want to understand what the team can deliver, where the constraints are and which technical risks actually matter.'
	}
];

export type Principle = { title: string; body: string };

export const principles: Principle[] = [
	{
		title: 'Alongside, not instead',
		body: 'I work with your engineers and leads in their day-to-day: in design discussions, code reviews, planning and incident follow-ups.'
	},
	{
		title: 'Decisions explained, not handed down',
		body: 'Trade-offs are talked through and written down, so the team understands the reasoning and can make the next call without me.'
	},
	{
		title: 'Built to outlast the engagement',
		body: 'Success is a team that needs less outside help over time. Every change is made with ownership staying in-house.'
	}
];

export type Pillar = {
	id: string;
	title: string;
	outcome: string;
	body: string;
	points: string[];
};

export const pillars: Pillar[] = [
	{
		id: 'leadership',
		title: 'Engineering leadership and team capability',
		outcome: 'A team that makes good technical decisions with confidence.',
		body: 'Part-time technical leadership that builds up the people you have, rather than becoming another person everyone has to wait on.',
		points: [
			'Fractional technical leadership',
			'Mentoring engineers and emerging technical leads',
			'Clearer technical ownership and decision-making',
			'Engineering capability assessment',
			'Standards and ways of working that suit your team',
			'Building confidence and autonomy'
		]
	},
	{
		id: 'architecture',
		title: 'Solution architecture and technology direction',
		outcome: 'Technical decisions that fit where the business is heading.',
		body: 'Practical architecture guidance grounded in your systems, constraints and goals, not in the latest trend.',
		points: [
			'Architecture reviews and technical guidance',
			'System design and integration strategy',
			'Assessing scalability, maintainability and complexity',
			'Documenting decisions and their trade-offs',
			'Modernisation planning',
			'Aligning technical choices with business needs'
		]
	},
	{
		id: 'risk',
		title: 'Engineering risk and quality',
		outcome: 'A clear, prioritised understanding of technical risk.',
		body: 'Finding the risks that matter most, and putting in proportionate controls without slowing the team to a crawl.',
		points: [
			'Identifying architectural and operational risks',
			'Understanding technical debt and prioritising what to fix',
			'Reducing reliance on individual engineers',
			'Reviewing quality and reliability practices',
			'Better visibility of critical systems and dependencies',
			'Proportionate controls and governance'
		]
	},
	{
		id: 'delivery',
		title: 'Software delivery and SDLC improvement',
		outcome: 'More predictable delivery, with less friction and rework.',
		body: 'Looking at how work moves from idea to production, and improving the parts that cause the most delay or rework.',
		points: [
			'Reviewing your software development lifecycle',
			'Improving planning, code review, testing and deployment',
			'Reducing rework and delivery friction',
			'More reliable CI/CD and release confidence',
			'Engineering measures that mean something',
			'Responsible adoption of AI-assisted development'
		]
	}
];

export type Engagement = {
	title: string;
	summary: string;
	suits: string;
	includes: string[];
};

export const engagements: Engagement[] = [
	{
		title: 'Engineering Capability Assessment',
		summary:
			'A focused review of your team’s capability, engineering practices, delivery constraints and technical risks.',
		suits:
			'A good starting point when you know something isn’t right but want a clear picture first.',
		includes: [
			'Conversations with engineers, leads and stakeholders',
			'A look at your codebase, architecture, tooling and delivery process',
			'Practical, prioritised recommendations you can act on'
		]
	},
	{
		title: 'Fractional Engineering Leadership',
		summary: 'Ongoing, part-time technical leadership embedded alongside your existing team.',
		suits: 'Suits teams that need experienced technical leadership but not a full-time executive.',
		includes: [
			'Regular involvement in planning, design and technical decisions',
			'Coaching and mentoring for engineers and technical leads',
			'Architectural guidance and support as issues come up'
		]
	},
	{
		title: 'Architecture & Delivery Improvement',
		summary:
			'Targeted advisory work to resolve a specific architectural, quality or delivery challenge.',
		suits: 'Suits a clearly defined problem that needs experienced help to work through.',
		includes: [
			'A shared understanding of the problem and its constraints',
			'Options, trade-offs and a recommended direction',
			'Hands-on support while your team puts it in place'
		]
	}
];

export type Step = { title: string; body: string };

export const steps: Step[] = [
	{
		title: 'Understand',
		body: 'Learn how the team works, what the business needs and where the constraints are.'
	},
	{
		title: 'Prioritise',
		body: 'Identify the risks, gaps and opportunities that will make the biggest difference.'
	},
	{
		title: 'Improve',
		body: 'Work alongside engineers and leaders to put practical changes in place.'
	},
	{
		title: 'Enable',
		body: 'Transfer knowledge, strengthen ownership and leave the team more capable.'
	}
];

export type Faq = { question: string; answer: string[] };

export const faqs: Faq[] = [
	{
		question: 'What is a Fractional Engineering Lead?',
		answer: [
			'An experienced engineering leader who works with your team part-time. You get technical direction, architectural guidance and mentoring without hiring a full-time senior leader.',
			'The time commitment is set to suit what your team needs, and can change as the team grows in confidence.'
		]
	},
	{
		question: 'How is this different from hiring another developer?',
		answer: [
			'Another developer adds capacity. This adds direction and capability. The focus is on how your team makes decisions, designs systems and delivers work, so the whole team gets better rather than one more pair of hands.'
		]
	},
	{
		question: 'Will you work with our existing engineering team?',
		answer: [
			'Yes, that’s the whole point. I work alongside your developers and leads, not around them. Your team keeps ownership of the code, the systems and the decisions.'
		]
	},
	{
		question: 'Do we need a full-time engineering leader instead?',
		answer: [
			'Possibly, eventually. Many teams don’t yet need, or can’t yet justify, a full-time engineering executive. A fractional arrangement gives you experienced leadership now.',
			'If a full-time role does become the right move, I can help you work out what that role should look like and prepare the team for it.'
		]
	},
	{
		question: 'Can you help with architecture and technical risk?',
		answer: [
			'Yes. Architecture reviews, technical debt prioritisation, reducing reliance on individual engineers and improving visibility of critical systems are all core parts of the work.',
			'This is engineering risk, not a formal security audit or certification. If you need those, I can help you work out what to ask for.'
		]
	},
	{
		question: 'What does an initial engagement look like?',
		answer: [
			'It usually starts with a conversation about your team and what’s worrying you. From there, an Engineering Capability Assessment is often the most useful first step: it gives everyone a shared view of where things stand and what to tackle first.',
			'Scope and timing are agreed with you up front, based on what you need.'
		]
	},
	{
		question: 'How will we know whether things are improving?',
		answer: [
			'We agree early on what “better” looks like for your team. That might be how predictably work ships, how often releases cause problems, how much rework there is, or how confidently the team makes decisions without escalating.',
			'Where it helps, we put simple measures in place so progress is visible rather than a matter of opinion.'
		]
	}
];
