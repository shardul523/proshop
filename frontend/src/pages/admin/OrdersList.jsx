import { Link } from "react-router-dom";

import Table from "../../components/common/Table";
import TableHeader from "../../components/common/TableHeader";
import TableBody from "../../components/common/TableBody";
import TableRow from "../../components/common/TableRow";
import Td from "../../components/common/Td";
import StatusIcon from "../../components/ui/StatusIcon";
import Loader from "../../components/ui/Loader";

import { useAllOrders } from "../../hooks/orderHooks";

function OrdersList() {
  const { allOrders, isPending } = useAllOrders();

  if (isPending) return <Loader />;

  return (
    <>
      <h3 className="text-2xl font-semibold">Orders</h3>
      <Table>
        <TableHeader
          headings={["ID", "User", "Date", "Total", "Paid", "Delivered"]}
        />
        <TableBody>
          {allOrders.map((order) => (
            <TableRow key={order._id}>
              <Td>
                <Link
                  className="hover:underline underline-offset-2"
                  to={`/orders/${order._id}`}
                >
                  {order._id}
                </Link>
              </Td>
              <Td>{order.user?.name}</Td>
              <Td>{new Date(order.createdAt).toLocaleDateString()}</Td>
              <Td>$ {order.totalPrice}</Td>
              <Td>{order.paidAt ? order.paidAt : "No"}</Td>
              <Td>
                <StatusIcon status={order.isDelivered ? "success" : "fail"} />
              </Td>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
export default OrdersList;
