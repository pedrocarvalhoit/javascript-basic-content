//Number
const myNumber = 3;

const num1 =1;
const num2 =2;

const add = num1 + num2;

console.log(add)

//Float
const floatNumber = 3.3;
const floatNumber2 = 0.5;

const div = num1 / floatNumber;

console.log(div);

//NaN -> Not A Number
const text = "Pedro"
const mult = text * num1;

console.log(mult);

//Number format
function incomePerHourWIthoutFormat(income, workingHoursPerMonth){
    // income/workingHoursPerMonth/  without format: 
    return Math.round(income/workingHoursPerMonth);
}
console.log(incomePerHourWIthoutFormat(3000, 176));

function incomePerHourWithFormat(income, workingHoursPerMonth){
    return (income/workingHoursPerMonth).toFixed(2); //Adds two decimal places
}
console.log(incomePerHourWithFormat(3000, 176));

function incomePerHourInReais(income, workingHoursPerMonth){
    const incomePerHour = (income/workingHoursPerMonth);
    const format = incomePerHour.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'});
    return format;
}
console.log(incomePerHourInReais(3000, 176));

//Array order
var list = [10,1, 5, 9, 8, 12, 15];
console.log(list.sort((a, b) => a - b)); 
