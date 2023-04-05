const arr = [1, -2, 2, 3, 4];

const filtered = arr.filter(n => n >= 0);

// const items = filtered.map(n => '<li>' + n + '</li>')
// const html = '<ul>' + items.join('') + '</ul>';

// console.log(html);

// const items = filtered.map(n => ({ value: n }));

const items = arr
    .filter(n => n >= 0)
    .map(n => ({ value: n }))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

console.log(items);

// from line 12 - 15 we are actually chaining the process