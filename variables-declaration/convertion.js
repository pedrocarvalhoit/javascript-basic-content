//data type
//with boolean

//IMPLICT CONVERSION
const number = 456;
const numbString = '456';

console.log(number === numbString);

//JS made the convertion to string
console.log(number == numbString);

console.log(number + Number(numbString));

//EXPLICT CONVERSION
const numbCasting = Number('456');

//EXAMPLES
let phone = 12341234;
console.log("Phone is " + String(phone)); 

let conectedUser = false;
console.log(String(conectedUser)); 
conectedUser = true;
console.log(String(conectedUser)); 