import Table from "../common/Table";
import TableHeader from "../common/TableHeader";
import TableBody from "../common/TableBody";
import Loader from "../ui/Loader";

import { useMyOrders } from "../../hooks/orderHooks";
import OrderTableRow from "./OrderTableRow";

function UserOrdersList() {
  const { orders, isPending } = useMyOrders();

  if (isPending) return <Loader />;

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-5">My Orders</h3>
      <Table>
        <TableHeader headings={["ID", "Date", "Total", "Paid", "Delivered"]} />
        <TableBody>
          {orders.map((order) => (
            <OrderTableRow order={order} key={order._id} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
export default UserOrdersList;
