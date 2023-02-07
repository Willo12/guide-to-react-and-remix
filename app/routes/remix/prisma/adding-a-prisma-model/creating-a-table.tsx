import allModelsScreen from "~/assets/prisma-studio-all-models.png";
import tableViewScreen from "~/assets/prisma-studio-table-view.png";
import CodeBlock from "~/components/CodeBlock";
import Heading from "~/components/Heading";
import InlineMonoType from "~/components/InlineMonoType";
import InternalStyledLink from "~/components/InternalStyledLink";
import Paragraph from "~/components/Paragraph";
import Screenshot from "~/components/Screenshot";

const newMemberShipSnippet = `model Membership {
  id          String @id @default(cuid())
  level       String
  description String
  price       String

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade, onUpdate: Cascade)
  userId String @unique
}`;

const CreatingATable = () => {
  return (
    <div>
      <Heading level="h2" className={`mt-12 text-left text-2xl font-bold`}>
        Creating a table
      </Heading>
      <Paragraph darkMode>
        To add a new table to the database called{" "}
        <InlineMonoType darkMode>Membership</InlineMonoType>, add the code below
        to the end of{" "}
        <InlineMonoType darkMode>prisma/schema.prisma</InlineMonoType>:
      </Paragraph>
      <div className="my-6">
        <CodeBlock
          filePath="prisma/schema.prisma"
          language="prisma"
          showLineNumbers={true}
          snippet={newMemberShipSnippet}
        />
      </div>
      <Paragraph darkMode>
        Once pasted into your schema file, run the following command in your
        terminal push your changes to the database:
      </Paragraph>
      <div className="my-6">
        <CodeBlock language="shell" snippet="npx prisma db push" />
      </div>
      <Paragraph darkMode>
        You can see any changes made to your database by running the following
        terminal command:
      </Paragraph>
      <div className="my-6">
        <CodeBlock language="shell" snippet="npx prisma studio" />
      </div>
      <Paragraph darkMode>
        This will open the screen below in your browser showing all the tables -
        or models - in your database:
      </Paragraph>
      <div className="my-6">
        <Screenshot
          src={allModelsScreen}
          alt="Prisma Studio all models screen"
        />
      </div>
      <Paragraph darkMode>
        Click on one of the model names and you will be taken to the view for
        that particular database table/model. In the example below, we can see
        the fields of the <InlineMonoType darkMode>Membership</InlineMonoType>{" "}
        model displayed horizontally, but there are no records added yet.
      </Paragraph>
      <div className="my-6">
        <Screenshot src={tableViewScreen} alt="Prisma Studio table view" />
      </div>
      <Paragraph darkMode>
        Let's fix this in the{" "}
        <InternalStyledLink
          to="/remix/prisma/adding-a-prisma-model/seeding-data"
          className="text-2xl"
        >
          next step
        </InternalStyledLink>{" "}
        by adding some seed data.
      </Paragraph>
    </div>
  );
};

export default CreatingATable;
