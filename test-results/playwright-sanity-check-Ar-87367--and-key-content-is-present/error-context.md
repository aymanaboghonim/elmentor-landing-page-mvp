# Test info

- Name: Arabic Version >> Homepage loads and key content is present
- Location: /workspaces/elmentor-landing-page-mvp/playwright-sanity-check.spec.js:24:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveTitle(expected)

Locator: locator(':root')
Expected pattern: /Elmentor|المنتور/i
Received string:  "Site not found · GitHub Pages"
Call log:
  - expect.toHaveTitle with timeout 5000ms
  - waiting for locator(':root')
    9 × locator resolved to <html>…</html>
      - unexpected value "Site not found · GitHub Pages"

    at /workspaces/elmentor-landing-page-mvp/playwright-sanity-check.spec.js:27:26
```

# Page snapshot

```yaml
- heading "404" [level=1]
- paragraph:
  - strong: There isn't a GitHub Pages site here.
- paragraph:
  - text: If you're trying to publish one,
  - link "read the full documentation":
    - /url: https://help.github.com/pages/
  - text: to learn how to set up
  - strong: GitHub Pages
  - text: for your repository, organization, or user account.
- link "GitHub Status":
  - /url: https://githubstatus.com
- text: —
- link "@githubstatus":
  - /url: https://twitter.com/githubstatus
- link:
  - /url: /
```

# Test source

```ts
   1 | // playwright-sanity-check.spec.js
   2 | // Playwright expects test files to end with .spec.js or .test.js by default
   3 | // This is a direct copy of the previous script for correct test discovery
   4 |
   5 | const { test, expect } = require('@playwright/test');
   6 |
   7 | const sites = [
   8 |   {
   9 |     name: 'English',
  10 |     url: 'https://aymanaboghonim.github.io/elmentor-landing-page-mvp/',
  11 |     lang: 'en',
  12 |     videoTitle: 'What is the Elmentor Program and how can it help you?'
  13 |   },
  14 |   {
  15 |     name: 'Arabic',
  16 |     url: 'https://aymanaboghonim.github.io/elmentor-landing-page-ar/',
  17 |     lang: 'ar',
  18 |     videoTitle: 'ايه هو برنامج المنتور وازاي ممكن يساعدك؟'
  19 |   }
  20 | ];
  21 |
  22 | for (const site of sites) {
  23 |   test.describe(`${site.name} Version`, () => {
  24 |     test(`Homepage loads and key content is present`, async ({ page }) => {
  25 |       await page.goto(site.url);
  26 |       // 1. Homepage loads
> 27 |       await expect(page).toHaveTitle(/Elmentor|المنتور/i);
     |                          ^ Error: Timed out 5000ms waiting for expect(locator).toHaveTitle(expected)
  28 |       // 2. Key info
  29 |       await expect(page.locator('h1, h2')).toContainText([/Elmentor|المنتور/i]);
  30 |       // 3. Images
  31 |       await expect(page.locator('img[alt*="logo" i]')).toBeVisible();
  32 |       await expect(page.locator('img[alt*="circles" i], img[alt*="دوائر" i]')).toBeVisible();
  33 |       // 4. Circles section text
  34 |       await expect(page.locator('.circles-section')).toContainText([/circle|دائرة|knowledge|معرفة/i]);
  35 |       // 5. Video embed
  36 |       await expect(page.locator('iframe[src*="youtube"]')).toBeVisible();
  37 |       // 6. Video title/caption
  38 |       await expect(page.locator('.hero-video-title')).toContainText(site.videoTitle);
  39 |       // 7. Navigation/links
  40 |       await expect(page.locator('a[href*="code-of-conduct" i],a[href*="CODE_OF_CONDUCT" i]')).toBeVisible();
  41 |       await expect(page.locator('a[href*="github" i]')).toBeVisible();
  42 |       await expect(page.locator('a[href*="facebook" i]')).toBeVisible();
  43 |       await expect(page.locator('a[href*="youtube" i]')).toBeVisible();
  44 |       // 8. Contact/Mentorship section
  45 |       await expect(page.locator('text=/Contact|تواصل/i')).toBeVisible();
  46 |       // 9. Responsive: check mobile viewport
  47 |       await page.setViewportSize({ width: 375, height: 800 });
  48 |       await expect(page.locator('body')).toBeVisible();
  49 |     });
  50 |   });
  51 | }
  52 |
```