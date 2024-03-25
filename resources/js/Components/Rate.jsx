import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function Rate ({ totalStars,initialValue,onChange }) {
  const [rating, setRating] = useState(initialValue);

  totalStars = Math.round(totalStars)
  const handleClick = (index) => {
    if (!disabled) {
      const rate = index + 1;
      setRating(rate);
      if (onChange) onChange(rate);
    }
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