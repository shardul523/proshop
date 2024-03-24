import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { deleteItem } from "./cartSlice";
import { decimalFormatter } from "../../utils";
import { Link } from "react-router-dom";

function TableRow({ item }) {
  const dispatch = useDispatch();
  const total = decimalFormatter(item.price * item.quantity);

  return (
    <tr className="bg-secondary-100 border-b dark:border-secondary-300">
      <td>
        <img className="w-24" src={item.image} alt={item.name} />
      </td>
      <td>
        <Link to={`/products/${item.product}`}>
          <span className="text-nowrap text-ellipsis overflow-hidden hover:underline">
            {item.name}
          </span>
        </Link>
      </td>
      <td>${item.price}</td>
      <td>{item.quantity}</td>
      <td>${total}</td>
      <td>
        <button
          onClick={() => dispatch(deleteItem(item.product))}
          className="p-1 rounded bg-secondary-300 text-secondary-700 hover:bg-secondary-700 hover:text-secondary-300 active:p-0.5"
        >
          <FaTrashAlt />
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
