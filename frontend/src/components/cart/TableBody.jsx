import { useSelector } from "react-redux";
import TableRow from "./TableRow";

function TableBody() {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <tbody className="text-center ">
      {cart.map((item) => (
        <TableRow item={item} key={item.product} />
      ))}
    </tbody>
  );
}
export default TableBody;
