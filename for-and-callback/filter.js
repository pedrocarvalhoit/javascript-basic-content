const averages = [6, 8, 4, 9,];
const names = ["ana Julia", "Caio vinicius", "BIA silva", "Pedro"];

//Final test
const averagesClassA = [10, 8, 7.5, 4]

const aprovedStudents = names.filter((_, index) =>{
    return averages[index] >= 7;
});

console.log(aprovedStudents);


