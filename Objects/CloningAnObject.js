const circle = {
    radius: 1,
    draw() {
        console.log('drew');
    }
};

// const another = {};
// for (key in circle) {
//     another[key] = circle[key];
// }

const another = Object.assign({ color: 'yellow' }, circle)

console.log(another);


const another2 = {...circle};