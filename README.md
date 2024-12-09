# Test Assignment based on NextJS, JS and SCSS
A project using Next.js to demonstrate knowledge in React, SCSS, and component-based development.

## Prerequisites
- [Node.js](https://nodejs.org/en/) installed (latest LTS recommended)

## How to Run
0. PNPM is recommended
While the project can be bundled using NPM, PNPM is preferred for its speed and efficiency
[pnpm](https://pnpm.io/installation) provides ways to install it, I went with basic `npm i -g`

1. Install dependencies
```
pnpm i
```
2. Build and run the project in development mode:
```
pnpm dev
```
3. Build the project in production mode:
```
pnpm build
```
4. Run the project in production mode:
```
pnpm start
```

### Trade-offs & design decisions
- First time using NextJS, so that's why things might be awkward or unconventional
- Went with axios instead of basic fetch due to convenience and not getting in the documentation to the part about the fetch
- BEM is used, because it's great and convenient
- Plain JS is used, because too much to do already
- At the time of the writing no clear way on how to cleanly pass props to subleafs in the tree
- Same goes for other things like no auto scrolling to first rendered element - NextJS by default doesn't support window object because SSR and no **correct** info is present on how to solve it
- Wanted to go with MobX, but since NextJS is already overengineered, the working prototypes for implementing Mobx make it messier
- global-error is used due to the size of the project - more files/leaves would warrant separate error handlers obviously
- couldn't set up next/image properly, it refused to load external URL no matter how much I modified next.config.js
