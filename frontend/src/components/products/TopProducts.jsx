import ProductCarousel from "./ProductCarousel";

import { useTopProducts } from "../../hooks/productsHooks";
import PlaceholderCarousel from "./PlaceholderCarousel";

function TopProducts() {
  const { topProducts, isPending } = useTopProducts();

  if (isPending) return <PlaceholderCarousel />;

  return <ProductCarousel products={topProducts} />;
}

export default TopProducts;
