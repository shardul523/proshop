import Divider from "../common/Divider";
import StatField from "../ui/StatField";

import { useProfile } from "../../hooks/userHooks";
import OrderDeliverButton from "./OrderDeliverButton";
import OrderPayButton from "./OrderPayButton";

function OrderSummary({ order }) {
  const {
    orderPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
    isDelivered,
    isPaid,
    _id: orderId,
  } = order;
  const { user } = useProfile();

  return (
    <div className="bg-white mx-auto p-4 rounded">
      <div className="text-xl font-semibold">Order Summary</div>
      <Divider />
      <div className="space-y-2">
        <StatField label={"Items Price"} value={`$${orderPrice}`} />
        <StatField label={"Shipping Price"} value={`$${shippingPrice}`} />
        <StatField label={"Tax Price"} value={`$${taxPrice}`} />
        <StatField label={"Total Price"} value={`$${totalPrice}`} />
        {!isPaid && <OrderPayButton orderId={orderId} />}
      </div>
      {!isDelivered && user?.isAdmin && (
        <>
          <Divider />
          <OrderDeliverButton orderId={orderId} />
        </>
      )}
    </div>
  );
}
export default OrderSummary;
