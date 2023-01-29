# Getting Started with React and Remix

## Quickstart

### 1. Clone the project to your machine with the Git command line or an application like Github Desktop.

> ⚠ Be sure to clone this somewhere _outside of OneDrive_, or any other area on your machine that will sync to the cloud.

### 2. Initialise the project with the commands below.

> Note that these two commands will only need running the first time after cloning the responsitory.

- Initialise the project:

```shell
npx remix init
```

- Initial setup:

```shell
npm run setup
```

### 3. Run the server

````
 - Start the dev server
```shell
npm run setup
````

This starts your app in development mode, rebuilding assets on file changes.

The database seed script creates a new user with some data you can use to get started:

Email: `rachel@remix.run`
Password: `racheliscool`

## Project aims

This project contains a number of activities and exercises designed to help you get up and running with React and Remix. Remix is a framework that is currently built on top of React, but has a lot of functionality unique to it alone.

The project itself is built from the Remix Indie stack, which comes pre-configured with a number of packages (see "What's in the Stack" below for further details) that make starting an app easier and quicker to get off the ground.

Learn more about [Remix Stacks](https://remix.run/stacks).

## What's in the stack

- [Fly app deployment](https://fly.io) with [Docker](https://www.docker.com/)
- Production-ready [SQLite Database](https://sqlite.org)
- Healthcheck endpoint for [Fly backups region fallbacks](https://fly.io/docs/reference/configuration/#services-http_checks)
- [GitHub Actions](https://github.com/features/actions) for deploy on merge to production and staging environments
- Email/Password Authentication with [cookie-based sessions](https://remix.run/docs/en/v1/api/remix#createcookiesessionstorage)
- Database ORM with [Prisma](https://prisma.io)
- Styling with [Tailwind](https://tailwindcss.com/)
- End-to-end testing with [Cypress](https://cypress.io)
- Local third party request mocking with [MSW](https://mswjs.io)
- Unit testing with [Vitest](https://vitest.dev) and [Testing Library](https://testing-library.com)
- Code formatting with [Prettier](https://prettier.io)
- Linting with [ESLint](https://eslint.org)
- Static Types with [TypeScript](https://typescriptlang.org)

### Type Checking

This project uses TypeScript. It's recommended to get TypeScript set up for your editor to get a really great in-editor experience with type checking and auto-complete. To run type checking across the whole project, run `npm run typecheck`.

### Linting

This project uses ESLint for linting. That is configured in `.eslintrc.js`.

### Formatting

We use [Prettier](https://prettier.io/) for auto-formatting in this project. It's recommended to install an editor plugin (like the [VSCode Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)) to get auto-formatting on save. There's also a `npm run format` script you can run to format all files in the project.
