import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Rating = ({
  rating,
  className,
}: {
  rating: number;
  className?: string;
}) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className={`flex w-fit ${className}`}>
      {[...Array(fullStars)].map((_, index) => (
        <span key={index} className="text-yellow-500">
          <FaStar />
        </span>
      ))}
      {hasHalfStar && (
        <span className="text-yellow-500">
          <FaStarHalfAlt />
        </span>
      )}
      {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
        <span
          key={fullStars + (hasHalfStar ? 1 : 0) + index}
          className="text-gray-400"
        >
          <FaStar />
        </span>
      ))}
    </div>
  );
};

export default Rating;
