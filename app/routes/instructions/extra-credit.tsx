import { Link, Outlet } from "@remix-run/react";
import InstructionLink from "~/components/instructions/InstructionLink";

const ExtraCredit = () => {
  return (
    <div className="flex lg:px-16">
      <div className="hidden w-1/4 lg:block">
        <h1 className="my-16 text-center text-2xl text-blue-500">
          Extra Credit Instructions
        </h1>
        <div className="flex flex-col">
          <InstructionLink to="your-first-component">
            First Component
          </InstructionLink>
          <InstructionLink to="styling">Simple Styles</InstructionLink>
          <InstructionLink to="custom-components">
            Custom Components
          </InstructionLink>
          <InstructionLink to="counter">Counter</InstructionLink>
          <InstructionLink to="handle-user-input">
            Handle User Input
          </InstructionLink>
          <InstructionLink to="todo-app">Todo App</InstructionLink>
        </div>
      </div>
      <div className="mx-auto w-3/4 lg:max-w-3xl">
        <Outlet />
      </div>
    </div>
  );
};

export default ExtraCredit;
