const courses = [
    { id: 1, name: 'Python'},
    { id: 2, name: 'JavaScript'}
];

const sortedCourses = courses.sort(function(a, b) {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

console.log(sortedCourses);