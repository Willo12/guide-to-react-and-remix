import customComponentsPass from "~/assets/custom-components-pass.png";
import CustomComponentsChallengeCode from "~/challengeComponents/react/CustomComponentsChallengeCode";
import ExternalLink from "~/components/ExternalLink";
import { ExtraCreditLink } from "~/components/ExtraCreditLink";
import HintBox from "~/components/HintBox";
import MonoType from "~/components/MonoType";
import Paragraph from "~/components/Paragraph";
import Snippet from "~/components/Snippet";

const CustomComponents = () => {
  return (
    <main className="container mx-auto min-h-screen items-center justify-center">
      <div className="m-8 rounded-xl bg-sky-100 p-10 shadow-xl lg:flex lg:p-20 lg:pr-0">
        <div className="lg:w-1/2">
          <h1 className="mb-8 text-center text-5xl font-bold text-blue-500 lg:text-6xl">
            Custom Components
          </h1>
          <MonoType path="app/challengeComponents/react/customComponentsChallengeCode.tsx" />

          <div className="mt-4">
            <Paragraph className="text-base">
              The code in the file above is generating the different greetings
              opposite styled in green.
            </Paragraph>
            <Paragraph className="text-base">
              Open the file in VS Code and take a look. There is a{" "}
              <strong className="font-bold">lot</strong> of repetition!
            </Paragraph>
            <Paragraph className="text-base">
              It would be much better if we could write this code once, then
              only change the name of the person being passed into it.
            </Paragraph>
            <Paragraph className="text-base">
              This is exactly why we{" "}
              <ExternalLink to="https://beta.reactjs.org/learn/your-first-component#defining-a-component">
                define custom components
              </ExternalLink>{" "}
              in React. We can package up code into a function that takes in
              values as{" "}
              <ExternalLink to="https://beta.reactjs.org/learn/passing-props-to-a-component">
                props
              </ExternalLink>
              , and returns some JSX.
            </Paragraph>
            <Paragraph className="text-base">
              Can you create a custom component that produces the same output as
              that shown opposite, but means we can call a single component
              multiple times, like in the example below?
            </Paragraph>
            <div className="mb-4 flex items-center justify-center">
              <img src={customComponentsPass} alt="Finished code" />
            </div>
            <Paragraph className="text-base">
              Your custom component should accept a single prop -{" "}
              <Snippet>name</Snippet> - that is interpolated into the final
              output.
            </Paragraph>
            <HintBox>
              <Paragraph className="mb-0 text-base text-emerald-700">
                <span className="font-bold">Hint</span>: Watch the Scrimba
                tutorial{" "}
                <ExternalLink to="https://scrimba.com/learn/learnreact/custom-components-co31545c6bee41d3b65bed126">
                  here
                </ExternalLink>{" "}
                to learn how to create custom components.
              </Paragraph>
            </HintBox>
            <div className="flex justify-center pt-8">
              <ExtraCreditLink to="/instructions/custom-components" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center p-8 lg:w-1/2">
          <div className="flex items-center justify-center border-4 border-gray-400 bg-white p-12">
            <div>
              <CustomComponentsChallengeCode />
            </div>
          </div>
        </div>
      </div>
      <div className="p-10"></div>
    </main>
  );
};

export default CustomComponents;
