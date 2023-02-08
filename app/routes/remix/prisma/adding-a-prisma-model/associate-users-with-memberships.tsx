import CodeBlock from "~/components/CodeBlock";
import Heading from "~/components/Heading";
import InlineMonoType from "~/components/InlineMonoType";
import InternalStyledLink from "~/components/InternalStyledLink";
import Paragraph from "~/components/Paragraph";
import Screenshot from "~/components/Screenshot";
import allModelsScreen from "~/assets/prisma-studio-all-models.png";
import tableViewScreen from "~/assets/prisma-studio-table-view.png";

const AssociateUsersWithMemberships = () => {
  return (
    <>
      <Heading level="h2">Associate Users with Memberships</Heading>
      <Paragraph darkMode>
        Finally, we need to associate users with memberships. Take a look at how
        users are currently being seeded:
      </Paragraph>
      <div className="my-6">
        <CodeBlock language="shell" snippet="REPLACE WITH REAL CODE!" />
      </div>
    </>
  );
};

export default AssociateUsersWithMemberships;
