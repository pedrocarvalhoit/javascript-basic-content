const students = ["João", "Juliana", "Ana", "Caio"];
const averages = [10, 8, 7.5, 9];

const studentsWithAvarages = [students, averages];

//0 call students and 1 call Juliana
console.log(`Position 1 student is: ${studentsWithAvarages[0][1]}, and the avarege is ${studentsWithAvarages[1][1]}`);

//Student searching
function searchForStudent(student){
    if (studentsWithAvarages[0].includes(student)) {
        const [students, avarages] = studentsWithAvarages;

        console.log(`The student ${student} is in the list`);
        const index = students.indexOf(student);
        const avarege = avarages[index];
        console.log(`${student} has avarage ${avarege}`)
    }else{
        console("Student not found")
    }
}
searchForStudent("João");