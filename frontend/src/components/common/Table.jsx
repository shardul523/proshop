import TableScrollContainer from "./TableScrollContainer";

function Table({ children }) {
  return (
    <TableScrollContainer>
      <table
        className="w-full text-sm text-left rtl:text-right text-secondary-500 my-5 z-0 relative
      "
      >
        {children}
      </table>
    </TableScrollContainer>
  );
}
export default Table;
