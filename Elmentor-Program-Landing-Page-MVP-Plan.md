# Elmentor Program Landing Page MVP — Copilot Agentic Mode Demo Plan (React, GitHub, Codespaces)

---

## 1. Project Overview

**Goal:**  
Build a single-page landing site for the Elmentor Program—a global AI community—using **React** and **GitHub Copilot Agentic Mode**, developed and demoed directly in **GitHub Codespaces** for transparency and ease of collaboration.

---

## 2. Stack, Tools, and Environment

- **Framework:** React (using Create React App)
- **Development Environment:** GitHub Codespaces (cloud VS Code)
- **Version Control & Collaboration:** GitHub repository
- **Deployment (Optional):** GitHub Pages for live static site
- **AI Assistance:** GitHub Copilot (Agentic Mode for prompt-driven development)

---

## 3. Project Scope

- **Single-Page App (SPA):** All content is on one scrollable page.
- **Components:** The landing page will be composed of clear, modular React components:

    - `HeroSection` (intro/mission)
    - `ActivitiesSection` (list of activities)
    - `CirclesSection` (Elmentor Circles — references existing visual, no need to reproduce)
    - `CodeOfConductSection` (brief + link)
    - `Footer` (contact/join/blog links)
- **Note on Elmentor Circles Section:**  
  There is already an existing visual for the Elmentor Circles. This section will reference and display the existing visual (e.g., image, diagram), and will **not** attempt to reproduce or redesign it.
- **No Backend:** Purely static content for MVP.
- **Mobile-Responsive:** Designed to look good on desktop and mobile.
- **Easily Extendable:** Ready to add more sections or interactivity in future.

---

## 4. System Requirements Checklist (SRC)

- Static SPA using React
- All copy/content provided by the Elmentor team
- Responsive design
- Easy local development in Codespaces
- Optional hosting via GitHub Pages
- Clear documentation and demo artifacts (screenshots, video, prompt history)

---

## 5. Design Decision Checklist (DDC)

- Use a **single GitHub repo** for code, documentation, and demo assets.
- All development done in **GitHub Codespaces**—no local environment setup required.
- Use **Copilot Agentic Mode** for scaffolding and coding each section/component.
- Folder structure:
    ```
    /
    ├── README.md
    ├── Elmentor-Program-Landing-Page-MVP-Plan.md
    ├── public/
    │   └── logo.png (and any assets)
    ├── src/
    │   ├── App.js
    │   ├── components/
    │   │   ├── HeroSection.js
    │   │   ├── ActivitiesSection.js
    │   │   ├── CirclesSection.js
    │   │   ├── CodeOfConductSection.js
    │   │   └── Footer.js
    │   └── index.js
    ├── package.json
    ├── .gitignore
    ├── screenshots/
    │   └── <progress-images>.png
    └── ...
    ```
- All npm dependencies managed in Codespaces with `npm install`.
- Optional: Use `gh-pages` npm package for deployment.

---

## 6. Development Workflow

### 6.1. Preparation

- Copy all required Elmentor content to a document for easy reference.
- Sketch a simple wireframe of the landing page sections (optional but helpful).
- Prepare the existing Elmentor Circles visual (image or diagram file) for use in the project.

### 6.2. Repository Setup

- Create a new public GitHub repo (e.g., `elmentor-landing-page-mvp`).
- Add this plan (`Elmentor-Program-Landing-Page-MVP-Plan.md`) and a basic `README.md`.
- Open the repo in **GitHub Codespaces**.

### 6.3. React Project Initialization

- In Codespaces terminal, run:
    ```bash
    npx create-react-app .
    ```
- Wait for setup to complete.
- Start the development server:
    ```bash
    npm start
    ```
- Preview via Codespaces browser preview.

### 6.4. Component-by-Component Development (with Copilot)

- For each section, use prompt-driven Copilot development:
    - Example prompt:  
      “Create a React functional component for the Hero section of the Elmentor Program landing page, including a title, subtitle, and call-to-action button.”
- **For the Elmentor Circles section:**  
    - Use a prompt like:  
      “Create a React component that displays the Elmentor Circles as an image and includes a short descriptive caption. The image file will be provided.”
    - Place the provided visual in the `public/` or `src/assets/` directory and reference it in the component.
- After each component, review, edit, and test.
- Assemble components into `App.js`.

### 6.5. Style & Polish

- Add CSS for layout, colors, and responsiveness.
- Use Copilot for style suggestions:  
    “Make the Activities section display as cards with icons and bullet points.”
- Test on different screen sizes.

### 6.6. Documentation and Demo Assets

- Take screenshots at key steps, save in `/screenshots`.
- Document all Copilot prompts used for each section.
- Update `README.md` with setup, usage, and demo instructions.

### 6.7. (Optional) Deploy via GitHub Pages

- In Codespaces terminal:
    ```bash
    npm install gh-pages --save-dev
    ```
- Add `"homepage": "https://<your-username>.github.io/<your-repo-name>"` to `package.json`.
- Add scripts to `package.json`:
    ```json
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
    ```
- Deploy:
    ```bash
    npm run deploy
    ```
- Share the live demo link in your documentation.

---

## 7. Demo & Sharing

### 7.1. README.md Template

```markdown
# Elmentor Program Landing Page (React + Copilot Agentic Mode)

MVP landing page for the Elmentor Program, built in GitHub Codespaces with Copilot Agentic Mode.

## Features

- Program intro and mission
- Community activities
- Elmentor Circles section (references existing visual)
- Code of Conduct summary
- Contact and blog links

## Getting Started

Open in GitHub Codespaces or clone locally.

```bash
npm install
npm start
```

## Screenshots

See `/screenshots` for development progress.

## Copilot Prompts Used

- “Create a React HeroSection component introducing the Elmentor Program…”
- “List activities as cards with icons…”
- “Show Elmentor Circles visual as an image with caption…”
- “Add Code of Conduct summary…”

## Video Demo

[Link to recording if available]

## Credits

Built with GitHub Copilot Agentic Mode.
```

### 7.2. Demo Script Outline

- Brief intro: Elmentor Program and project goal
- Why React, why Copilot Agentic Mode, why Codespaces
- Walkthrough: Prompts, Copilot outputs, manual edits
- Show landing page, highlight challenges and solutions
- Invite questions, share repo/video/screenshots

---

## 8. Where to Store the Plan?

- **Store this plan in your GitHub repository root.**
    - File name: `Elmentor-Program-Landing-Page-MVP-Plan.md`
    - This ensures everyone (mentor, collaborators, reviewers) understands the stack, workflow, and structure.
- **Optionally keep a backup locally**, but the GitHub repo is the source of truth.

---

## 9. Checklist

- [ ] Repo created on GitHub
- [ ] Plan markdown added to repo
- [ ] Codespace opened and React app initialized
- [ ] Component-by-component development (with Copilot)
- [ ] Screenshots, prompts, and docs updated
- [ ] (Optional) Deployed to GitHub Pages
- [ ] Demo script and video prepared for presentation

---

**This plan is your living guide—update as you build and share progress. Good luck!**
