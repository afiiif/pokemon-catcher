# PokΓ©mon Catcher

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

<img width="100%" style="border: 1px solid #ddd;" src="https://pokemoncatcher.vercel.app/_next/image?url=%2Fimages%2Fpokemon-catcher-animation.gif&w=3840&q=70">

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
βββ π .vscode/               VSCode settings, snippets, and extension recommendation
βββ π public/                Public files (e.g. favicon)
βββ π src/
β   βββ π api/               API-related utility functions
β   βββ βοΈ components/
β   β   βββ π abstract/      Components that didn't affect UI
β   β   βββ π common/        Common components
β   β   βββ π hoc/           Higher-Order Components
β   β   βββ π layout/        Components which has specific location in a page and cannot just be placed anywhere (e.g. header, sidebar, footer)
β   β   βββ π section/       Components which create a block/section/sub-section of a page, and has specific implementation
β   β   βββ π wrapper/       Components which has no UI, only for functionality (e.g. context-provider)
β   βββ π graphql/           GraphQL template literal tags
β   βββ π helpers/           Helpers functions
β   βββ βοΈ hooks/             Custom hooks
β   βββ βοΈ pages/             Next.js page components
β   βββ π styles/
β   β   βββ π components/    CSS files for components (e.g. button, table)
β   β   βββ π vendors/       CSS files for modifying external component library's style (e.g. react-select, react-modal)
β   β   βββ index.css         Contains @import statements to merge all CSS files
β   βββ π utils/             Utility functions
βββ .eslintignore
βββ .eslintrc.js              ESLint configuration
βββ .gitattributes
βββ .gitignore
βββ next.config.js            Next.js configuration
βββ package.json
βββ postcss.config.js         PostCSS configuration
βββ tailwind.config.js        Tailwind configuration
```
