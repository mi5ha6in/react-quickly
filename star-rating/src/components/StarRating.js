import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const createArray = (length) => [...Array(length)];

const Star = ({ selected = false }) => (
  <FaStar color={selected ? "red" : "grey"} />
);

export default function StarRating({ totalStar = 5 }) {
  const [selectedStars] = useState(3);
  return (
    <>
      {createArray(totalStar).map((item, index) => (
        <Star key={index} selected={selectedStars > index} />
      ))}
      <p>
        {selectedStars} of {totalStar} stars
      </p>
    </>
  );
}
