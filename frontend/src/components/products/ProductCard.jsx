import { Link } from "react-router-dom";
import Rating from "./Rating";

function ProductCard({ product }) {
  return (
    <div className=" flex flex-col max-w-56 bg-white px-4 py-3 rounded-md">
      <div className=" align-middle mb-4">
        <img className="h-40 w-48" src={product.image} />
      </div>
      <span className=" hover:underline mb-3 text-nowrap text-ellipsis overflow-hidden">
        <Link to={`/products/${product._id}`}>{product.name}</Link>
      </span>
      <Rating rating={product.rating} text={`${product.numReviews} reviews`} />
      <span className="text-lg font-medium">${product.price}</span>
    </div>
  );
}

export default ProductCard;
