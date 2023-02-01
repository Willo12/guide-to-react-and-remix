import stylingFinished from "~/assets/styling-pass.png";
import StylingChallengeCode from "~/challengeComponents/react/StylingChallengeCode";
import ExternalLink from "~/components/ExternalLink";
import { ExtraCreditLink } from "~/components/ExtraCreditLink";
import HintBox from "~/components/HintBox";
import ListItem from "~/components/ListItem";
import MonoType from "~/components/MonoType";
import Paragraph from "~/components/Paragraph";

const Styling = () => {
  return (
    <main className="container mx-auto min-h-screen items-center justify-center">
      <div className="m-8 rounded-xl bg-sky-100 p-10 shadow-xl lg:flex lg:p-20 lg:pr-0">
        <div className="lg:w-1/2">
          <h1 className="mb-8 text-center text-5xl font-bold text-blue-500 lg:text-6xl">
            Styling
          </h1>
          <MonoType path="app/challengeComponents/react/StylingChallengeCode.tsx" />
          <Paragraph>
            Update the code in the file above so that the words 'First',
            'Second', 'Third' and 'Fourth', shown opposite, are each placed into
            boxes with the following styles:
            <div className="flex">
              <ul className="my-8 w-1/2">
                <ListItem>Each box should be a light shade of green</ListItem>
                <ListItem>
                  Every box should have a dark green border and dark green text
                </ListItem>
                <ListItem>Every box should be wider than the last</ListItem>
                <ListItem>Every box should have a height of 64px</ListItem>
                <ListItem>
                  There should be a gap (margin) of 8px around every box
                </ListItem>
              </ul>
              <div className="flex  w-1/2 items-center justify-center">
                <img
                  className="h-64 w-auto border-4 border-gray-300"
                  src={stylingFinished}
                  alt="Finished Challenge"
                />
              </div>
            </div>
            You should only use Tailwind classes to acheive this.
          </Paragraph>
          <div className="mt-4">
            <HintBox>
              <div className="mb-4">
                <Paragraph className="mb-0 text-base text-emerald-700">
                  <span className="font-bold">Hint</span>: Take a look at this
                  page{" "}
                  <ExternalLink to="https://beta.reactjs.org/reference/react-dom/components/common#applying-css-styles">
                    here
                  </ExternalLink>{" "}
                  to learn how to apply classes in React.
                </Paragraph>
              </div>
              <Paragraph className="mb-0 text-base text-emerald-700">
                For help with Tailwind class names, use the{" "}
                <ExternalLink to="https://nerdcave.com/tailwind-cheat-sheet">
                  online cheatsheet
                </ExternalLink>
              </Paragraph>
            </HintBox>
          </div>
          <div className="flex justify-center p-8">
            <ExtraCreditLink to="/instructions/styling" />
          </div>
        </div>
        <div className="flex w-full items-center justify-center p-10">
          <div className="border-4 border-gray-300 bg-white p-10">
            <StylingChallengeCode />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Styling;
