import { useSearchParams } from "react-router-dom";

import ProductCard from "./ProductCard";
import PlaceholderProductCard from "./PlaceholderProductCard";

import { useAllProducts } from "../../hooks/productsHooks";

const SAMPLE_PRODUCTS = [1, 2, 3, 4];

function LatestProducts() {
  const [searchParams] = useSearchParams();
  const currPage = searchParams.get("page");
  const { allProducts, isPending } = useAllProducts(currPage);

  return (
    <div className="grid grid-rows-2 lg:grid-rows-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center place-items-center gap-5">
      {isPending
        ? SAMPLE_PRODUCTS.map((x) => <PlaceholderProductCard key={x} />)
        : allProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
    </div>
  );
}

export default LatestProducts;
