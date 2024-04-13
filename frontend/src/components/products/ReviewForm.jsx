import { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Loader from "../ui/Loader";
import Button from "../common/Button";
import FormInput from "../common/FormInput";
import FormTextarea from "../common/FormTextarea";
import {
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  Select,
} from "../ui/select";
import { Alert, AlertDescription } from "../ui/alert";

import { useAddProductReview } from "../../hooks/productsHooks";
import { useProfile } from "@/hooks/userHooks";

function ReviewForm() {
  const { productId } = useParams();
  const { addProduct, isPending } = useAddProductReview(productId);
  const [rating, setRating] = useState();
  const titleRef = useRef();
  const descRef = useRef();
  const { auth, isPending: isProfileLoading } = useProfile();

  const onReviewAdd = () => {
    const title = titleRef.current.value;
    const description = descRef.current.value;

    addProduct({ title, description, rating });
  };

  if (isProfileLoading) return <Loader />;

  return (
    <div className="space-y-5">
      <h3 className="bg-secondary-300 text-secondary-700 text-lg px-3 py-2 rounded">
        Write a customer review
      </h3>
      {!auth?.isLoggedIn ? (
        <Alert className="bg-primary-200 text-primary-800">
          <AlertDescription>
            You need to{" "}
            <Link
              className="hover:underline underline-offset-1 font-medium"
              to={"/sign-in"}
            >
              sign in
            </Link>
            to write a review.
          </AlertDescription>
        </Alert>
      ) : (
        <>
          <Select required value={rating} onValueChange={setRating}>
            <SelectTrigger className=" w-full bg-secondary-50">
              <SelectValue placeholder={"Rating"} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={5}>5 (Great)</SelectItem>
              <SelectItem value={4}>4 (Good)</SelectItem>
              <SelectItem value={3}>3 (Average)</SelectItem>
              <SelectItem value={2}>2 (Bad)</SelectItem>
              <SelectItem value={1}>1 (Worst)</SelectItem>
            </SelectContent>
          </Select>
          <FormInput inputRef={titleRef} placeholder={"Title"} />
          <FormTextarea
            inputRef={descRef}
            placeholder={"Write your comments"}
          />
          <div className="flex justify-end">
            <Button
              onClick={onReviewAdd}
              disabled={isPending}
              variant={"neutral"}
            >
              Submit
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
export default ReviewForm;
