import Title from "../components/common/Title";
import Table from "../components/common/Table";
import TableHeader from "../components/common/TableHeader";
import TableBody from "../components/common/TableBody";

function CartPage() {
  const headings = ["Name", "Price", "Quantity"];

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-3">
        <Title>Shopping Cart</Title>
        <Table>
          <TableHeader headings={headings} />
          <TableBody orderItems={[{ product: 1 }, { product: 2 }]} />
        </Table>
      </div>
    </div>
  );
}
export default CartPage;
