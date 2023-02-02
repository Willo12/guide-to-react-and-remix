import { Link } from "@remix-run/react";

interface InstructionLinkProps {
  children: React.ReactNode;
  to: string;
}

const InstructionLink = ({ children, to }: InstructionLinkProps) => {
  return (
    <Link
      className="m-4 bg-blue-400 p-8 text-center uppercase tracking-wide text-white hover:bg-blue-600"
      to={to}
    >
      {children}
    </Link>
  );
};

export default InstructionLink;
