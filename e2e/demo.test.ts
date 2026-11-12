import { expect, test } from '@playwright/test';

test('home page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h1')).toHaveText('Build a stronger engineering team.');
});

test('articles are hidden', async ({ page }) => {
	for (const path of ['/blog', '/blog/what_is_automation', '/api/content']) {
		const response = await page.goto(path);
		expect(response?.status(), path).toBe(404);
	}
});

test('contact dialog opens from the hero', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('button', { name: 'Discuss your engineering challenges' }).first().click();
	await expect(page.getByRole('dialog')).toBeVisible();
	await expect(page.getByLabel('Work email')).toBeVisible();
});
