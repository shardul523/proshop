import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const SAMPLE_PRODUCTS = Array.from({ length: 3 }, (_, i) => i + 1);

function PlaceholderCarousel() {
  return (
    <Carousel
      opts={{ loop: true, align: "start" }}
      className=" max-w-screen-lg my-5 mx-auto"
    >
      <CarouselContent>
        {SAMPLE_PRODUCTS.map((product) => (
          <CarouselItem key={product} className="md:basis-1/2 lg:basis-1/3">
            <div className="h-60 w-96 bg-gray-400" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
export default PlaceholderCarousel;
