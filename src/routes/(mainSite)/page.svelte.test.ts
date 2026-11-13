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
			'Help your developers step up.'
		);
	});

	test('presents the four capabilities', () => {
		render(Page);
		for (const name of [
			'Technical judgement',
			'Problem-solving',
			'Engineering ownership',
			'Engineering practices'
		]) {
			expect(screen.getByRole('heading', { name })).toBeInTheDocument();
		}
	});

	test('has the primary call to action', () => {
		render(Page);
		expect(
			screen.getAllByRole('button', { name: 'Let’s talk about your team' }).length
		).toBeGreaterThan(0);
	});

	test('avoids obsolete or off-limits claims', () => {
		const { container } = render(Page);
		const text = container.textContent ?? '';
		expect(text).not.toMatch(/\$800/);
		expect(text).not.toMatch(/don.t pay/i);
		expect(text).not.toMatch(/guarantee/i);
		expect(text).not.toMatch(/unlock your potential|supercharge|10x/i);
		expect(text).not.toMatch(/\/blog/);
	});
});
