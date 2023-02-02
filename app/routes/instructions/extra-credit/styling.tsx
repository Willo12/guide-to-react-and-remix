import { marked } from "marked";
import InternalStyledLink from "~/components/InternalStyledLink";

const html = marked(`
# Styling

### 🚀 **EXTRA CREDIT 1 (optional)**

Can you use the \`flex\` class to make each box appear next one one another horizontally?

The [Scrimba course](https://scrimba.com/learn/flexbox/your-first-flexbox-layout-flexbox-tutorial-canLGCw) on Flexbox will help you understand this powerful CSS property.

![Extra credit 1 finished example](https://res.cloudinary.com/dptdx8zuv/image/upload/v1675117997/react-introduction/2023-01-30_22-31-33_of7pfu.png)

### 🚀 **EXTRA CREDIT 2 (optional)**

Can you use the \`flex\` class, alongside the \`justify-center\` and \`items-center\` classes, to make the text in each box centered both vertically and horizontally?

![Extra credit 2 finished example](https://res.cloudinary.com/dptdx8zuv/image/upload/v1675118004/react-introduction/2023-01-30_22-32-31_nzjndr.png)
`);

const Styling = () => {
  return (
    <div className="container prose m-8 mx-auto text-2xl tracking-wide text-slate-600 sm:m-8 sm:mt-8 lg:mt-16 lg:pb-8">
      <div className="mb-4">
        <InternalStyledLink to="/styling">
          {"<"} Back to challenge page
        </InternalStyledLink>
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default Styling;
