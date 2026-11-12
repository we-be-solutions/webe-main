import { describe, test, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';
import Page from './+page.svelte';

// SvelteKit's runtime env module isn't available under vitest
vi.mock('$env/dynamic/public', () => ({ env: {} }));

describe('/+page.svelte', () => {
	test('renders the consulting headline', () => {
		render(Page);
		expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
			'Build a stronger engineering team.'
		);
	});

	test('has the primary call to action', () => {
		render(Page);
		expect(
			screen.getAllByRole('button', { name: 'Discuss your engineering challenges' }).length
		).toBeGreaterThan(0);
	});

	test('no longer mentions the old day-rate offer or guarantee', () => {
		const { container } = render(Page);
		const text = container.textContent ?? '';
		expect(text).not.toMatch(/\$800/);
		expect(text).not.toMatch(/don.t pay/i);
		expect(text).not.toMatch(/\/blog/);
	});
});
