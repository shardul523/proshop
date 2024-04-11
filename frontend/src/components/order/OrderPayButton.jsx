import { useOrderPay } from "../../hooks/orderHooks";
import Button from "../common/Button";

function OrderPayButton({ orderId }) {
  const { updateToPaid, isPending } = useOrderPay(orderId);
  console.log(isPending);
  return (
    <Button onClick={updateToPaid} disabled={isPending}>
      Pay Order
    </Button>
  );
}

export default OrderPayButton;
