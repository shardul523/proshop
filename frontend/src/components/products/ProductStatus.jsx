import Divider from "../common/Divider";
import ProductQtyControl from "./ProductQtyControl";
import ProductStatField from "./ProductStatField";

function ProductStatus({ currProduct, inStock }) {
  return (
    <>
      <ProductStatField label={"Price"} value={`$ ${currProduct.price}`} />
      <Divider />
      <ProductStatField
        label={"Status"}
        value={inStock ? "In Stock" : "Out of Stock!"}
      />

      {inStock && <ProductQtyControl currProduct={currProduct} />}
    </>
  );
}
export default ProductStatus;
