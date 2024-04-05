import { useParams, Navigate } from "react-router-dom";

import Loader from "../components/common/Loader";
import OrderDetail from "../components/order/OrderDetail";
import OrderDetailField from "../components/order/OrderDetailField";
import Divider from "../components/common/Divider";
import OrderItemOverview from "../components/order/OrderItemOverview";
import StatusField from "../components/common/StatusField";
import StatField from "../components/common/StatField";

import { useGetOrderById } from "../hooks/orderHooks";
import { getFullAddress } from "../utils";

function OrderPage() {
  const { orderId } = useParams();
  const { order, isPending, isError } = useGetOrderById(orderId);

  console.log(order);

  if (isPending) return <Loader />;

  if (isError) return <Navigate to={"/"} replace />;

  const {
    user: { name, email },
    shippingAddress,
    paymentMethod,
    orderItems,
    orderPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  } = order;

  const fullAddress = getFullAddress(shippingAddress);

  return (
    <div className="flex flex-col lg:flex-none lg:grid grid-cols-7 px-20 my-1">
      <div className="col-span-5">
        <h2 className="text-3xl font-semibold">Order {orderId}</h2>
        <div className="px-4">
          <OrderDetail detailField={"Shipping"}>
            <OrderDetailField field={"Name"} value={name} />
            <OrderDetailField field={"Email"} value={email} />
            <OrderDetailField field={"Address"} value={fullAddress} />
            <OrderDetailField
              field={"Status"}
              value={<StatusField status="failure" value={"Not Delivered"} />}
            />
          </OrderDetail>
          <Divider />
          <OrderDetail detailField={"Payment Method"}>
            <OrderDetailField field={"Method"} value={paymentMethod} />
            <OrderDetailField
              field={"Status"}
              value={<StatusField status="failure" value={"Not Paid"} />}
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
      </div>
      <div className="col-span-2">
        <div className="bg-white mx-auto p-4 rounded">
          <div className="text-xl font-semibold">Order Summary</div>
          <Divider />
          <div className="space-y-2">
            <StatField label={"Items Price"} value={`$${orderPrice}`} />
            <StatField label={"Shipping Price"} value={`$${shippingPrice}`} />
            <StatField label={"Tax Price"} value={`$${taxPrice}`} />
            <StatField label={"Total Price"} value={`$${totalPrice}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default OrderPage;
