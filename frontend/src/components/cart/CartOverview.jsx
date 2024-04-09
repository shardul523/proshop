import { useSelector } from "react-redux";
import Divider from "../common/Divider";
import LinkButton from "../common/LinkButton";
import { getAllItemsQty, getTotalSum } from "./cartSlice";

function CartOverview() {
  const allCartItems = useSelector(getAllItemsQty);
  const allItemsSum = useSelector(getTotalSum);
  return (
    <div className="bg-secondary-100 text-primary-600 p-2 rounded">
      <div className="space-y-5">
        <h1 className="text-2xl font-medium">
          Subtotal ({allCartItems}) Items
        </h1>
        <div className="text-lg">$ {allItemsSum}</div>
      </div>
      {allCartItems > 0 && (
        <>
          <Divider />
          <div className="bg-secondary-100 text-primary-600 p-2">
            <LinkButton to={"/sign-in?redirect=checkout/shipping"}>
              Proceed to Checkout
            </LinkButton>
          </div>
        </>
      )}
    </div>
  );
}
export default CartOverview;
