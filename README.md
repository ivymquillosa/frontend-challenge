## Build a TODO app
![image](https://github.com/user-attachments/assets/120c1421-2cc9-41db-8a8b-908603835a8e)

- Tailwind CSS
- React
- RecoilJS
- Typescript

## Requirement
- This should all be client side. Do not worry about server side
- Pay attention to code and folder structures
- We are open to any suggestion and want to test your thinking and problem solving skills
- The aesthetics and animation matter. Use your imagination
- Make it a complete application so that it is usable
- All features of the tech stack should be used
- Make it responsive
- Fork this repository and submit your implementation


## Useful Commands
- `pnpm install` - Install all dependencies for the monorepo.
- `pnpm build` - Build all packages
- `pnpm dev` - Run all packages locally and preview Todo app
- `pnpm preview-storybook` - Run all packages locally and preview with Storybook
- `pnpm lint` - Lint all packages
- `pnpm clean` - Clean up all `node_modules` and `dist` folders (runs each package's clean script)
{/* - `pnpm changeset` - Generate a changeset */}

## Apps & Packages

This Monorepo includes the following packages and applications:

- `apps/todo-app`: Vite-React of Todo List App
- `apps/storydocs`: Component documentation site with Storybook
- `common/classnames`: A utility function designed to handle and combine CSS class names
- `common/config-eslint`: Shared ESLint preset
- `common/config-tailwind`: Shared `tailwind.config.ts`s used throughout the Turborepo
- `common/config-typescript`: Shared `tsconfig.json`s used throughout the Turborepo
- `packages/handcrafted-components`: Built-from-scratch React components
- `packages/radix-components`: React components with [Radix UI](https://www.radix-ui.com/) library


Each package and app is 100% [TypeScript](https://www.typescriptlang.org/). Workspaces enables us to "hoist" dependencies that are shared between packages to the root `package.json`. This means smaller `node_modules` folders and a better local dev experience. To install a dependency for the entire monorepo, use the `-w` workspaces flag with `pnpm add`.

This example sets up your `.gitignore` to exclude all generated files, other folders like `node_modules` used to store your dependencies.


## Usage
After cloning, run `pnpm i` or `pnpm install` on your terminal.

#### Develop
To develop all apps and packages, run the following command `pnpm dev`. For filtering a package, run `pnpm dev --filter=package-name`

#### Build
To build all apps and packages, run the following command `pnpm build`. For filtering a package, run `pnpm build --filter=package-name`

#### Storybook
For running storybook in development mode, run `pnpm storybook`. For running the build preview stories, run `pnpm preview-storybook`.


## Adding/removing/upgrading packages
You can add, remove and upgrade packages from within the project's root folder using PNpm's built-in commands.

The overall syntax is `pnpm add <package> --filter=<workspace-name>`.

Example for adding/removing/upgrading an external package to our `@stack/handcrafted-components` package:

- Install: `pnpm add styled-components --filter=@stack/handcrafted-components`
- Remove: `pnpm remove styled-components --filter=@stack/handcrafted-components`
- Upgrade: `pnpm up styled-components --filter=@stack/handcrafted-components`

## Compilation

To make the core library code work across all browsers, we need to compile the raw TypeScript and React code to plain JavaScript. We can accomplish this with `tsup`, which uses `esbuild` to greatly improve performance.

Running `pnpm build` from the root of the Turborepo will run the `build` command defined in each package's `package.json` file. Turborepo runs each `build` in parallel and caches & hashes the output to speed up future builds.