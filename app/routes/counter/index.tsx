import CounterChallengeCode from "~/challenge-components/react/counter-challenge-code";
import MonoType from "~/components/MonoType";
import Paragraph from "~/components/Paragraph";

const Counter = () => {
  return (
    <main className="container mx-auto min-h-screen items-center justify-center lg:flex">
      <div className="m-8 rounded-xl bg-sky-100 p-20 shadow-xl lg:w-1/2">
        <h1 className="mb-8 text-center text-6xl font-bold text-blue-500">
          Counter
        </h1>
        <MonoType path="app/challenge-components/counter-challenge-code.tsx" />
        <Paragraph>
          Can you update the component code in the file above so that
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
