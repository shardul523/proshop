import Divider from "../common/Divider";
import StatField from "../ui/StatField";

import { useProfile } from "../../hooks/userHooks";
import OrderDeliverButton from "./OrderDeliverButton";
import OrderPayButton from "./OrderPayButton";
import PriceTag from "../common/PriceTag";

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
    <div className="bg-white mx-auto p-4 rounded flex flex-col items-stretch gap-2">
      <div className="text-xl font-semibold">Order Summary</div>
      <Divider />
      <div className="space-y-2">
        <StatField
          label={"Items Price"}
          value={<PriceTag price={orderPrice} />}
        />
        <StatField
          label={"Shipping Price"}
          value={<PriceTag price={shippingPrice} />}
        />
        <StatField label={"Tax Price"} value={<PriceTag price={taxPrice} />} />
        <StatField
          label={"Total Price"}
          value={<PriceTag price={totalPrice} />}
        />
      </div>
      {(!isPaid || !isDelivered) && <Divider />}
      {!isPaid && <OrderPayButton orderId={orderId} />}
      {!isDelivered && user?.isAdmin && (
        <OrderDeliverButton orderId={orderId} />
      )}
    </div>
  );
}
export default OrderSummary;
