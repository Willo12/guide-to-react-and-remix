import yourFirstComponentPass from "~/assets/your-first-component-pass.png";
import YourFirstComponentCodeChallenge from "~/challengeComponents/react/YourFirstComponentCodeChallenge";
import ExternalLink from "~/components/ExternalLink";
import { ExtraCreditLink } from "~/components/ExtraCreditLink";
import HintBox from "~/components/HintBox";
import MonoType from "~/components/MonoType";
import Paragraph from "~/components/Paragraph";
import Snippet from "~/components/Snippet";

const YourFirstComponent = () => {
  return (
    <main className="container mx-auto min-h-screen items-center justify-center">
      <div className="m-8 rounded-xl bg-sky-100 p-10 shadow-xl lg:flex lg:p-20 lg:pr-0">
        <div className="lg:w-2/3">
          <h1 className="mb-8 text-center text-5xl font-bold text-blue-500 lg:text-6xl">
            Your First Component
          </h1>
          <MonoType path="app/challengeComponents/react/YourFirstComponentChallengeCode.tsx" />
          <Paragraph>
            Update the code in the file above so that it prints out the words
            'Hello World' using a single paragraph tag.
          </Paragraph>
          <Paragraph>
            You will know it has worked when the words appear in the empty white
            box opposite.
          </Paragraph>
          <Paragraph>
            The paragraph tag should be nested in between the{" "}
            <Snippet>div</Snippet> tags that are already there.
          </Paragraph>
          <div className="p-4">
            <div className="flex flex-col items-center">
              <img
                className="max-w-xs shadow-md"
                src={yourFirstComponentPass}
                alt="Your first component pass"
              />
              <p className="mt-2 text-center text-sm italic text-gray-500">
                A graphic of the solution
              </p>
            </div>
          </div>
          <div className="mt-4">
            <HintBox>
              <Paragraph className="mb-0 text-base text-emerald-700">
                <span className="font-bold">Hint</span>: Take a look at this
                page{" "}
                <ExternalLink to="https://beta.reactjs.org/learn#components">
                  here
                </ExternalLink>{" "}
                to learn how to create and nest new components in React.
              </Paragraph>
            </HintBox>
          </div>
          <div className="flex justify-center p-8">
            <ExtraCreditLink to="/instructions/your-first-component" />
          </div>
        </div>
        <div className="flex w-full items-center justify-center p-10 lg:w-1/3">
          <div className="border-4 border-gray-300 bg-white p-10">
            <YourFirstComponentCodeChallenge />
          </div>
        </div>
      </div>
    </main>
  );
};

export default YourFirstComponent;
