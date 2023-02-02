interface NavItemIconProps {
  children: React.ReactNode;
  className?: string;
}

const NavItemIcon = ({ children, className = "" }: NavItemIconProps) => {
  return <span className={`h-auto w-6 ${className}`}>{children}</span>;
};

export default NavItemIcon;
