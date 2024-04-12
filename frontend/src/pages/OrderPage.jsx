import { useParams, Navigate } from "react-router-dom";

import Container from "../components/common/Container";
import Loader from "../components/ui/Loader";
import OrderSummary from "../components/order/OrderSummary";
import OrderOverview from "../components/order/OrderOverview";
import BackButton from "@/components/common/BackButton";

import { useGetOrderById } from "../hooks/orderHooks";

function OrderPage() {
  const { orderId } = useParams();
  const { order, isPending, isError } = useGetOrderById(orderId);

  if (isPending) return <Loader />;

  if (isError) return <Navigate to={"/"} replace />;

  console.log(order);

  return (
    <Container>
      <BackButton />
      <div className="flex flex-col lg:flex-none lg:grid grid-cols-7 px-20 mb-1">
        <div className="col-span-5">
          <OrderOverview order={order} />
        </div>
        <div className="col-span-2">
          <OrderSummary order={order} />
        </div>
      </div>
    </Container>
  );
}
export default OrderPage;
