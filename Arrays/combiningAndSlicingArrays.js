const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// const newArray = array1.concat(array2);

const newArray = [...array1, ...array2]; // spread operator
// with the spread operator we can directly add elements in the output array

const newArray2 = newArray.slice(2, 4);

console.log(newArray);
console.log(newArray2);