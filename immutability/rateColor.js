const color_lawn = {
    title: 'lawn',
    color: '#00ff00',
    rating: 0
};

function rateColorMutable(color, rating) {
    color.rating = rating;
    return color;
}

console.log(rateColorMutable(color_lawn, 5).rating)
console.log(color_lawn.rating);


function rateColorImmutabel(color, rating) {
    return Object.assign({}, color, {rating: rating})
}

console.log(rateColorImmutabel(color_lawn, 10).rating)
console.log(color_lawn.rating);

const rateColorImmutabelArrow = (color, rating) => ({
    ...color,
    rating
});

console.log(rateColorImmutabelArrow(color_lawn, 15).rating)
console.log(color_lawn.rating);