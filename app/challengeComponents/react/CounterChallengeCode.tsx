const CounterChallengeCode = () => {
  // 🤓 CHALLENGE: Can you update this component code so that clicking the 'Add' button increments the number by one?
  // 🚀 EXTRA CREDIT 1: Can you add a second button that, when clicks, decrements the number by one?
  // 🚀 EXTRA CREDIT 2: Can you ensure that the number is never decremented below 0?

  return (
    <div className="flex items-center justify-center p-10">
      <div>
        <div className="flex h-64 w-64 items-center justify-center rounded-full bg-white">
          <h2 className="flex h-36 w-36 items-center justify-center rounded-full bg-yellow-200 text-6xl text-blue-500">
            1
          </h2>
        </div>
        <div className="mt-10 flex justify-center">
          <button className="m-2 rounded-lg bg-indigo-700 px-12 py-6 text-2xl text-white transition-colors hover:bg-indigo-600">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterChallengeCode;
