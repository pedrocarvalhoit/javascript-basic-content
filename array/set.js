//Exlcude the repeated names
const names = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
console.log(names);

const mySet = new Set(names);
console.log(mySet);

//Converting set to array
const updatedNames = [...new Set(names)];
console.log("Array: " + updatedNames);