import Divider from "../common/Divider";
import ProductStatus from "./ProductStatus";
import Rating from "./Rating";

function ProductDetails({ product }) {
  const inStock = product.countInStock > 0;
  const { image, name, rating, numReviews, description } = product;

  return (
    <div className="flex flex-col items-center lg:grid grid-cols-12 ml-5 mt-2">
      <div className="col-span-3 p-2 rounded-md bg-slate-100 md:w-96 lg:w-full w-80 mx-auto">
        <img className="rounded-md" alt="product" src={image} />
      </div>
      <div className="grid-cols-1"></div>
      <div className="col-span-4 flex flex-col px-3 bg-secondary-100 rounded">
        <span className="py-5 text-lg font-medium text-wrap">{name}</span>
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
      <div className="col-span-3 w-full bg-slate-50 border border-slate-200 shadow rounded py-3">
        <ProductStatus inStock={inStock} currProduct={product} />
      </div>
    </div>
  );
}
export default ProductDetails;
