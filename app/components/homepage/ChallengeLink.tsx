import { Link } from "@remix-run/react";

interface ChallengeLinkProps {
  children: React.ReactNode;
  to: string;
}

const ChallengeLink = ({ children, to }: ChallengeLinkProps) => {
  return (
    <Link className="w-full" to={to}>
      <div className="group rounded-3xl bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-400 to-rose-400 py-12 shadow-lg transition-colors hover:from-red-500 hover:to-red-800">
        {children}
      </div>
    </Link>
  );
};

export default ChallengeLink;
