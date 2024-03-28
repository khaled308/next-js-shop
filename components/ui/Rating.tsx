import { FaStar } from "react-icons/fa";

const Rating = ({ rating }: { rating: number }) => {
  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            className={`cursor-pointer ${
              starValue <= rating ? "text-yellow-500" : "text-gray-400"
            }`}
          >
            <FaStar />
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
