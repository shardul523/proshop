function TableScrollContainer({ children }) {
  return <div className="relative overflow-x-auto">{children}</div>;
}

function Table({ children }) {
  return (
    <TableScrollContainer>
      <table className="w-full text-sm text-left rtl:text-right text-secondary-500">
        {children}
      </table>
    </TableScrollContainer>
  );
}
export default Table;
