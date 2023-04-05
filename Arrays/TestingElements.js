const arr = [1, 2, 3, 4]
const arr2 = [1, 2, -3, 4]

const isAllPositive = arr.every(function(value) {
    return value>= 0;
});

const isAllPositive2 = arr2.every(function(value) {
    return value>= 0;
});

console.log(isAllPositive);
console.log(isAllPositive2);

const isNegative = arr2.some(function(value) {
    return value <= 0;
});

console.log(isNegative);
