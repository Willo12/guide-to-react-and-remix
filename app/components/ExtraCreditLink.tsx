import { Link } from "@remix-run/react";

type ExtraCreditLinkProps = {
  to: string;
};

export const ExtraCreditLink = ({ to }: ExtraCreditLinkProps) => {
  return (
    <Link
      type="button"
      className="rounded-lg bg-green-300 px-8 py-6 text-sm font-bold uppercase text-green-800 hover:bg-green-500"
      to={to}
    >
      🚀 Extra Credit
    </Link>
  );
};
