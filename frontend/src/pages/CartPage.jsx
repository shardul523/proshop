import { useSelector } from "react-redux";

import Table from "../components/cart/Table";
import TableHeader from "../components/cart/TableHeader";
import TableBody from "../components/cart/TableBody";
import { getAllItemsQty, getTotalSum } from "../components/cart/cartSlice";
import Divider from "../components/common/Divider";
import LinkButton from "../components/common/LinkButton";

function CartPage() {
  const headings = ["", "Name", "Price", "Quantity", "Total", ""];
  const allCartItems = useSelector(getAllItemsQty);
  const allItemsSum = useSelector(getTotalSum);

  return (
    <div className="lg:grid lg:flex-none flex flex-col grid-cols-5 gap-5 w-full">
      <div className="col-span-3 flex flex-col gap-5">
        <h1 className="text-3xl font-semibold">Shopping Cart</h1>
        <Table>
          <TableHeader headings={headings} />
          <TableBody orderItems={[{ product: 1 }, { product: 2 }]} />
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
  );
}
export default CartPage;
