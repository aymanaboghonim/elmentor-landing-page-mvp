# Test info

- Name: English Version >> Homepage loads and key content is present
- Location: /workspaces/elmentor-landing-page-mvp/playwright-sanity-check.spec.js:24:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveTitle(expected)

Locator: locator(':root')
Expected pattern: /Elmentor|المنتور/i
Received string:  "React App"
Call log:
  - expect.toHaveTitle with timeout 5000ms
  - waiting for locator(':root')
    8 × locator resolved to <html lang="en">…</html>
      - unexpected value "React App"

    at /workspaces/elmentor-landing-page-mvp/playwright-sanity-check.spec.js:27:26
```

# Page snapshot

```yaml
- img "Elmentor Program logo"
- heading "Elmentor Program" [level=1]
- paragraph: The Elmentor Program is an exclusive, global community of approximately 150 members representing over 20 countries. Our members span a wide range of experience—from early-career professionals to seasoned experts with up to 25 years in the field.
- paragraph:
  - strong: "Our goal:"
  - text: To create a space where knowledge is exchanged freely, and continuous learning is embedded into everything we do.
- link "Join the Movement":
  - /url: "#activities"
- navigation "Key Resources":
  - link "Code of Conduct":
    - /url: https://github.com/ElmentorProgram/.github/blob/main/CODE_OF_CONDUCT.md
  - link "Community Blog":
    - /url: https://devopsvisions.github.io/
  - link "GitHub Repo":
    - /url: https://github.com/ElmentorProgram
  - link "Facebook":
    - /url: https://www.facebook.com/mradwandevops
  - link "YouTube":
    - /url: https://www.youtube.com/@MRadwanArabic
- heading "What is the Elmentor Program and how can it help you?" [level=3]
- iframe
- heading "Our Activities" [level=2]
- paragraph: "Within the community, members actively engage in collaborative and developmental activities designed to benefit everyone—from novices to experts—while reinforcing the habit of lifelong learning:"
- img "job opportunities": 💼
- heading "Sharing Job Opportunities" [level=3]
- list:
  - listitem: Connect members with new roles and projects
- img "open source": 🌱
- heading "Open-Source Collaboration" [level=3]
- list:
  - listitem: Work together on impactful open-source projects
- img "study groups": 📚
- heading "Study Groups" [level=3]
- list:
  - listitem: Organize and join focused learning groups
- img "use cases": 💡
- heading "Real-World Use Cases" [level=3]
- list:
  - listitem: Discuss business scenarios and technical solutions
- img "knowledge exchange": 🔄
- heading "Knowledge Exchange" [level=3]
- list:
  - listitem: Share technical and leadership insights
- heading "Understanding Knowledge Access Through Elmentor Circles" [level=2]
- paragraph:
  - text: To structure access, engagement, and leadership within the community, we use a model called
  - strong: Elmentor Circles
  - text: ". These circles define different levels of participation and responsibility, arranged in clear layers:"
- list:
  - listitem:
    - strong: "Core Circle:"
    - text: Founders, program leaders, and key decision-makers.
  - listitem:
    - strong: "Mentors Circle:"
    - text: Senior members who guide, support, and mentor others.
  - listitem:
    - strong: "Contributors Circle:"
    - text: Active members who contribute to projects, events, and discussions.
  - listitem:
    - strong: "Community Circle:"
    - text: All members who participate, learn, and grow together.
- paragraph: This model helps us structure engagement, learning, and decision-making in a clear and scalable way.
- heading "Code of Conduct" [level=2]
- paragraph:
  - text: We value respectful and constructive interaction with all audiences. Please read our
  - link "Code of Conduct":
    - /url: https://github.com/ElmentorProgram/.github/blob/main/CODE_OF_CONDUCT.md
  - text: to understand how we ensure a safe and welcoming environment for everyone.
- contentinfo:
  - link "Contact":
    - /url: mailto:hello@elmentor.org
  - link "Join":
    - /url: https://elmentor.org/join
  - text: © 2025 Elmentor Program
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