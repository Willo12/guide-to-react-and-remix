import CustomComponentsChallengeCode from "~/challengeComponents/react/HandleUserInputChallengeCode";
import ExternalLink from "~/components/ExternalLink";
import { ExtraCreditLink } from "~/components/ExtraCreditLink";
import HintBox from "~/components/HintBox";
import ListItem from "~/components/ListItem";
import MonoType from "~/components/MonoType";
import Paragraph from "~/components/Paragraph";

const CustomComponents = () => {
  return (
    <main className="container mx-auto min-h-screen items-center justify-center">
      <div className="m-8 rounded-xl bg-sky-100 p-10 shadow-xl lg:flex lg:p-20 lg:pr-0">
        <div className="lg:w-1/2">
          <h1 className="mb-8 text-center text-5xl font-bold text-blue-500 lg:text-6xl">
            Custom Components
          </h1>
          <MonoType path="app/challenge-components/react/handle-user-input-challenge-code.tsx" />

          <div className="mt-4">
            <HintBox>
              <Paragraph className="mb-0 text-base text-emerald-700">
                <span className="font-bold">Hint</span>: Take a look at the text
                field example (second tab along) from the React docs page{" "}
                <ExternalLink to="https://beta.reactjs.org/reference/react/useState#examples-basic">
                  here
                </ExternalLink>
                .
              </Paragraph>
            </HintBox>
          </div>
        </div>
        <div className="flex justify-center py-4 lg:w-1/2">
          <div>
            <img
              className="rounded-lg"
              src="https://res.cloudinary.com/dptdx8zuv/image/upload/v1674377447/react-introduction/2023-01-22_08-48-42_1_uxd5wg.gif"
              alt="Finished Handle User Input Challenge"
            />
            <div className="flex justify-center py-4">
              <ExtraCreditLink to="/instructions/handle-user-input" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-10">
        <CustomComponentsChallengeCode />
      </div>
    </main>
  );
};

export default CustomComponents;
