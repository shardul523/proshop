import { FaPlus } from "react-icons/fa";

import LinkButton from "@/components/common/LinkButton";
import ProductsTable from "@/components/products/ProductsTable";

function ProductsList() {
  return (
    <>
      <h3 className="text-2xl font-semibold">Products</h3>
      <div className="flex justify-end items-center">
        <LinkButton to={"new"}>
          <FaPlus />
          <span>Add New Product</span>
        </LinkButton>
      </div>
      <ProductsTable />
    </>
  );
}
export default ProductsList;
