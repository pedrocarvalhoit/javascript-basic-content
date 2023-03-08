const averages = [10, 8, 7.5, 9, 9.5, 9.7];

const newAvarages = averages.map((nota) => {
   //avarage is bigger than 10? if it is return 10, if is not return avarage +1
    return nota + 1 >= 10 ? 10 : nota + 1;
});

console.log(newAvarages);

// Names
const names = ["ana Julia", "Caio vinicius", "BIA silva"];

const namesUpperCase = names.map((names)=> names.toUpperCase());
console.log(namesUpperCase);