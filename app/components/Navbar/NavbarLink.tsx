type NavbarLinkProps = {
  url: string;
  children: React.ReactNode;
};

const NavbarLink = ({ children, url }: NavbarLinkProps) => {
  return (
    <a
      href={url}
      className="mt-1 block rounded px-2 py-1 font-semibold text-white hover:bg-slate-800 md:mt-0 md:ml-2"
    >
      {children}
    </a>
  );
};

export default NavbarLink;
