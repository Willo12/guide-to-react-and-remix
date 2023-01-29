const HandleUserInputChallengeCode = () => {
  return (
    <div className="border-grey-400 border-8 p-12">
      <div className="relative mb-6 flex flex-col">
        <label htmlFor="user-input" className="mb-2 pl-2 text-lg text-gray-400">
          Message
        </label>
        <input
          id="user-input"
          className="rounded border border-gray-400 px-6 py-4 text-2xl"
          placeholder="Type something..."
        />
        <button
          type="button"
          className="absolute right-2 top-12 rounded-md bg-indigo-400 px-4 py-2 text-white"
        >
          Clear Text
        </button>
      </div>
      <div className="pt-12">
        <div className="flex items-center justify-between rounded-lg bg-white">
          <p className="text-2xl tracking-wide text-gray-600">
            You typed:{" "}
            <span className="rounded-md bg-green-200 px-4 py-2 text-green-600">
              ???
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HandleUserInputChallengeCode;
