import ReviewForm from "../products/ReviewForm";
import Rating from "./Rating";

function ProductReviewSection() {
  return (
    <div className="md:grid grid-cols-3 gap-10 flex flex-col mt-5">
      <ReviewForm />
      <div className="col-span-2">
        <h3 className="bg-secondary-300 text-secondary-700 text-lg px-3 py-2 rounded">
          Reviews
        </h3>
        <div className="overflow-auto">
          <div className="border-b-2 p-4 border-secondary-300">
            <Rating rating={5} />
            <span className="text-sm font-medium mb-1">John Smith</span>
            <h4 className="font-medium my-2">Fantastic Product</h4>
            <p className="text-sm">A wonderful smartphone!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductReviewSection;
