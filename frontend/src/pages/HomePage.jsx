import { useQuery } from "@tanstack/react-query";

import { productsLoader } from "../services/loaders";

import ProductCard from "../components/products/ProductCard";
import Loader from "../components/ui/Loader";
import Container from "../components/common/Container";

function HomePage() {
  const { data: products, status } = useQuery({
    queryKey: ["products"],
    queryFn: productsLoader,
  });

  if (status === "pending") return <Loader />;

  if (!products) return <p>No products found</p>;

  return (
    <Container>
      <h1 className="font-semibold text-3xl mt-5 mb-10 lg:mx-0 mx-4">
        Latest Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center place-items-center gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </Container>
  );
}

export default HomePage;
