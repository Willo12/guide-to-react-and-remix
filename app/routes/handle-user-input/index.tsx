import { Link } from "@remix-run/react";
import HandleUserInputChallengeCode from "~/challenge-components/react/handle-user-input-challenge-code";
import ExternalLink from "~/components/ExternalLink";
import HintBox from "~/components/HintBox";
import ListItem from "~/components/ListItem";
import MonoType from "~/components/MonoType";
import Paragraph from "~/components/Paragraph";

const HandleUserInput = () => {
  return (
    <div className="container mx-auto min-h-screen items-center justify-center lg:flex">
      <div className="m-8 rounded-xl bg-sky-100 p-20 shadow-xl lg:w-1/2">
        <h1 className="mb-8 text-center text-6xl font-bold text-blue-500">
          Handling User Input
        </h1>
        <MonoType path="app/challenge-components/react/handle-user-input-challenge-code.tsx" />
        <ol>
          <ListItem className="text-gray-600">
            Update the code so that when the user types into the input field,
            their writing replaces the three question marks in the green box
            below.
          </ListItem>
          <ListItem className="text-gray-600">
            When the user clicks the 'Clear Text' button, the text in the input
            box and the 'You typed:' area should clear.
          </ListItem>
        </ol>
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
        <div className="p-4">
          <img
            src="https://res.cloudinary.com/dptdx8zuv/image/upload/v1674377447/react-introduction/2023-01-22_08-48-42_1_uxd5wg.gif"
            alt="Finished Handle User Input Challenge"
          />
        </div>
        <div className="flex justify-center py-8">
          <div>
            <Link
              type="button"
              className="rounded-lg bg-green-300 px-8 py-6 text-sm font-bold uppercase text-green-800 hover:bg-green-500"
              to="/instructions/handle-user-input"
            >
              🚀 Extra Credit
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2">
        <HandleUserInputChallengeCode />
      </div>
    </div>
  );
};

export default HandleUserInput;
