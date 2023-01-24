import ExternalLink from "~/components/ExternalLink";
import ListItem from "~/components/ListItem";
import Paragraph from "~/components/Paragraph";

const TodoApp = () => {
  return (
    <main className="mx-auto flex min-h-screen items-center justify-center">
      <div className="m-4 w-256 rounded-xl bg-sky-100 p-20 shadow-xl">
        <h1 className="mb-8 text-center text-6xl font-bold text-blue-500">
          ToDo App
        </h1>
        <Paragraph>
          Your task is to replace this content (found in{" "}
          <code className="text-blue-600">app/routes/todo-app/index.tsx</code>)
          with code that will build a ToDo app. It should allow the user to:
        </Paragraph>
        <ol className="my-4 ml-16">
          <ListItem>Create a ToDo</ListItem>
          <ListItem>Delete ToDos</ListItem>
          <ListItem>OPTIONAL EXTRA CREDIT: Edit ToDos</ListItem>
        </ol>
        <Paragraph>
          The GIF below shows an example of how the finished product{" "}
          <em>might</em> look and behave, but feel free to put your own spin on
          the solution.
        </Paragraph>
        <div className="flex justify-center">
          <img
            className="max-w-96 mb-4 rounded-lg"
            src="https://res.cloudinary.com/dptdx8zuv/image/upload/v1674474087/react-introduction/2023-01-23_11-37-47_1_n7lt3y.gif"
            alt="Finished ToDo app example"
          />
        </div>
        <Paragraph>
          You should also ensure the app is styled professionally using Tailwind
          CSS.
        </Paragraph>
        <Paragraph>
          Be sure to use an online Tailwind CSS cheatsheet like{" "}
          <ExternalLink to="https://nerdcave.com/tailwind-cheat-sheet">
            this one
          </ExternalLink>{" "}
          to help you.
        </Paragraph>
      </div>
    </main>
  );
};

export default TodoApp;
