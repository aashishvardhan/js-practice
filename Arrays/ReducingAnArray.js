const num = [1, -1, 2, 3]

// let sum = 0
// for (let n of num)
//     sum += n

let sum = num.reduce(
    (accumulator, currentValue) => (accumulator + currentValue)
)

console.log(sum)