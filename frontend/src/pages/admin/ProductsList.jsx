import { Link } from "react-router-dom";

import ProductDeleteButton from "../../components/products/ProductDeleteButton";
import Table from "../../components/common/Table";
import TableHeader from "../../components/common/TableHeader";
import TableBody from "../../components/common/TableBody";
import TableRow from "../../components/common/TableRow";
import Td from "../../components/common/Td";
import Loader from "../../components/ui/Loader";
import { useAllProducts } from "../../hooks/productsHooks";
import Button from "../../components/common/Button";
import { FaPlus } from "react-icons/fa";

function ProductsList() {
  const { allProducts, isPending } = useAllProducts();

  if (isPending) return <Loader />;

  return (
    <>
      <h3 className="text-2xl font-semibold">Products</h3>
      <div className="flex justify-end items-center">
        <Button>
          <FaPlus />
          <span>Add New Product</span>
        </Button>
      </div>
      <Table>
        <TableHeader
          headings={["ID", "Name", "Price", "Category", "Brand", ""]}
        />
        <TableBody>
          {allProducts.map((product) => (
            <TableRow key={product._id}>
              <Td>
                <Link
                  className="hover:underline underline-offset-2"
                  to={`/products/${product._id}`}
                >
                  {product._id}
                </Link>
              </Td>
              <Td>{product.name}</Td>
              <Td>$ {product.price}</Td>
              <Td>{product.category}</Td>
              <Td>{product.brand}</Td>
              <Td>
                <div>
                  <ProductDeleteButton productId={product._id} />
                </div>
              </Td>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
export default ProductsList;
