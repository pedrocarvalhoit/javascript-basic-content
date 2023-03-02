const names = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

//Starts, Remove, Replace
//Starts posicion 1, remove 2 elements and replace with otherelse
names.splice(1, 2);
console.log(names);

names.splice(1, 2, "Pedro Duarte");
console.log("Replaced whit PD -> " + names);