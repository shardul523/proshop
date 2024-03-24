function Badge({ children }) {
  return (
    <span className="absolute -right-2 -bottom-1 bg-secondary-200 text-gray-800 text-xs font-medium px-1.5 py-[0.5px] rounded-full">
      {children}
    </span>
  );
}
export default Badge;
