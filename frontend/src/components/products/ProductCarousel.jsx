import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

function ProductCarousel({ products }) {
  return (
    <Carousel
      opts={{ loop: true, align: "start" }}
      className=" max-w-screen-lg my-5 mx-auto"
    >
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem key={product._id} className="md:basis-1/2 lg:basis-1/3">
            <Link
              to={`/products/${product._id}`}
              className="cursor-pointer h-60 w-96"
            >
              <img src={product.image} alt={product.name} />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
export default ProductCarousel;
