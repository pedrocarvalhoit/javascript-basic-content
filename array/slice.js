const students = [
    "João",
    "Juliana",
    "Ana",
    "Caio",
    "Lara",
    "Marjorie",
    "Guilherme",
    "Aline",
    "Fabiana",
    "Andre",
    "Carlos",
    "Paulo",
    "Bia",
    "Vivian",
    "Isabela",
    "Vinícius",
    "Renan",
    "Renata",
    "Daisy",
    "Camilo",
];

//Will return names on position 3 to 9 AND NOT 10
const someStudents = students.slice(3, 10);
console.log(someStudents);

//Starting on first element
const classA = students.slice(0, students.length/2);
const classB = students.slice(students.length/2);

console.log("Students class A: " + classA);
console.log("Students class B: " + classB);