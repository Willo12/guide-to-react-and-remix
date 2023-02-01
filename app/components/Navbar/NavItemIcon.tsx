interface NavItemIconProps {
  children: React.ReactNode;
}

const NavItemIcon = ({ children }: NavItemIconProps) => {
  return <span className="h-auto w-6">{children}</span>;
};

export default NavItemIcon;
