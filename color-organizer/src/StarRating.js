import React from "react";
import { FaStar } from "react-icons/fa";

const createArray = (length) => [...Array(length)];

const Star = ({ selected = false, onSelect = (f) => f }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

export default function StarRating({
  totalStar = 5,
  selectedStars,
  onRate = (f) => f,
}) {
  return (
    <>
      {createArray(totalStar).map((item, index) => (
        <Star
          key={index}
          selected={selectedStars > index}
          onSelect={() => onRate(index + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStar} stars
      </p>
    </>
  );
}
