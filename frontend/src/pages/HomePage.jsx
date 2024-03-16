import ProductCard from "../components/products/ProductCard";
import products from "../products";

function HomePage() {
  return (
    <>
      <h1 className="font-semibold text-3xl mt-5 mb-10">Latest Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center place-items-center gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
