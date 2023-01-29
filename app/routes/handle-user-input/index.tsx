import Paragraph from "~/components/Paragraph";

interface HandleUserInputProps {}

const HandleUserInput = ({}: HandleUserInputProps) => {
  return (
    <div className="container mx-auto flex min-h-screen items-center justify-center">
      <div className="m-8 rounded-xl bg-sky-100 p-20 shadow-xl">
        <h1 className="mb-8 text-center text-6xl font-bold text-blue-500">
          Handling User Input
        </h1>
        <Paragraph>
          Update the component code to track what the user types into the input
          field and print it out to the space directly below.
        </Paragraph>
        <div className="mb-6 flex flex-col">
          <label
            htmlFor="user-input"
            className="mb-2 pl-2 text-lg text-gray-400"
          >
            Message
          </label>
          <input
            id="user-input"
            className="px-6 py-4 text-2xl"
            placeholder="Type something..."
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between rounded-lg bg-white p-6">
            <p className="text-2xl tracking-wide text-gray-600">
              You typed:{" "}
              <span className="rounded-md bg-green-200 px-4 py-2 text-green-600">
                ???
              </span>
            </p>
            <button className="rounded-md bg-indigo-400 px-4 py-2 text-white">
              Clear Text
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandleUserInput;
