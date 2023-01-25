import { Link } from "@remix-run/react";

interface ChallengeLinkProps {
  children: React.ReactNode;
  to: string;
}

const ChallengeLink = ({ children, to }: ChallengeLinkProps) => {
  return (
    <Link className="w-full p-8 lg:w-1/3" to={to}>
      <div className="rounded-lg bg-blue-400 py-12 transition-colors hover:bg-blue-600">
        {children}
      </div>
    </Link>
  );
};

export default ChallengeLink;
