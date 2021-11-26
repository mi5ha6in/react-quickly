import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const createArray = (length) => [...Array(length)];

const Star = ({ selected = false, onSelect = (f) => f }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

export default function StarRating({ style = {}, totalStar = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <div style = {{ padding: "5px", ...style }}>
      {createArray(totalStar).map((item, index) => (
        <Star
          key={index}
          selected={selectedStars > index}
          onSelect={() => setSelectedStars(index + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStar} stars
      </p>
    </div>
  );
}
