# Theme Switcher (React based)

![demo](assets/demo.gif)

## Features

- Toggle between pink and blue themes
- Minimal design

## How it works

The main logic happens because of the **changeTheme()** function which switches themes.

- **CSS** has predefined rules for each theme
- Function check if the `body` element already contain `blue` class,
  if yes, it removes `blue` class from the `body` to execute **CSS** rules for the **pink** theme.
  And add `blue` class in opposite case.
- Then it executes two state management functions:
  1. `setText` - changes the displayed text to match the current theme. Passed as a prop to `Button` component.
  2. `setColor` - changes the SVG heart icon color.

## Getting started

### Prerequisites

- **Node.js** (install from [https://nodejs.org/](https://nodejs.org/))

```bash
node --version #Should be v18+
```

- **npm** (installed with node)

```bash
npm --version #Should be v9+
```

### Installation

1. Clone or download the repo:

```bash
git clone https://github.com/Flint15/theme-change-react.git
cd theme-change-react
```

2. Install dependencies

```bash
npm install
```

3. Start the project

```bash
npm run dev
```

## Technologies

- React
- TypeScript
- Vite
