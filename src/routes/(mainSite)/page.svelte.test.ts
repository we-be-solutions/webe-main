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
			'Your senior tech lead, whether you’re a team of one or five.'
		);
	});

	test('presents all three services', () => {
		render(Page);
		for (const name of ['Technical Guidance', 'Hands-on Coaching', 'Process & Delivery']) {
			expect(screen.getByRole('heading', { name })).toBeInTheDocument();
		}
	});

	test('has the primary call to action', () => {
		render(Page);
		expect(screen.getAllByRole('button', { name: 'Tell me what you need' }).length).toBeGreaterThan(
			0
		);
	});

	test('states the central promise', () => {
		render(Page);
		expect(
			screen.getByRole('heading', { name: 'Build capability, not dependency.' })
		).toBeInTheDocument();
	});

	test('avoids obsolete or off-limits claims', () => {
		const { container } = render(Page);
		const text = container.textContent ?? '';
		expect(text).not.toMatch(/\$800/);
		expect(text).not.toMatch(/don.t pay/i);
		expect(text).not.toMatch(/guarantee/i);
		expect(text).not.toMatch(/unlock your potential|supercharge|10x/i);
		expect(text).not.toMatch(/\/blog/);
		expect(text).not.toMatch(/Capability Accelerator/);
		expect(text).not.toMatch(/growing businesses/i);
		expect(text).not.toMatch(/junior/i);
		expect(text).not.toMatch(/agenc(y|ies)|consultanc(y|ies)/i);
	});
});
