const colors = ["red", "red", "green", "blue", "green"];

const uniqueColors = colors.reduce(
  (uniqe, color) => (uniqe.indexOf(color) !== -1 ? uniqe : [...uniqe, color]),
  []
);

console.log(uniqueColors);
