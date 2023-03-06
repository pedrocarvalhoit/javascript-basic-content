const avarages = [7, 8, 8, 7];

//Doing like this, newAvarages will be the same varible as avarages
const newAvarages = avarages;

//Correct way to copy the array
const newAvaragesCopy = [...avarages, 10]; //Adding 10 automatically

console.log(`New avarages are ${newAvaragesCopy}`);
console.log(`Original avarages are ${avarages}`);
