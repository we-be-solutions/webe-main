import { describe, test, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';
import Page from './+page.svelte';

// SvelteKit's runtime env module isn't available under vitest
vi.mock('$env/dynamic/public', () => ({ env: {} }));

describe('/+page.svelte', () => {
	test('renders the headline', () => {
		render(Page);
		expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
			'Better technology decisions. Stronger teams.'
		);
	});

	test('links to both services', () => {
		render(Page);
		expect(screen.getByRole('link', { name: /Engineering Enablement/ })).toHaveAttribute(
			'href',
			'/engineering-enablement'
		);
		expect(screen.getByRole('link', { name: /Technology Advisory/ })).toHaveAttribute(
			'href',
			'/technology-advisory'
		);
	});

	test('has the primary call to action', () => {
		render(Page);
		expect(screen.getAllByRole('button', { name: 'Let’s talk' }).length).toBeGreaterThan(0);
	});

	test('avoids obsolete or off-limits claims', () => {
		const { container } = render(Page);
		const text = container.textContent ?? '';
		expect(text).not.toMatch(/\$800/);
		expect(text).not.toMatch(/don.t pay/i);
		expect(text).not.toMatch(/\bC[TI]O\b/);
		expect(text).not.toMatch(/\/blog/);
	});
});
