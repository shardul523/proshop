import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";

import Rating from "./Rating";

function ProductCard({ product }) {
  return (
    <Card className="w-56">
      <CardHeader>
        <img className="h-36 w-44" src={product.image} />
      </CardHeader>
      <CardContent className="text-nowrap overflow-hidden text-ellipsis p-4 pt-0">
        <Link
          className="hover:underline underline-offset-2"
          to={`/products/${product._id}`}
        >
          {product.name}
        </Link>
      </CardContent>
      <CardFooter className="flex flex-col p-4 pt-0 gap-3 items-start">
        <Rating
          rating={product.rating}
          text={`${product.numReviews} reviews`}
        />
        <span className="text-lg font-medium ">${product.price}</span>
      </CardFooter>
    </Card>
    // <div className=" flex flex-col max-w-56 bg-white px-4 py-3 rounded-md">
    //   <div className=" align-middle mb-4">
    //     <img className="h-40 w-48" src={product.image} />
    //   </div>
    //   <span className=" hover:underline mb-3 text-nowrap text-ellipsis overflow-hidden">
    //     <Link to={`/products/${product._id}`}>{product.name}</Link>
    //   </span>
    //   <Rating rating={product.rating} text={`${product.numReviews} reviews`} />
    //   <span className="text-lg font-medium">${product.price}</span>
    // </div>
  );
}

export default ProductCard;
