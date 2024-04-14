import Table from "../common/Table";
import TableBody from "../common/TableBody";
import TableHeader from "../common/TableHeader";
import CartTableRow from "./CartTableRow";

function CartItemsTable({ cartItems }) {
  return (
    <Table>
      <TableHeader />
      <TableBody>
        {cartItems.map((item) => (
          <CartTableRow item={item} key={item.product} />
        ))}
      </TableBody>
    </Table>
  );
}
export default CartItemsTable;
