const list = [{ title: 'Rad Red' }, { title: 'Lawn' }, {title: 'Party Pink'}];

const addColorMutable = function(title, colors) {
    colors.push({ title: title });
    return colors;
};

console.log('addColorMutable: ' + addColorMutable('Glam Green', list).length);
console.log('list: ' + list.length);

list.pop()

const addColorImmutable = (title, colors) => colors.concat({ title });
console.log('addColorImmutable ' + addColorImmutable('Glam Green', list).length);
console.log('list: ' + list.length);

const addColorImmutableWithSpread = (title, colors) => [...colors, { title }];
console.log('addColorImmutableWithSpread: ' + addColorImmutableWithSpread('Glam Green', list).length);
console.log('list: ' + list.length);