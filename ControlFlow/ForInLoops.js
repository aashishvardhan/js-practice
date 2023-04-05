const person = {
    name: 'Aashish',
    age: 20
};

for (let i in person)
    console.log(i, person[i]);

// but for arrays, i will be set to the index of the element but not to the 
// element directly.

const colors = ['black', 'blue', 'pink']
for (let color in colors)
    console.log(color, colors[color]);