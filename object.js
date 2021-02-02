const student = [

    {id: 21, name: "Masud"},
    {id: 32, name: "Emon"},
    {id: 31, name: "Mishal"},
    {id: 35, name: "Anas"}
];


const names = student.map( s => s.name);
const ids = student.map(s => s.id)
// console.log(ids);
// console.log(names)

const bigger = student.filter(s => s.id>30);
// console.log(bigger)
const biggerOne = student.find(s => s.id>30);
console.log(biggerOne)