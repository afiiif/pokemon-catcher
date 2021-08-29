This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `/src/pages/index.js`. The page auto-updates as you edit the file.

## Script

- `yarn dev` - Run development server
- `yarn build` - Build the application for production
- `yarn start` - Start a Next.js production server (require `yarn build` first)
- `yarn lint` - Run [ESLint](https://eslint.org/)
- `yarn lint:fix` - Fix codes from ESLint errors

## Tech-Stack

- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Global State Management**: [React Context](https://github.com/pmndrs/zustand/)
- **Server State Management**: [React Query](https://react-query.tanstack.com/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Date & Time Utility**: [date-fns](https://date-fns.org/)

## File Structure

```raw
.
├── 📂 .vscode/               VSCode settings, snippets, and extension recommendation
├── 📂 public/                Public files (e.g. favicon)
├── 📂 src/
│   ├── 📂 api/               API-related utility functions
│   ├── ⚛️ components/
│   │   ├── 📂 abstract/      Components that didn't affect UI
│   │   ├── 📂 common/        Common components
│   │   ├── 📂 hoc/           Higher-Order Components
│   │   ├── 📂 layout/        Components which has specific location in a page and cannot just be placed anywhere (e.g. header, sidebar, footer)
│   │   ├── 📂 section/       Components which create a block/section/sub-section of a page, and has specific implementation
│   │   └── 📂 wrapper/       Components which has no UI, only for functionality (e.g. context-provider)
│   ├── 📂 graphql/           GraphQL template literal tags
│   ├── 📂 helpers/           Helpers functions
│   ├── ⚛️ hooks/             Custom hooks
│   ├── ⚛️ pages/             Next.js page components
│   ├── 📂 styles/
│   │   ├── 📂 components/    CSS files for components (e.g. button, table)
│   │   ├── 📂 vendors/       CSS files for modifying external component library's style (e.g. react-select, react-modal)
│   │   └── index.css         Contains @import statements to merge all CSS files
│   └── 📂 utils/             Utility functions
├── .eslintignore
├── .eslintrc.js              ESLint configuration
├── .gitattributes
├── .gitignore
├── next.config.js            Next.js configuration
├── package.json
├── postcss.config.js         PostCSS configuration
└── tailwind.config.js        Tailwind configuration
```
