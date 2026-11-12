import { expect, test } from '@playwright/test';

test('home page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h1')).toHaveText('Better technology decisions. Stronger teams.');
});

test('service pages load', async ({ page }) => {
	for (const path of ['/engineering-enablement', '/technology-advisory']) {
		const response = await page.goto(path);
		expect(response?.status(), path).toBe(200);
		await expect(page.locator('h1')).toBeVisible();
	}
});

test('articles are hidden', async ({ page }) => {
	for (const path of ['/blog', '/blog/what_is_automation', '/api/content']) {
		const response = await page.goto(path);
		expect(response?.status(), path).toBe(404);
	}
});

test('contact dialog pre-selects the topic on a service page', async ({ page }) => {
	await page.goto('/technology-advisory');
	await page.getByRole('button', { name: 'Get technical guidance' }).first().click();
	await expect(page.getByRole('dialog')).toBeVisible();
	await expect(page.getByLabel('A technology decision or challenge')).toBeChecked();
});
