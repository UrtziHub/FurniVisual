import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ totalStars,onChange }) => {
  const [rating, setRating] = useState(3);

  const handleClick = (index) => {
    const rate = index + 1
    setRating(rate);
    onChange(rate);
  };

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => {
        const filled = index < rating;
        return (
          <FaStar
            key={index}
            className={`cursor-pointer inline-block w-6 h-6 ${
              filled ? 'text-yellow-400' : 'text-gray-400'
            }`}
            onClick={() => handleClick(index)}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
