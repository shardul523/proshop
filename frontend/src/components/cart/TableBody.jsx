import { useSelector } from "react-redux";
import TableRow from "./TableRow";

function TableBody() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <tbody className="text-center ">
      {cartItems.map((item) => (
        <TableRow item={item} key={item.product} />
      ))}
    </tbody>
  );
}
export default TableBody;
