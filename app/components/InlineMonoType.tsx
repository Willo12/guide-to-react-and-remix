type InlineMonoTypeProps = {
  children: string;
  className?: string;
  darkMode?: boolean;
};

const InlineMonoType = ({
  darkMode = false,
  children,
  className = "",
}: InlineMonoTypeProps) => {
  return (
    <span
      className={`rounded bg-slate-900 py-2 px-3 font-mono text-lg text-white ${
        darkMode ? "bg-neutral-700" : ""
      } ${className}`}
    >
      {children}
    </span>
  );
};

export default InlineMonoType;
