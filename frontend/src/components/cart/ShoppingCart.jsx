import { useSelector } from "react-redux";
import CartItemsTable from "./CartItemsTable";

function ShoppingCart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isCartEmpty = cartItems.length === 0;

  return (
    <>
      <h1 className="text-3xl font-semibold">Shopping Cart</h1>
      {isCartEmpty ? (
        <span>No items inside cart</span>
      ) : (
        <CartItemsTable cartItems={cartItems} />
      )}
    </>
  );
}
export default ShoppingCart;
