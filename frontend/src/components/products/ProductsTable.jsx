import ProductDeleteButton from "@/components/products/ProductDeleteButton";
import Table from "@/components/common/Table";
import TableHeader from "@/components/common/TableHeader";
import TableBody from "@/components/common/TableBody";
import TableRow from "@/components/common/TableRow";
import Td from "@/components/common/Td";
import Loader from "@/components/ui/Loader";
import LinkButton from "../common/LinkButton";

import { useAllProducts } from "@/hooks/productsHooks";

function ProductsTable() {
  const { allProducts, isPending } = useAllProducts();

  if (isPending) return <Loader />;

  return (
    <Table>
      <TableHeader
        headings={["ID", "Name", "Price", "Category", "Brand", "", ""]}
      />
      <TableBody>
        {allProducts.map((product) => (
          <TableRow key={product._id}>
            <Td>{product._id}</Td>
            <Td>{product.name}</Td>
            <Td>$ {product.price}</Td>
            <Td>{product.category}</Td>
            <Td>{product.brand}</Td>
            <Td>
              <ProductDeleteButton productId={product._id} />
            </Td>
            <Td className="flex items-center">
              <LinkButton variant={"neutral"} to={`/products/${product._id}`}>
                Details
              </LinkButton>
            </Td>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
export default ProductsTable;
