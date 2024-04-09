import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import TableRow from "../common/TableRow";
import Td from "../common/Td";

import { deleteItem } from "./cartSlice";
import { decimalFormatter } from "../../utils";

function CartTableRow({ item }) {
  const dispatch = useDispatch();
  const total = decimalFormatter(item.price * item.quantity);

  return (
    <TableRow>
      <Td>
        <img className="w-24" src={item.image} alt={item.name} />
      </Td>
      <Td>
        <Link to={`/products/${item.product}`}>
          <span className="text-nowrap text-ellipsis overflow-hidden hover:underline underline-offset-2">
            {item.name}
          </span>
        </Link>
      </Td>
      <Td>${item.price}</Td>
      <Td>{item.quantity}</Td>
      <Td>${total}</Td>
      <Td>
        <button
          onClick={() => dispatch(deleteItem(item.product))}
          className="p-1 rounded bg-secondary-300 text-secondary-700 hover:bg-secondary-700 hover:text-secondary-300 active:p-0.5"
        >
          <FaTrashAlt />
        </button>
      </Td>
    </TableRow>
  );
}

export default CartTableRow;
