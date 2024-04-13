import ReviewForm from "../products/ReviewForm";
import Reviews from "./Reviews";

function ProductReviewSection() {
  return (
    <div className="md:grid grid-cols-3 gap-10 flex flex-col mt-5">
      <ReviewForm />
      <div className="col-span-2">
        <Reviews />
      </div>
    </div>
  );
}
export default ProductReviewSection;
