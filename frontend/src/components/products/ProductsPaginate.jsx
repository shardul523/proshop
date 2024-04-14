import Paginate from "../ui/Paginate";

import { useAllProducts } from "../../hooks/productsHooks";
import { useMemo } from "react";

function ProductsPaginate() {
  const { pageCount } = useAllProducts();

  const pages = useMemo(
    () => Array.from({ length: pageCount || 1 }, (_, i) => i + 1),
    [pageCount]
  );

  if (!pageCount) return;

  return <Paginate pages={pages} />;
}

export default ProductsPaginate;
