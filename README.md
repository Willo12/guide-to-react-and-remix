# Getting Started with React and Remix

## Quickstart

### 1. Clone the project to your machine with [Github Desktop](https://desktop.github.com/) or the Git command line.

> ⚠ Be sure to clone this somewhere _outside of OneDrive_, or any other area on your machine that will sync to the cloud.

### 2. Initialise the project with the commands below.

> Note that these two commands will only need running the first time after cloning the responsitory.

- Install dependencies

```shell
npm install
```

- Initial setup:

```shell
npm run setup
```

### 3. Run the server

- Start the dev server

```shell
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

The database seed script creates a new user with some data you can use to get started:

Email: `rachel@remix.run`
Password: `racheliscool`

## Project aims

This project contains a number of activities and exercises designed to help you get up and running with React and Remix. Remix is a framework that is currently built on top of React, but has a lot of functionality unique to it alone.

The project itself is built from the Remix Indie stack, which comes pre-configured with a number of packages that make starting an app easier and quicker to get off the ground. See "What's in the Stack" below for further details of these.

## Beginner React Challenges

Each page of the project contains a different challenge. Currently, these are:

### Static components

1. Your First Compoenent
2. Simple Styling
3. Custom Components

### Handling State

4. Counter
5. Handling form input
6. ToDo app

## Learn More

### React

1. Check out the [React documentation](https://beta.reactjs.org/)
2. Excellent free course by Kent C. Dodd over on [Egghead.io](https://egghead.io/courses/the-beginner-s-guide-to-react)
3. An equally excellent free course on [Scrimba](https://scrimba.com/learn/learnreact)

### Tailwind

1. Visit the Tailwind [documentation page](https://tailwindcss.com/docs/installation)
2. Take the free Tailwind course on [Scrimba](https://scrimba.com/playlist/pdq3QsM)

### Remix

1. Complete the quickstart guide on the [Remix website](https://remix.run/docs/en/v1/tutorials/blog)
2. Work through Kent C. Dodd's accompanying free [Egghead.io](https://rmx.as/egghead-course) course for the quickstart guide above
3. For a deeper dive into Remix, work through their longer [Remix Jokes App](https://remix.run/docs/en/v1/tutorials/jokes) tutorial
4. Watch the accompanying screencast to the deep dive tutorial [here](https://www.youtube.com/watch?v=hsIWJpuxNj0)

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Type Checking

This project uses TypeScript. It's recommended to get TypeScript set up for your editor to get a really great in-editor experience with type checking and auto-complete. To run type checking across the whole project, run `npm run typecheck`.

### Linting

This project uses ESLint for linting. That is configured in `.eslintrc.js`.

### Formatting

We use [Prettier](https://prettier.io/) for auto-formatting in this project. It's recommended to install an editor plugin (like the [VSCode Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)) to get auto-formatting on save. There's also a `npm run format` script you can run to format all files in the project.
