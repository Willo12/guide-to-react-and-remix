interface MessageProps {
  name: string;
  className?: string;
}

function Greeting({ name, className = "" }: MessageProps) {
  return (
    <p
      className={`m-4 border-r-4 border-r-green-900 bg-green-200 py-3 px-5 text-xl tracking-wide text-green-700 ${className}`}
    >
      hello {name}!
    </p>
  );
}

const CustomComponentsChallengeCode = () => {
  return (
    <div>
      <Greeting name="bob" />
      <Greeting name="larry" />
      <Greeting name="ryan" className="bg-red-200" />
      {/* <p className="m-4 border-r-4 border-r-green-900 bg-green-200 py-3 px-5 text-xl tracking-wide text-green-700">
        Hello Ged!
      </p>
      <p className="m-4 border-r-4 border-r-green-900 bg-green-200 py-3 px-5 text-xl tracking-wide text-green-700">
        Hello Sarah!
      </p>
      <p className="m-4 border-r-4 border-r-green-900 bg-green-200 py-3 px-5 text-xl tracking-wide text-green-700">
        Hello Jo!
      </p> */}
    </div>
  );
};

export default CustomComponentsChallengeCode;
