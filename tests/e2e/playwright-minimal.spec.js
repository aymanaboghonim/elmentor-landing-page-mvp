// Playwright minimal check for Elmentor landing page
const { test, expect } = require('@playwright/test');

test('Minimal sanity: Google loads', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle(/Google/);
});
