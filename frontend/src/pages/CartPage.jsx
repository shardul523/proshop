import Container from "../components/common/Container";
import ShoppingCart from "../components/cart/ShoppingCart";
import CartOverview from "../components/cart/CartOverview";

function CartPage() {
  return (
    <Container>
      <div className="lg:grid lg:flex-none flex flex-col grid-cols-5 gap-5 w-full">
        <div className="col-span-3 flex flex-col gap-5">
          <ShoppingCart />
        </div>
        <div className="col-span-2">
          <CartOverview />
        </div>
      </div>
    </Container>
  );
}
export default CartPage;
