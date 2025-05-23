// playwright-screenshot.js
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const url = 'https://aymanaboghonim.github.io/elmentor-landing-page-mvp/';

  // Desktop full page
  await page.goto(url);
  await page.screenshot({ path: 'screenshots/fullpage-desktop.png', fullPage: true });

  // Mobile (iPhone X) full page
  await page.setViewportSize({ width: 375, height: 812 });
  await page.reload();
  await page.screenshot({ path: 'screenshots/fullpage-mobile.png', fullPage: true });

  // Hero section only (desktop)
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.reload();
  const hero = await page.$('.hero-section');
  if (hero) {
    await hero.screenshot({ path: 'screenshots/hero-section.png' });
  }

  // Activities section only
  const activities = await page.$('.activities-section');
  if (activities) {
    await activities.screenshot({ path: 'screenshots/activities-section.png' });
  }

  // Circles section only
  const circles = await page.$('.circles-section');
  if (circles) {
    await circles.screenshot({ path: 'screenshots/circles-section.png' });
  }

  // Code of Conduct section only
  const coc = await page.$('.code-of-conduct-section');
  if (coc) {
    await coc.screenshot({ path: 'screenshots/code-of-conduct-section.png' });
  }

  // Footer only
  const footer = await page.$('footer');
  if (footer) {
    await footer.screenshot({ path: 'screenshots/footer.png' });
  }

  await browser.close();
})();
