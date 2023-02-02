import { Link, Outlet } from "@remix-run/react";

const ExtraCredit = () => {
  return (
    <div>
      <h1 className="my-16 text-center text-2xl text-blue-500">Instructions</h1>
      <div className="flex items-center justify-center">
        <Link
          className="m-4 bg-blue-400 p-8 uppercase tracking-wide text-white hover:bg-blue-600"
          to="counter"
        >
          Counter
        </Link>
        <Link
          className="m-4 bg-blue-400 p-8 uppercase tracking-wide text-white hover:bg-blue-600"
          to="handle-user-input"
        >
          Handle User Input
        </Link>
        <Link
          className="m-4 bg-blue-400 p-8 uppercase tracking-wide text-white hover:bg-blue-600"
          to="todo-app"
        >
          Todo App
        </Link>
      </div>
      <div className="mx-auto lg:max-w-3xl">
        <Outlet />
      </div>
    </div>
  );
};

export default ExtraCredit;
