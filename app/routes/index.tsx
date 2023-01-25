import { Link } from "@remix-run/react";
import ChallengeLink from "~/components/homepage/ChallengeLink";
import { FaCalculator, FaKeyboard, FaCheckSquare } from "react-icons/fa";

import { useOptionalUser } from "~/utils";

export default function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="mb-12">
        <h1 className="font-serif text-4xl text-4xl text-slate-700">
          Select a Challenge
        </h1>
      </div>
      <div className="flex w-full">
        <ChallengeLink to="/counter">
          <div className="flex flex-col items-center justify-center">
            <FaCalculator className="my-8" color="#ffffff" size="12rem" />
            <h2 className="text-center text-2xl text-blue-100">Counter</h2>
          </div>
        </ChallengeLink>

        <ChallengeLink to="/handle-user-input">
          <div className="flex flex-col items-center justify-center">
            <FaKeyboard className="my-8" color="#ffffff" size="12rem" />
            <h2 className="text-center text-2xl text-blue-100">
              Handle User Input
            </h2>
          </div>
        </ChallengeLink>

        <ChallengeLink to="/todo-app">
          <div className="flex flex-col items-center justify-center">
            <FaCheckSquare className="my-8" color="#ffffff" size="12rem" />
            <h2 className="text-center text-2xl text-blue-100">ToDo App</h2>
          </div>
        </ChallengeLink>
      </div>
    </main>
  );
}
