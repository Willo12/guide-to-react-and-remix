import { FaArrowAltCircleRight } from "react-icons/fa";
import {
  allMembershipsArray,
  allMembershipsLoopSnippet,
  allMembershipsSeedFinal,
} from "~/assets/codeSnippets/addingAModel/seedingDataSnippets";
import CodeBlock from "~/components/CodeBlock";
import Heading from "~/components/Heading";
import InlineMonoType from "~/components/InlineMonoType";
import InternalStyledLink from "~/components/InternalStyledLink";
import Paragraph from "~/components/Paragraph";

const AddAllMembershipsAnswerShort = () => {
  return (
    <>
      <Heading level="h2">Add All Memberships Solution - Short</Heading>

      <Paragraph darkMode>
        A much shorter way would be to firstly collect all the membership levels
        up into a single array:
      </Paragraph>

      <div className="my-6">
        <CodeBlock
          showLineNumbers
          filePath="prisma/seed.ts"
          snippet={allMembershipsArray}
        />
      </div>

      <Paragraph darkMode>
        Next, we can simply use a{" "}
        <InlineMonoType darkMode>forEach</InlineMonoType> loop to process each
        membership level sequentially:
      </Paragraph>

      <div className="my-6">
        <CodeBlock
          showLineNumbers
          filePath="prisma/seed.ts"
          snippet={allMembershipsLoopSnippet}
        />
      </div>

      <Paragraph darkMode>
        So, altogether, the seed will look like the snippet below. Remember the{" "}
        <InlineMonoType darkMode>// [...]</InlineMonoType> comment on line 2
        below represents code that is still there in the{" "}
        <InlineMonoType darkMode>seed()</InlineMonoType> function, but left out
        of the snippet for ease of reading:
      </Paragraph>

      <CodeBlock
        showLineNumbers
        filePath="prisma/seed.ts"
        snippet={allMembershipsSeedFinal}
      />

      <div className="mt-12 mb-6">
        <InternalStyledLink
          to="/remix/prisma/adding-a-prisma-model/associate-users-with-memberships"
          className="group flex items-center justify-end text-2xl"
          darkMode
        >
          Next: Associate users with memberships{" "}
          <FaArrowAltCircleRight className="ml-4 fill-blue-500 group-hover:fill-blue-400" />
        </InternalStyledLink>
      </div>
    </>
  );
};

export default AddAllMembershipsAnswerShort;
