import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import Divider from "../components/common/Divider";
import CheckoutContainer from "../components/order/CheckoutContainer";
import CheckoutSteps from "../components/order/CheckoutSteps";
import CheckoutButtonGroup from "@/components/order/CheckoutButtonGroup";
import CheckoutField from "../components/order/CheckoutField";

import {
  isValidShippingAddress,
  isValidPaymentMethod,
  getFullAddress,
  decimalFormatter,
} from "../utils";
import { getTotalSum } from "../components/cart/cartSlice";
import { useCreateNewOrder } from "../hooks/orderHooks";

function PlaceOrder() {
  const cart = useSelector((state) => state.cart);
  const itemsPrice = useSelector(getTotalSum);
  const { createNewOrder } = useCreateNewOrder();

  const { cartItems, shippingAddress, paymentMethod } = cart;

  if (!isValidShippingAddress(shippingAddress))
    return <Navigate to={"/checkout/shipping"} replace />;

  if (!isValidPaymentMethod(paymentMethod))
    return <Navigate to={"/checkout/payment"} replace />;

  const fullAddress = getFullAddress(shippingAddress);
  const taxPrice = decimalFormatter(itemsPrice * 0.15);
  const shippingPrice = itemsPrice < 100 ? 30 : 0;
  const totalPrice = decimalFormatter(itemsPrice + taxPrice + shippingPrice);

  const onSubmitHandler = () =>
    createNewOrder({ cartItems, shippingAddress, paymentMethod });

  return (
    <CheckoutContainer>
      <CheckoutSteps currStep={3} />
      <CheckoutField field={"Shipping Address"} value={fullAddress} />
      <Divider />
      <CheckoutField field={"Payment Method"} value={paymentMethod} />
      <Divider />
      <CheckoutField
        justify="between"
        field={"Cart Items Subtotal"}
        value={`$${itemsPrice}`}
      />
      <CheckoutField
        justify="between"
        field={"Tax Price"}
        value={`$${taxPrice}`}
      />
      <CheckoutField
        justify="between"
        field={"Shipping Price"}
        value={`$${shippingPrice}`}
      />
      <Divider />
      <CheckoutField
        justify="between"
        field={"Total Amount Payable"}
        value={`$${totalPrice}`}
      />
      <CheckoutButtonGroup
        prev={"/checkout/payment"}
        onClick={onSubmitHandler}
      />
    </CheckoutContainer>
  );
}
export default PlaceOrder;
