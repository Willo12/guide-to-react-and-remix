import CounterChallengeCode from "~/challenge-components/react/counter-challenge-code";
import Paragraph from "~/components/Paragraph";

const Counter = () => {
  return (
    <main className="container mx-auto min-h-screen items-center justify-center lg:flex">
      <div className="m-8 rounded-xl bg-sky-100 p-20 shadow-xl lg:w-1/2">
        <h1 className="mb-8 text-center text-6xl font-bold text-blue-500">
          Counter
        </h1>
        <div className="mb-6 flex items-center justify-center">
          <span className="pr-3 text-slate-700">Location:</span>
          <code className="rounded bg-slate-900 py-2 px-3 font-mono text-white">
            app/challenge-components/counter-challenge-code.tsx
          </code>
        </div>
        <Paragraph>
          Can you update the component code at the location above so that
          clicking the 'Add' button makes the number increment by one every
          time?
        </Paragraph>
      </div>
      <div className="lg:w-1/2">
        <CounterChallengeCode />
      </div>
    </main>
  );
};

export default Counter;
