let circle = {
    radius: 1
}

circle.color = 'black';
circle.draw = function() {}

console.log(circle);

delete circle.color;
delete circle.draw;

console.log(circle);