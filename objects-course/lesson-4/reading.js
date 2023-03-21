const data = require("./client.json");
console.log(data);
console.log(typeof(data));

console.log("-------------");
//Parsing the Json to String
const stringClient = JSON.stringify(data);
console.log(stringClient);
console.log(typeof(stringClient));

console.log("-------------");
//Parsing the String to Json
const clientObject =  JSON.parse(stringClient);
console.log(clientObject);