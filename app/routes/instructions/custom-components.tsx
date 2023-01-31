import { marked } from "marked";
import InternalStyledLink from "~/components/InternalStyledLink";

const html = marked(`
# Handling User Input

### 🚀 **EXTRA CREDIT 1 (optional)**

Can you add a second prop called \`className\` that will allow the coder to pass in their own custom classes?

So this code...

![Extra credit 1 code example](https://res.cloudinary.com/dptdx8zuv/image/upload/v1675183815/react-introduction/custom-components-extra-credit-code_jejbua.png)

Will render this output...

![Extra credit 1 finished example](https://res.cloudinary.com/dptdx8zuv/image/upload/v1675183822/react-introduction/custom-component-extra-credit-render_epmhbs.png)

This should be an optional prop, and if it is not passed then the component will simply use the original green styles.`);

const CustomComponents = () => {
  return (
    <div className="container prose m-8 mx-auto pb-8 text-2xl tracking-wide text-slate-600 sm:m-8 sm:mt-8 lg:mt-16">
      <div className="mb-4">
        <InternalStyledLink to="/custom-components">
          {"<"} Back
        </InternalStyledLink>
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default CustomComponents;
