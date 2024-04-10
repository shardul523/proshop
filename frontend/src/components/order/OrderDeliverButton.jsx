import { useOrderDeliver } from "../../hooks/orderHooks";
import Button from "../common/Button";

function OrderDeliverButton({ orderId }) {
  const { updateToDeliverd, isPending } = useOrderDeliver(orderId);

  return (
    <Button onClick={updateToDeliverd} disabled={isPending}>
      Mark Order as Delivered
    </Button>
  );
}

export default OrderDeliverButton;
