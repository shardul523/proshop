import { useSearchParams } from "react-router-dom";

import Container from "../components/common/Container";
import LatestProducts from "../components/products/LatestProducts";
import ProductsPaginate from "../components/products/ProductsPaginate";
import TopProducts from "../components/products/TopProducts";
import BackButton from "../components/common/BackButton";

function HomePage() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  return (
    <Container>
      {!search ? (
        <>
          <TopProducts />
          <h2 className="font-semibold text-primary-800 text-3xl mt-5 mb-10 lg:mx-0 mx-4">
            Latest Products
          </h2>
        </>
      ) : (
        <div className="flex gap-2 items-center mt-5 mb-10 lg:mx-0 mx-4">
          <BackButton to={"/"} />
          <h2 className="font-semibold text-primary-800 text-3xl">
            Search results for {search}
          </h2>
        </div>
      )}
      <LatestProducts />
      <ProductsPaginate />
    </Container>
  );
}

export default HomePage;
