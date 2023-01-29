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

Each page of the project contains a different challenge:

1. Counter
2. Handling form input
3. ToDo app

## Getting Started with Create React App and Tailwind CSS

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It also comes with a basic [Tailwind CSS](https://tailwindcss.com/) installation.

## The challenges

### 1. Counter

Can you update the component code so that clicking the 'Add' button makes the number on screen increment by one every time?

**HINT**: you can use the (useState)[https://beta.reactjs.org/reference/react/useState#reference] hook to solve this. Look at a usage example (here)[https://beta.reactjs.org/reference/react/useState#usage].

If you are REALLY stuck, take a look at a counter example from the React docs page (here)[https://beta.reactjs.org/reference/react/useState#examples-basic].

### 2. Handling User Input

1. Update the code so that when the user types into the input field, their writing will replace the three question marks in the green box below.

2. When the user clicks the 'Clear Text' button, the text in the input box and the 'You typed:' area should clear.

So the finished behaviour will look like this...

![Finished input handling challenge](https://res.cloudinary.com/dptdx8zuv/image/upload/v1674377447/react-introduction/2023-01-22_08-48-42_1_uxd5wg.gif)

**HINT**: Take a look at the text field example (second tab along) from the React docs page (here)[https://beta.reactjs.org/reference/react/useState#examples-basic].

#### **EXTRA CREDIT 1 (optional)**

If the input box is empty, can you give it a red background-colour and print a message beneath reading 'This field is required', like that shown below?

![Extra credit 1 finished example](https://res.cloudinary.com/dptdx8zuv/image/upload/v1674378802/react-introduction/2023-01-22_09-11-57_1_b78mv3.gif)

#### **EXTRA CREDIT 2 (optional)**

Hmmm. Now, the input field is already styled red with a warning when the component first renders and before the user has even typed anything.

Can you use the [usePrevious custom hook](https://usehooks.com/usePrevious/) to only make the warning styles show _AFTER_ the user has typed into the input field and then cleared it? See the example below:

![Extra credit 2 finished example](https://res.cloudinary.com/dptdx8zuv/image/upload/v1674377447/react-introduction/2023-01-22_08-48-42_1_uxd5wg.gif)

### 3. ToDo List Challenge

This will bring all of your knowledge together. Create a ToDo list app that will allow the user to:

1. Create a ToDo
2. Delete a ToDo
3. Extension (optional): Edit a Todo

Take a look at the example below to get an idea of what it might look like, but don't feel like you have to copy it exactly. Make it your own!

![Finish ToDo app example](https://res.cloudinary.com/dptdx8zuv/image/upload/v1674474087/react-introduction/2023-01-23_11-37-47_1_n7lt3y.gif)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://beta.reactjs.org/).

For Tailwind, visit their [documentation page](https://tailwindcss.com/docs/installation).

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
