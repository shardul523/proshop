import ProductCard from "../components/products/ProductCard";
import Loader from "../components/ui/Loader";
import Container from "../components/common/Container";
import { useAllProducts } from "../hooks/productsHooks";

function HomePage() {
  const { allProducts, isPending } = useAllProducts();

  if (isPending) return <Loader />;

  if (!allProducts) return <p>No products found</p>;

  return (
    <Container>
      <h1 className="font-semibold text-primary-800 text-3xl mt-5 mb-10 lg:mx-0 mx-4">
        Latest Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 items-center place-items-center gap-5">
        {allProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </Container>
  );
}

export default HomePage;
