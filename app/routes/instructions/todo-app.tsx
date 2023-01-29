import { marked } from "marked";

const html = marked(`
# ToDo App Challenge

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
`);

const Counter = () => {
  return (
    <div className="container prose m-8 mx-auto sm:m-8 sm:mt-8 lg:mt-16">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default Counter;
