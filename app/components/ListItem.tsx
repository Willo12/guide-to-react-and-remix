interface ListItemProps {
  children: React.ReactNode;
  className?: string;
}

const ListItem = ({ children, className = "" }: ListItemProps) => {
  return (
    <li
      className={`mb-4 list-decimal text-lg leading-relaxed tracking-wide text-gray-800 last-of-type:mb-0 ${className}`}
    >
      {children}
    </li>
  );
};

export default ListItem;
