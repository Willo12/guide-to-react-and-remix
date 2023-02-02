import { Link } from "@remix-run/react";
import { marked } from "marked";
import InternalStyledLink from "~/components/InternalStyledLink";

const html = marked(`
# Counter Challenge

## 🚀 **EXTRA CREDIT 1 (Optional)**

Can you make a second button that _decrements_ the number by 1 each time it is clicked?

## 🚀 **EXTRA CREDIT 2 (Optional)**

Can you make it so that the new decrement button only takes away 1 if the current number is greater than zero?
`);

const Counter = () => {
  return (
    <div className="prose m-8 mx-auto sm:m-8 lg:mt-16">
      <div className="mb-4">
        <InternalStyledLink to="/counter">{"<"} Back</InternalStyledLink>
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default Counter;
