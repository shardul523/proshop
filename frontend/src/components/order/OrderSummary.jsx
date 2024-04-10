import Divider from "../common/Divider";
import StatField from "../ui/StatField";

function OrderSummary({ order }) {
  const { orderPrice, shippingPrice, taxPrice, totalPrice } = order;

  return (
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
  );
}
export default OrderSummary;
