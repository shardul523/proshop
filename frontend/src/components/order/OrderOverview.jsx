import Divider from "../common/Divider";
import StatusField from "../ui/StatusField";
import OrderDetail from "./OrderDetail";
import OrderDetailField from "./OrderDetailField";
import OrderItemOverview from "./OrderItemOverview";

import { getFullAddress } from "../../utils";

function OrderOverview({ order }) {
  const {
    user,
    shippingAddress,
    paymentMethod,
    orderItems,
    _id: orderId,
    isPaid,
    paidAt,
    isDelivered,
    deliveredAt,
  } = order;

  const fullAddress = getFullAddress(shippingAddress);

  return (
    <>
      <h2 className="text-3xl font-semibold">Order {orderId}</h2>
      <div className="px-4">
        <OrderDetail detailField={"Shipping"}>
          <OrderDetailField field={"Name"} value={user?.name} />
          <OrderDetailField field={"Email"} value={user?.email} />
          <OrderDetailField field={"Address"} value={fullAddress} />
          <OrderDetailField
            field={"Status"}
            value={
              <StatusField
                status={isDelivered ? "success" : "fail"}
                value={
                  isDelivered ? `Delivered At: ${deliveredAt}` : "Not Delivered"
                }
              />
            }
          />
        </OrderDetail>
        <Divider />
        <OrderDetail detailField={"Payment Method"}>
          <OrderDetailField field={"Method"} value={paymentMethod} />
          <OrderDetailField
            field={"Status"}
            value={
              <StatusField
                status={isPaid ? "success" : "fail"}
                value={isPaid ? `Paid At: ${paidAt}` : "Not Paid"}
              />
            }
          />
        </OrderDetail>
        <Divider />
        <div>
          {orderItems.map((orderItem) => (
            <OrderItemOverview
              key={orderItem.product._id}
              orderItem={orderItem}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default OrderOverview;
