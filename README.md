# roadmap-story-feature

A Story feature similar to those found in popular social media platforms like Instagram and WhatsApp. The goal is to allow a user to post short, ephemeral content that disappears after 24 hours. As this is a Frontend project this is going to be client-side only.

This is an implementation of the project requirements for roadmap.sh - [https://roadmap.sh/projects/stories-feature](https://roadmap.sh/projects/stories-feature)

**Live Demo**: [Insert Link Here]  

---

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Helpful Resources](#helpful-resources)

---

## Features

- List of stories at the top and a **plus** button
- Clicking the plus button will allow user to upload an image which will be converted to base64 and stored in local storage.
- The image will be displayed in the list of stories. The image will be removed after 24 hours.
- User should optionally be able to swipe through the stories.

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js >= 20
- npm >= 10

### Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/unknwnlistener/roadmap-story-feature.git
   ```

2. Navigate to the project directory:

   ```bash
   cd roadmap-story-feature
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

---

## Usage

1. Start the development server:

   ```bash
   npm start
   ```

2. Open `http://localhost:3000` in your browser to view the application.

---

## Technologies Used

- React (version x.x.x)

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

## Helpful Resources

- Project setup guide with Vite. [https://vite.dev/guide/](https://vite.dev/guide/)

---

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
