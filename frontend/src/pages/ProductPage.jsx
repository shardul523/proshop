import { useParams } from "react-router-dom";

import Container from "../components/common/Container";
import Rating from "../components/products/Rating";
import LinkButton from "../components/common/LinkButton";
import Divider from "../components/common/Divider";
import Loader from "../components/ui/Loader";
import ProductStatus from "../components/products/ProductStatus";

import { useProduct } from "../hooks/productsHooks";

function ProductPage() {
  const { productId } = useParams();
  const { product, isPending } = useProduct(productId);

  if (isPending) return <Loader />;

  if (!product) return <p>No Product FOund</p>;

  const inStock = product.countInStock > 0;
  const { image, name, rating, numReviews, description } = product;

  return (
    <Container>
      <LinkButton to={-1}>Go Back</LinkButton>
      <div className="flex flex-col items-center lg:grid grid-cols-12">
        <div className="col-span-3 p-2 rounded-md bg-slate-100 md:w-96 lg:w-full w-80">
          <img className="rounded-md" alt="product" src={image} />
        </div>
        <div className="grid-cols-1"></div>
        <div className="col-span-4 flex flex-col px-3">
          <span className="py-5">{name}</span>
          <Divider />
          <span className="py-5">
            <Rating rating={rating} text={`${numReviews} reviews`} />
          </span>
          <Divider />
          <span className="py-5">
            <span className="font-semibold">Description:</span> {description}
          </span>
        </div>
        <div className="col-span-1" />
        <div className="col-span-3 w-full bg-slate-100 rounded py-3">
          <ProductStatus inStock={inStock} currProduct={product} />
        </div>
      </div>
    </Container>
  );
}
export default ProductPage;
