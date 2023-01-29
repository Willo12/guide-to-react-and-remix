interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph = ({ children, className = "" }: ParagraphProps) => {
  return (
    <p className={`mb-6 text-2xl tracking-wide text-gray-600 ${className}`}>
      {children}
    </p>
  );
};

export default Paragraph;
