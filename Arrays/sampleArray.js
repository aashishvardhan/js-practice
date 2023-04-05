const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'}
];

const course = courses.find(function(course) {
    return course.name === 'a';
})

const course2 = courses.find(course => course.name === 'a');

console.log(course);
