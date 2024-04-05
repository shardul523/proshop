import { useSelector } from "react-redux";

import Table from "../components/common/Table";
import TableHeader from "../components/common/TableHeader";
import TableBody from "../components/common/TableBody";
import { getAllItemsQty, getTotalSum } from "../components/cart/cartSlice";
import Divider from "../components/common/Divider";
import LinkButton from "../components/common/LinkButton";
import Container from "../components/common/Container";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const allCartItems = useSelector(getAllItemsQty);
  const allItemsSum = useSelector(getTotalSum);

  return (
    <Container>
      <div className="lg:grid lg:flex-none flex flex-col grid-cols-5 gap-5 w-full px-4 lg:px-10">
        <div className="col-span-3 flex flex-col gap-5">
          <h1 className="text-3xl font-semibold">Shopping Cart</h1>
          <Table>
            <TableHeader />
            <TableBody items={cartItems} />
          </Table>
        </div>
        <div className="col-span-2">
          <div className="bg-secondary-100 text-primary-600 p-2 rounded">
            <div className="space-y-5">
              <h1 className="text-2xl font-medium">
                Subtotal ({allCartItems}) Items
              </h1>
              <div className="text-lg">$ {allItemsSum}</div>
            </div>
            <Divider />
            <div className="bg-secondary-100 text-primary-600 p-2">
              <LinkButton to={"/sign-in?redirect=shipping"}>
                Proceed to Checkout
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default CartPage;
