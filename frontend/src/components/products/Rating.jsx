import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const numRatings = 5;
const ratingVal = Array.from({ length: numRatings }, (_, i) => i + 1);

function Rating({ text, rating }) {
  return (
    <div className="flex items-center justify-between gap-4 w-full">
      <span className="flex text-yellow-400">
        {ratingVal.map((val) => {
          if (rating >= val) return <FaStar key={val} />;
          if (rating >= val - 0.5) return <FaStarHalfAlt key={val} />;
          return <FaRegStar key={val} />;
        })}
      </span>
      {text && <span>{text}</span>}
    </div>
  );
}
export default Rating;
