import { useOrderPay } from "../../hooks/orderHooks";
import Button from "../common/Button";

function OrderPayButton({ orderId }) {
  const { updateToPaid, isPending } = useOrderPay(orderId);
  console.log(isPending);
  return (
    <div className="px-4">
      <Button onClick={updateToPaid} disabled={isPending}>
        Pay
      </Button>
    </div>
  );
}

export default OrderPayButton;
