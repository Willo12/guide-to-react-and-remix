import ChallengeLink from "~/components/homepage/ChallengeLink";
import { FaCalculator, FaKeyboard, FaCheckSquare } from "react-icons/fa";
import { GiPaintBrush, GiToolbox, GiCalculator } from "react-icons/gi";

export default function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="mb-0 mt-16">
        <h1 className="text-4xl font-bold uppercase tracking-wide text-red-900">
          Select a Challenge
        </h1>
      </div>
      <div className="w-full p-8 lg:flex lg:max-w-5xl lg:flex-wrap">
        <div className="p-8 lg:w-1/2">
          <ChallengeLink to="/styling">
            <div className="flex flex-col items-center justify-center">
              <GiPaintBrush
                className="my-8 fill-orange-100 group-hover:fill-red-300"
                size="12rem"
              />
              <h2 className="text-center text-2xl font-bold uppercase tracking-wide text-red-900 transition-all group-hover:text-red-300">
                Simple Styling
              </h2>
            </div>
          </ChallengeLink>
        </div>

        <div className="p-8 lg:w-1/2">
          <ChallengeLink to="/custom-components">
            <div className="flex flex-col items-center justify-center">
              <GiToolbox
                className="my-8 fill-orange-100 group-hover:fill-red-300"
                size="12rem"
              />
              <h2 className="text-center text-2xl font-bold uppercase tracking-wide text-red-900 transition-all group-hover:text-red-300">
                Custom Components
              </h2>
            </div>
          </ChallengeLink>
        </div>

        <div className="p-8 lg:w-1/2">
          <ChallengeLink to="/counter">
            <div className="flex flex-col items-center justify-center">
              <GiCalculator
                className="my-8 fill-orange-100 group-hover:fill-red-300"
                size="12rem"
              />
              <h2 className="text-center text-2xl font-bold uppercase tracking-wide text-red-900 transition-all group-hover:text-red-300">
                Counter
              </h2>
            </div>
          </ChallengeLink>
        </div>

        <div className="p-8 lg:w-1/2">
          <ChallengeLink to="/handle-user-input">
            <div className="flex flex-col items-center justify-center">
              <FaKeyboard
                className="my-8 fill-orange-100 group-hover:fill-red-300"
                size="12rem"
              />
              <h2 className="text-center text-2xl font-bold uppercase tracking-wide text-red-900 transition-all group-hover:text-red-300">
                Handle User Input
              </h2>
            </div>
          </ChallengeLink>
        </div>

        <div className="p-8 lg:w-1/2">
          <ChallengeLink to="/todo-app">
            <div className="flex flex-col items-center justify-center">
              <FaCheckSquare
                className="my-8 fill-orange-100 group-hover:fill-red-300"
                size="12rem"
              />
              <h2 className="text-center text-2xl font-bold uppercase tracking-wide text-red-900 transition-all group-hover:text-red-300">
                ToDo App
              </h2>
            </div>
          </ChallengeLink>
        </div>
      </div>
    </main>
  );
}
