import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

export default function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex">
        <Link to="/counter">Counter</Link>
        <Link to="/track-user-input">Track User Input</Link>
        <Link to="/todo-app">ToDo App</Link>
      </div>
    </main>
  );
}
