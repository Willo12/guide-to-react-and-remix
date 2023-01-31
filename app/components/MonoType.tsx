type MonoTypeProps = {
  path: string;
  label?: string;
};

const MonoType = ({ path, label }: MonoTypeProps) => {
  return (
    <div className="mb-6 flex items-center justify-center">
      {label ? <span className="pr-3 text-slate-700">{label}</span> : null}
      <code className="break-all rounded bg-slate-900 py-2 px-3 font-mono text-white">
        {path}
      </code>
    </div>
  );
};

export default MonoType;
