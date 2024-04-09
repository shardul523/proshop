import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getAllItemsQty } from "../components/cart/cartSlice";

function CheckoutRoute() {
  const cartItemsQty = useSelector(getAllItemsQty);

  return cartItemsQty === 0 ? <Navigate to={"/"} /> : <Outlet />;
}
export default CheckoutRoute;
