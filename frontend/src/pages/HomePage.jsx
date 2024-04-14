import Container from "../components/common/Container";
import LatestProducts from "../components/products/LatestProducts";
import ProductsPaginate from "../components/products/ProductsPaginate";

function HomePage() {
  return (
    <Container>
      <h1 className="font-semibold text-primary-800 text-3xl mt-5 mb-10 lg:mx-0 mx-4">
        Latest Products
      </h1>
      <LatestProducts />
      <ProductsPaginate />
    </Container>
  );
}

export default HomePage;
