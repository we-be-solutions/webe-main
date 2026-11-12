/**
 * Site-wide settings and business identity.
 * Keep contact and legal details here so every page reads from one place.
 */
export const site = {
	name: 'WeBe Solutions',
	shortName: 'WeBe',
	url: 'https://webe.au',
	email: 'brett@webe.au',
	abn: '33 620 124 892',
	/** Hidden for now. Set to 'https://www.linkedin.com/company/webe-au' to show it again. */
	linkedin: null as string | null,
	ogImage: 'https://webe.au/og-image.png',
	description:
		'Practical technology leadership and independent advice for Australian businesses. Strengthen your engineering team or make your next technology decision with confidence.'
} as const;

/**
 * Articles are hidden while the content is reworked. When false, the /blog routes
 * and /api/content return 404 and no links to articles are rendered.
 * The markdown files in src/content are kept so they can be revised and re-enabled.
 */
export const ARTICLES_ENABLED = false;
