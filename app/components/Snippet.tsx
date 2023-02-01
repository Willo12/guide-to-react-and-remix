interface SnippetProps {
  children: React.ReactNode;
}

const Snippet = ({ children }: SnippetProps) => {
  return (
    <code className="rounded bg-slate-900 px-2 py-1 font-mono text-base text-white">
      {children}
    </code>
  );
};

export default Snippet;
