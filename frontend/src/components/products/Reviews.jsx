import { useParams } from "react-router-dom";
import Loader from "../ui/Loader";
import Review from "./Review";
import { Alert, AlertDescription } from "../ui/alert";

import { useProductReviews } from "../../hooks/productsHooks";

function Reviews() {
  const { productId } = useParams();
  const { reviews, isPending } = useProductReviews(productId);

  if (isPending) return <Loader />;

  return (
    <>
      <h3 className="bg-secondary-300 text-secondary-700 text-lg px-3 py-2 rounded">
        Reviews
      </h3>
      {reviews.length ? (
        <div>
          {reviews.map((review) => (
            <Review review={review} key={review.reviewId} />
          ))}
        </div>
      ) : (
        <Alert className="mt-5 text-primary-800 bg-primary-200">
          <AlertDescription>No Reviews Yet</AlertDescription>
        </Alert>
      )}
    </>
  );
}

export default Reviews;
