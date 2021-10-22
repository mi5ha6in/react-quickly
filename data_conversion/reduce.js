const ages = [21, 18, 42, 40, 64, 63, 34];

const maxAge = ages.reduce((max, age) => {
  console.log(`${age} > ${max} = ${age > max}`);
  if (age > max) {
    return age;
  } else {
    return max;
  }
}, 0);

console.log("maxAge:", maxAge);

function findeMax(sequence) {
  return sequence.reduce((max, value) => (value > max ? value : max), 0);
}

const findeMaxArrow = (sequence) =>
  sequence.reduce((max, value) => Math.max(max, value), 0);
console.log(`Maximium of: [${ages}] is ${findeMaxArrow(ages)}`);
