interface HintBoxProps {
  children: React.ReactNode;
  className?: string;
}

const HintBox = ({ children, className = "" }: HintBoxProps) => {
  return (
    <div
      className={`border-l-4 border-l-emerald-700 bg-emerald-200 p-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default HintBox;
