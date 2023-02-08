import { useState } from "react";
import { allMembershipsLong } from "~/assets/codeSnippets/addingAModel/seedingDataSnippets";
import ChallengeBlock from "~/components/ChallengeBlock";
import CodeBlock from "~/components/CodeBlock";
import Heading from "~/components/Heading";
import InlineMonoType from "~/components/InlineMonoType";
import Paragraph from "~/components/Paragraph";
import RevealAnswerButton from "~/components/RevealAnswerButton";
import AddAllMembershipsAnswerShort from "./AddAllMembershipsAnswerShort";

const AddAllMembershipsAnswerLong = () => {
  const [isShowingAnswer, setIsShowingAnswer] = useState(false);

  const handleShowAllMembershipsLongAnswer = () => {
    setIsShowingAnswer(true);
  };

  return (
    <>
      <Heading level="h2">Add All Memberships Solution - Long!</Heading>
      <Paragraph darkMode>
        The (very!) long way of doing this might look something like this:
      </Paragraph>
      <div className="my-6">
        <CodeBlock
          showLineNumbers
          filePath="prisma/seed.ts"
          snippet={allMembershipsLong}
        />
      </div>
      <Paragraph darkMode>Phew! 😅</Paragraph>
      <Paragraph darkMode>
        This code works, but surely there's a better way?!
      </Paragraph>
      <ChallengeBlock>
        <Paragraph darkMode className="text-neutral-50">
          Can you think of a shorter way to do the same thing?
        </Paragraph>
        <Paragraph darkMode className="text-neutral-50">
          <span className="font-bold">HINT</span>: create an array from the code
          you already have, and make use of a{" "}
          <a href="https://www.freecodecamp.org/news/javascript-foreach-how-to-loop-through-an-array-in-js/">
            <InlineMonoType className="bg-neutral-900 bg-opacity-50" darkMode>
              forEach
            </InlineMonoType>
          </a>{" "}
          loop on it.
        </Paragraph>
        <Paragraph darkMode className="text-neutral-50">
          But which code will you collect into an array? 🤔
        </Paragraph>
      </ChallengeBlock>

      {!isShowingAnswer ? (
        <RevealAnswerButton onClick={handleShowAllMembershipsLongAnswer} />
      ) : null}

      {isShowingAnswer ? <AddAllMembershipsAnswerShort /> : null}
    </>
  );
};

export default AddAllMembershipsAnswerLong;
