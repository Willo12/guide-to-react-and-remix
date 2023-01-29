import { Link } from "@remix-run/react";

type NavbarLinkProps = {
  to: string;
  children: React.ReactNode;
};

const NavbarLink = ({ children, to }: NavbarLinkProps) => {
  return (
    <Link
      to={to}
      className="mt-1 block rounded px-2 py-1 font-semibold text-white hover:bg-slate-800 md:mt-0 md:ml-2"
    >
      {children}
    </Link>
  );
};

export default NavbarLink;
