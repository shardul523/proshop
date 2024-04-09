import { Link } from "react-router-dom";

import TableRow from "../common/TableRow";
import Td from "../common/Td";
import StatusIcon from "../ui/StatusIcon";

function OrderTableRow({ order }) {
  const orderId = order._id;
  const date = new Date(order.createdAt).toLocaleDateString();
  const { totalPrice, isPaid, isDelivered } = order;
  const paidStatus = isPaid ? "Yes" : "No";
  const deliveryStatus = isDelivered ? "success" : "fail";

  return (
    <TableRow>
      <Td>
        <Link
          className="hover:underline underline-offset-2"
          to={`/orders/${orderId}`}
        >
          {orderId}
        </Link>
      </Td>
      <Td>{date}</Td>
      <Td>{totalPrice}</Td>
      <Td>{paidStatus}</Td>
      <Td>
        <StatusIcon status={deliveryStatus} />
      </Td>
    </TableRow>
  );
}
export default OrderTableRow;
