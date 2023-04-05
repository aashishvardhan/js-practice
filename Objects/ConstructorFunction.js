function Circle(radius) {
    this.radius = radius
    this.draw() = function() {
        console.log('Drew a circle with radius: ', radius);
    }
}

const circle = new Circle(2);