const averages = [10, 8, 7.5, 9];

let avarageSum = 0;

for(let i = 0; i < averages.length; i++){
    avarageSum += averages[i];
}

const classAvarage = avarageSum/ averages.length;
console.log(`The class avarage is ${classAvarage}`);
