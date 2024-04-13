import Rating from "./Rating";

function Review({ review }) {
  const { user, title, description, rating } = review;
  return (
    <div className="border-b-2 p-4 border-secondary-300">
      <Rating rating={rating} />
      <span className="text-sm font-medium mb-1">{user.name}</span>
      <h4 className="font-medium my-2">{title}</h4>
      <p className="text-sm">{description}</p>
    </div>
  );
}

export default Review;
