interface ListItemProps {
  children: React.ReactNode;
  className?: string;
}

const ListItem = ({ children, className = "" }: ListItemProps) => {
  return (
    <li
      className={`list-decimal text-lg leading-relaxed tracking-wide text-gray-800 ${className}`}
    >
      {children}
    </li>
  );
};

export default ListItem;
