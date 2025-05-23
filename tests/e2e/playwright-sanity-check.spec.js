// Playwright sanity check for Elmentor landing page (English)
// ...existing code from playwright-sanity-check.spec.js...

const { test, expect } = require('@playwright/test');

const sites = [
  {
    name: 'English',
    url: 'https://aymanaboghonim.github.io/elmentor-landing-page-mvp/',
    lang: 'en',
    videoTitle: 'What is the Elmentor Program and how can it help you?'
  },
  {
    name: 'Arabic',
    url: 'https://aymanaboghonim.github.io/elmentor-landing-page-ar/',
    lang: 'ar',
    videoTitle: 'ايه هو برنامج المنتور وازاي ممكن يساعدك؟'
  }
];

for (const site of sites) {
  test.describe(`${site.name} Version`, () => {
    test(`Homepage loads and key content is present`, async ({ page }) => {
      await page.goto(site.url);
      await expect(page).toHaveTitle(/Elmentor|المنتور/i);
      await expect(page.locator('h1, h2')).toContainText([/Elmentor|المنتور/i]);
      await expect(page.locator('img[alt*="logo" i]')).toBeVisible();
      await expect(page.locator('img[alt*="circles" i], img[alt*="دوائر" i]')).toBeVisible();
      await expect(page.locator('.circles-section')).toContainText([/circle|دائرة|knowledge|معرفة/i]);
      await expect(page.locator('iframe[src*="youtube"]')).toBeVisible();
      await expect(page.locator('.hero-video-title')).toContainText(site.videoTitle);
      await expect(page.locator('a[href*="code-of-conduct" i],a[href*="CODE_OF_CONDUCT" i]')).toBeVisible();
      await expect(page.locator('a[href*="github" i]')).toBeVisible();
      await expect(page.locator('a[href*="facebook" i]')).toBeVisible();
      await expect(page.locator('a[href*="youtube" i]')).toBeVisible();
      await expect(page.locator('text=/Contact|تواصل/i')).toBeVisible();
      await page.setViewportSize({ width: 375, height: 800 });
      await expect(page.locator('body')).toBeVisible();
    });
  });
}
