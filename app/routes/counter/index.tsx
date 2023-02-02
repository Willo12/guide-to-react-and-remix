import CounterChallengeCode from "~/challengeComponents/react/CounterChallengeCode";
import ExternalLink from "~/components/ExternalLink";
import { ExtraCreditLink } from "~/components/ExtraCreditLink";
import HintBox from "~/components/HintBox";
import MonoType from "~/components/MonoType";
import Paragraph from "~/components/Paragraph";

const Counter = () => {
  return (
    <main className="container mx-auto min-h-screen items-center justify-center lg:flex">
      <div className="m-8 rounded-xl bg-sky-100 p-20 shadow-xl lg:w-1/2">
        <h1 className="mb-8 text-center text-6xl font-bold text-blue-500">
          Counter
        </h1>
        <MonoType path="app/challengeComponents/CounterChallengeCode.tsx" />
        <Paragraph>
          Can you update the code in the file above so that clicking the 'Add'
          button makes the number increment by one every time?
        </Paragraph>
        <div className="mt-4">
          <HintBox>
            <Paragraph className="mb-0 text-base text-emerald-700">
              <span className="font-bold">Hint</span>: you can use the{" "}
              <ExternalLink to="https://beta.reactjs.org/reference/react/useState#reference">
                useState
              </ExternalLink>{" "}
              hook to solve this. Look at a usage example{" "}
              <ExternalLink to="https://beta.reactjs.org/reference/react/useState#usage">
                here
              </ExternalLink>
              .
            </Paragraph>
            <Paragraph className="mb-0 text-base text-emerald-700">
              If you are REALLY stuck, take a look at a counter example from the
              React docs page{" "}
              <ExternalLink to="https://beta.reactjs.org/reference/react/useState#examples-basic">
                here
              </ExternalLink>
              .
            </Paragraph>
          </HintBox>
          <div className="flex justify-center py-8">
            <ExtraCreditLink to="/instructions/extra-credit/counter" />
          </div>
        </div>
      </div>
      <div className="lg:w-1/2">
        <CounterChallengeCode />
      </div>
    </main>
  );
};

export default Counter;
