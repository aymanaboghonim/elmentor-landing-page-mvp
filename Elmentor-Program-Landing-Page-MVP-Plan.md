# Elmentor Program Landing Page MVP — Copilot Agentic Mode Demo Plan (Detailed & Demo-Ready)

---

## File Naming & Prompt Standards (Project-Wide)

### File Naming
- Use `kebab-case` for scripts and automation files (e.g., `playwright-screenshot.js`, `playwright-video.js`).
- Use `PascalCase` for React component files (e.g., `HeroSection.js`).
- Screenshots and videos must be named with context and device (e.g., `fullpage-desktop.png`, `hero-section-mobile.png`, `demo-video.webm`).
- All files must be descriptive and specific; avoid generic names.

### Prompt & Documentation
- Prompts must be clear, actionable, and start with a verb (e.g., “Create…”, “Scaffold…”, “Automate…”).
- Always include the context or goal in the prompt.
- Document every major step, including the prompt used, the action taken, and the result.
- Use Markdown headings and lists for clarity in documentation.
- Reference file names and outputs explicitly in instructions.

---

## 1. Project Overview
**Goal:**
Build a single-page landing site for the Elmentor Program—a global AI community—using **React** and **GitHub Copilot Agentic Mode**, developed and demoed directly in **GitHub Codespaces** for transparency and ease of collaboration.

---

## 2. Stack, Tools, and Environment
- **Framework:** React (Create React App)
- **Development:** GitHub Codespaces
- **Version Control:** GitHub
- **Deployment:** GitHub Pages
- **AI Assistance:** GitHub Copilot (Agentic Mode)
- **Automation:** Playwright for screenshots and video capture

---

## 3. Project Scope & Structure
- **SPA:** All content on one scrollable page.
- **Components:**
  - HeroSection (intro, mission, logo, resource links, embedded YouTube video)
  - ActivitiesSection (community activities as cards)
  - CirclesSection (Elmentor Circles visual + explanation)
  - CodeOfConductSection (summary + correct link)
  - Footer (contact/join only, no repeated links)
- **Assets:** `/public/elmentor_logo.png`, `/public/elmentor-circles-visual.png`
- **No Backend:** Static content only.
- **Mobile-Responsive:** Yes.
- **Easily Extendable:** Yes.

---

## 4. Detailed Demo & Reproduction Steps

### **A. Preparation**
1. **Open GitHub Codespaces** for your repo.
2. **Upload assets**: `elmentor_logo.png`, `elmentor-circles-visual.png` to `/public/`.
3. **Open a Markdown preview** of this plan for reference.

### **B. Initialize the React App**
- **Prompt:**
  > “Create a new React app for a landing page MVP for the Elmentor Program.”
- **Command:**
  ```bash
  npx create-react-app .
  ```
- **Screenshot:** Take a screenshot of the terminal after successful setup.

### **C. Scaffold Component Structure**
- **Prompt:**
  > “Read the Elmentor-Program-Landing-Page-MVP-Plan.md and generate the initial React component folder structure and empty component files as specified in the plan.”
- **Action:**
  - Create `/src/components/` and add:
    - HeroSection.js
    - ActivitiesSection.js
    - CirclesSection.js
    - CodeOfConductSection.js
    - Footer.js
- **Screenshot:** Take a screenshot of the file tree in VS Code.

### **D. Scaffold Each Component**
- **Prompt:**
  > “Scaffold each component, starting with HeroSection, using the instructions from the plan.”
- **Action:**
  - Add content and structure to each component as described in the plan.
  - For CirclesSection, reference the image and add the explanatory text before the image.
  - For HeroSection, add resource links and embed the YouTube video.
- **Screenshot:** After each component is scaffolded, take a screenshot of the rendered section in the browser.

### **E. Add Branding, Content, and Links**
- **Prompt:**
  > “Use real Elmentor Program info for all sections. Add resource links (Code of Conduct, Blog, GitHub, Facebook, YouTube) to HeroSection. Embed the YouTube video in HeroSection.”
- **Screenshot:** Take a screenshot of the HeroSection with all links and video.

### **F. Style & Polish**
- **Prompt:**
  > “Add modern, responsive CSS for all sections. Ensure mobile and desktop look great.”
- **Action:**
  - Update `App.css` for layout, spacing, color, responsive design, button/link states, and video embed styling.
- **Screenshot:** Take a screenshot of the app in desktop and mobile preview modes.

### **G. Assemble in App.js**
- **Action:**
  - Import and render all sections in order.
  - Remove default React boilerplate.
- **Screenshot:** Take a screenshot of the full page scroll.

### **H. Deploy to GitHub Pages**
- **Prompt:**
  > “Set up deployment to GitHub Pages for this React app.”
- **Commands:**
  ```bash
  npm install gh-pages --save-dev
  ```
  Add to `package.json`:
  ```json
  "homepage": "https://<your-username>.github.io/elmentor-landing-page-mvp",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
  ```
  Then deploy:
  ```bash
  npm run deploy
  ```
- **Screenshot:** Take a screenshot of the terminal after successful deployment.

### **I. Document & Screenshot**
- **Action:**
  - Update `README.md` and this plan with:
    - Steps taken
    - Prompts used
    - Live URL
    - Screenshots (save in `/screenshots/`)
    - Lessons learned
- **Screenshot:** Take a screenshot of the `/screenshots/` folder in VS Code.

### **J. Automate Screenshots & Video**
- **Prompt:**
  > “Automate screenshots and video capture of the deployed app using Playwright.”
- **Action:**
  - Use `playwright-screenshot.js` to capture all major sections and full-page views.
  - To automate video, use the Playwright script below:

```js
// playwright-video.js
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ recordVideo: { dir: 'screenshots/' } });
  const page = await context.newPage();
  await page.goto('https://aymanaboghonim.github.io/elmentor-landing-page-mvp/');
  await page.waitForTimeout(8000); // Record 8 seconds of interaction
  await browser.close();
})();
```
- **Command:**
  ```bash
  node playwright-video.js
  ```
- **Result:**
  - Video will be saved in `/screenshots/` (e.g., `trace-video.webm`).

---

## Automated Screenshots & Video Capture

Screenshots and video are generated automatically using Playwright scripts, following the standards outlined above. Outputs are saved in `/screenshots/`:

- `fullpage-desktop.png`
- `fullpage-mobile.png`
- `hero-section.png`
- `activities-section.png`
- `circles-section.png`
- `code-of-conduct-section.png`
- `footer.png`
- Video: `.webm` file (auto-named, e.g., `a573d5f1f820bab4da172fcbd0fac03d.webm`)

Scripts:
- `playwright-screenshot.js` — screenshots
- `playwright-video.js` — video demo

To run:
```bash
node playwright-screenshot.js
node playwright-video.js
```

---

## 5. Copilot Prompts Used
- “Create a React HeroSection component introducing the Elmentor Program…”
- “List activities as cards with icons…”
- “Show Elmentor Circles visual as an image with caption…”
- “Add Code of Conduct summary…”
- “Embed a YouTube video in the HeroSection…”
- “Set up deployment to GitHub Pages…”
- “Automate screenshots and video capture of the deployed app using Playwright.”

---

## 6. Live Demo
- https://aymanaboghonim.github.io/elmentor-landing-page-mvp/

---

## 7. Lessons Learned
- Copilot Agentic Mode can rapidly scaffold, style, and deploy a real-world MVP.
- Clear prompts and plan updates are essential for reproducibility.
- Documentation, screenshots, and video help others follow and review the process.

---

## 8. Next Steps
- Share the live URL, screenshots, and video with mentors and community.
- Continue to iterate and extend as needed.
- Keep documentation and plan up to date.

---

## 9. Tips for Live Demo
- Narrate each step and prompt as you go.
- Use the VS Code screenshot tool (or `Ctrl+Shift+S`/browser screenshot) after each major step.
- Show the `/screenshots/` folder and video at the end.
- Emphasize how Copilot Agentic Mode accelerates MVP delivery.

---

## Workflow Note: Reliable Deployment & Sync

- Always use the absolute path to the React app directory for deployment:
  ```bash
  cd /workspaces/elmentor-landing-page-mvp/elmentor-landing-page && npm install && npm run deploy
  ```
- This avoids path errors and ensures the live app is always up to date.
- After every documentation or code update:
  1. Commit and push changes.
  2. Deploy the app to GitHub Pages.
- This workflow is now part of our main plan and demo best practices.

---

## Guidelines for Visuals, Titles, and Multilingual Support

- **Images:** All images (e.g., logos, diagrams) must have transparent backgrounds for a professional look and seamless integration with any background color. (Pending update when new assets are received.)
- **Elmentor Circles:** The Circles section must use real, accessible text for all explanations and labels. Use images only for visual aids, not for conveying essential information.
- **Video Titles:** All video titles and captions must be in English, even if the video content is in another language, to maintain consistency with the rest of the page.
- **Multilingual Support:**
  - Maintain two versions of the landing page: one in English (`elmentor-landing-page-en`), one in Arabic (`elmentor-landing-page-ar`).
  - Each version should have its own deployment and documentation.
  - To add a new language version:
    1. Duplicate the English app folder and name it `elmentor-landing-page-ar`.
    2. Translate all content and UI to Arabic, ensuring RTL layout and accessibility.
    3. Update the README and deployment scripts for the new version.
    4. Deploy to a separate GitHub Pages site (e.g., `/elmentor-landing-page-ar/`).
    5. Link between language versions in the UI and documentation.

---

## Empower Through Mentorship & Contact

We believe in empowering our community through mentorship. If you have questions, want to get involved, or just want to say hello:

- **Name**
- **Email*** (Please enter a valid email address)
- **Message**

Sign up for our email list for updates, promotions, and more.

**Send**

---

*Note: Documentation and the live app are always kept in sync. All changes are reflected in both the repository and the deployed GitHub Pages site. This workflow is part of our main plan and best practices.*
