// playwright-sanity-check.spec.js
// Playwright expects test files to end with .spec.js or .test.js by default
// This is a direct copy of the previous script for correct test discovery

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
      // 1. Homepage loads
      await expect(page).toHaveTitle(/Elmentor|المنتور/i);
      // 2. Key info
      await expect(page.locator('h1, h2')).toContainText([/Elmentor|المنتور/i]);
      // 3. Images
      await expect(page.locator('img[alt*="logo" i]')).toBeVisible();
      await expect(page.locator('img[alt*="circles" i], img[alt*="دوائر" i]')).toBeVisible();
      // 4. Circles section text
      await expect(page.locator('.circles-section')).toContainText([/circle|دائرة|knowledge|معرفة/i]);
      // 5. Video embed
      await expect(page.locator('iframe[src*="youtube"]')).toBeVisible();
      // 6. Video title/caption
      await expect(page.locator('.hero-video-title')).toContainText(site.videoTitle);
      // 7. Navigation/links
      await expect(page.locator('a[href*="code-of-conduct" i],a[href*="CODE_OF_CONDUCT" i]')).toBeVisible();
      await expect(page.locator('a[href*="github" i]')).toBeVisible();
      await expect(page.locator('a[href*="facebook" i]')).toBeVisible();
      await expect(page.locator('a[href*="youtube" i]')).toBeVisible();
      // 8. Contact/Mentorship section
      await expect(page.locator('text=/Contact|تواصل/i')).toBeVisible();
      // 9. Responsive: check mobile viewport
      await page.setViewportSize({ width: 375, height: 800 });
      await expect(page.locator('body')).toBeVisible();
    });
  });
}
