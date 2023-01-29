import Paragraph from "~/components/Paragraph";

interface CounterProps {}

const Counter = ({}: CounterProps) => {
  return (
    <main className="container mx-auto flex min-h-screen items-center justify-center">
      <div className="m-8 rounded-xl bg-sky-100 p-20 shadow-xl">
        <h1 className="mb-8 text-center text-6xl font-bold text-blue-500">
          Counter
        </h1>
        <div className="text-center">
          <Paragraph>
            Can you update the component code so that clicking the 'Add' button
            below makes the number shown increment by one every time?
          </Paragraph>
        </div>
        <div className="flex items-center justify-center p-10">
          <div>
            <div className="flex h-64 w-64 items-center justify-center rounded-full bg-white">
              <h2 className="text-6xl text-indigo-700">1</h2>
            </div>
            <div className="mt-10 flex justify-center">
              <button className="rounded-lg bg-indigo-700 px-12 py-6 text-2xl text-white">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Counter;
