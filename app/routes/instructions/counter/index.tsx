import { marked } from "marked";

const html = marked(`
# Counter Challenge

Can you update the component code so that clicking the 'Add' button makes the number on screen increment by one every time?

**HINT**: you can use the [useState](https://beta.reactjs.org/reference/react/useState#reference) hook to solve this. Look at a usage example [here](https://beta.reactjs.org/reference/react/useState#usage).

If you are REALLY stuck, take a look at a counter example from the React docs page [here](https://beta.reactjs.org/reference/react/useState#examples-basic).
`);

const Counter = () => {
  return (
    <div className="prose m-8 mx-auto sm:m-8 lg:mt-16">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default Counter;
