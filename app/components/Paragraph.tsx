interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph = ({ children, className = "" }: ParagraphProps) => {
  return (
    <p
      className={`mb-6 text-lg tracking-wide text-gray-600 lg:text-2xl ${className}`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
