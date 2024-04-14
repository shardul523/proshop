import { useSearchParams } from "react-router-dom";
import Container from "../components/common/Container";
import LatestProducts from "../components/products/LatestProducts";
import ProductsPaginate from "../components/products/ProductsPaginate";
import TopProducts from "../components/products/TopProducts";

function HomePage() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  // console.log(search, !search);

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
        <h2 className="font-semibold text-primary-800 text-3xl mt-5 mb-10 lg:mx-0 mx-4">
          Search results for {search}
        </h2>
      )}
      <LatestProducts />
      <ProductsPaginate />
    </Container>
  );
}

export default HomePage;
