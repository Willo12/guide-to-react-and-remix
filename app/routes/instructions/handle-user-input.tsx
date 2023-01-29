import { marked } from "marked";

const html = marked(`
# Handling User Input

1. Update the code so that when the user types into the input field, their writing will replace the three question marks in the green box below.

2. When the user clicks the 'Clear Text' button, the text in the input box and the 'You typed:' area should clear.

## Finished behaviour

![Finished input handling challenge](https://res.cloudinary.com/dptdx8zuv/image/upload/v1674377447/react-introduction/2023-01-22_08-48-42_1_uxd5wg.gif)

## Hint

Take a look at the text field example (second tab along) from the React docs page [here](https://beta.reactjs.org/reference/react/useState#examples-basic).

### **EXTRA CREDIT 1 (optional)**

If the input box is empty, can you give it a red background-colour and print a message beneath reading 'This field is required', like that shown below?

![Extra credit 1 finished example](https://res.cloudinary.com/dptdx8zuv/image/upload/v1674378802/react-introduction/2023-01-22_09-11-57_1_b78mv3.gif)

### **EXTRA CREDIT 2 (optional)**

Hmmm. Now, the input field is already styled red with a warning when the component first renders and before the user has even typed anything.

Can you use the [usePrevious custom hook](https://usehooks.com/usePrevious/) to only make the warning styles show _AFTER_ the user has typed into the input field and then cleared it? See the example below:

![Extra credit 2 finished example](https://res.cloudinary.com/dptdx8zuv/image/upload/v1674377447/react-introduction/2023-01-22_08-48-42_1_uxd5wg.gif)
`);

const Counter = () => {
  return (
    <div className="container prose m-8 mx-auto sm:m-8 sm:mt-8 lg:mt-16">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default Counter;
