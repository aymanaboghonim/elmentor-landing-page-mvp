// playwright.config.js
// Minimal Playwright config to enable running standalone test files

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: '.',
  timeout: 30000,
  retries: 0,
  use: {
    headless: true,
    viewport: { width: 1280, height: 800 },
    ignoreHTTPSErrors: true,
  },
};

module.exports = config;
