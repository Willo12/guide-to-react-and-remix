import { marked } from "marked";
import InternalStyledLink from "~/components/InternalStyledLink";

const html = marked(`
# Your First Component

### 🚀 **EXTRA CREDIT 1 (optional)**

Can you make the world 'Hello' italic with only JSX tags?

**TIP**: Search which HTML element will italicise text.

![Extra credit 1 finished example](https://res.cloudinary.com/dptdx8zuv/image/upload/v1675254962/react-introduction/your-first-component-credit_v6dsoc.png)
`);

const Styling = () => {
  return (
    <div className="container prose m-8 mx-auto text-2xl tracking-wide text-slate-600 sm:m-8 sm:mt-8 lg:mt-16 lg:pb-8">
      <div className="mb-4">
        <InternalStyledLink to="/your-first-component">
          {"<"} Back
        </InternalStyledLink>
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default Styling;
