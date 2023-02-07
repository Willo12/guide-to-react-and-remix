type MonoTypeProps = {
  path: string;
  label?: string;
  darkMode?: boolean;
};

const MonoType = ({ darkMode = false, path, label }: MonoTypeProps) => {
  return (
    <span className="mb-6 flex items-center justify-center">
      {label ? (
        <span
          className={`pr-3 text-neutral-700 ${
            darkMode ? "text-slate-300" : ""
          }`}
        >
          {label}
        </span>
      ) : null}
      <code
        className={`break-all rounded bg-slate-900 py-2 px-3 font-mono text-white ${
          darkMode ? "bg-neutral-700" : ""
        }`}
      >
        {path}
      </code>
    </span>
  );
};

export default MonoType;
