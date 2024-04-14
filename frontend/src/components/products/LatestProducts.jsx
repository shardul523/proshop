import { Alert, AlertTitle, AlertDescription } from "../ui/alert";
import ProductCard from "./ProductCard";
import PlaceholderProductCard from "./PlaceholderProductCard";

import { useAllProducts } from "../../hooks/productsHooks";

const SAMPLE_PRODUCTS = [1, 2, 3, 4];

function LatestProducts() {
  const { allProducts, isPending } = useAllProducts();

  if (!isPending && (!allProducts || allProducts.length === 0))
    return (
      <Alert className="bg-primary-200 text-primary-800">
        <AlertTitle className="font-medium">No Results found</AlertTitle>
        <AlertDescription className="text-sm">
          No products were found for the given search query
        </AlertDescription>
      </Alert>
    );

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
