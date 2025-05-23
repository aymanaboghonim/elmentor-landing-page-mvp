// playwright-video.js
// This script captures a video of the deployed Elmentor landing page, including prompt and output sections if visible.
// Usage: node playwright-video.js
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ recordVideo: { dir: 'screenshots/' } });
  const page = await context.newPage();
  const url = 'https://aymanaboghonim.github.io/elmentor-landing-page-mvp/';
  await page.goto(url);
  // Optionally, scroll through the page to show all sections
  await page.waitForTimeout(2000);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 3));
  await page.waitForTimeout(2000);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 2 / 3));
  await page.waitForTimeout(2000);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(2000);
  await browser.close();
})();
