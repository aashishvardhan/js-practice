const arr = [1, 2, 4, 3, 7, 1, 2]

function getMax(arr) {
    if (arr.length === 0) return undefined;
    arr.reduce((a, b) => (a > b) ? a : b)
}