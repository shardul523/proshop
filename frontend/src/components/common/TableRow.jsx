function TableRow({ children }) {
  return (
    <tr className="bg-secondary-100 border-b dark:border-secondary-300 border-secondary-300">
      {children}
    </tr>
  );
}
export default TableRow;
