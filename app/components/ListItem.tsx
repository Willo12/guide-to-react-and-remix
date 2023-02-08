interface ListItemProps {
  children: React.ReactNode;
  className?: string;
  darkMode?: boolean;
}

const ListItem = ({
  children,
  className = "",
  darkMode = false,
}: ListItemProps) => {
  return (
    <li
      className={`mb-4 list-decimal text-lg leading-relaxed tracking-wide last-of-type:mb-0 ${
        darkMode ? "text-white" : "text-gray-800"
      } ${className}`}
    >
      {children}
    </li>
  );
};

export default ListItem;
