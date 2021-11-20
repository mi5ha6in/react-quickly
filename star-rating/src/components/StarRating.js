import React from "react";
import { FaStar } from "react-icons/fa";

const createArray = (length) => [...Array(length)];

const Star = ({ selected = false }) => (
  <FaStar color={selected ? "red" : "grey"} />
);

export default function StarRating({ totalStar = 5 }) {
  return createArray(totalStar).map((item, index) => <Star key={index} />);
}
