import TableRow from "../cart/CartTableRow";

function TableBody({ items }) {
  return (
    <tbody className="text-center ">
      {items.map((item) => (
        <TableRow item={item} key={item.product} />
      ))}
    </tbody>
  );
}
export default TableBody;
