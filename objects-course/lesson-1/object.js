const personObject ={
    name: "Pedro",
    age: 30,
    document: "11112222333",
    email: "pedro@pedro.com"
};
//Calling the object
console.log(personObject);
//Just the name
console.log(`The client name is: ${personObject.name}, with ${personObject.age} years old.`)
//3 first numbers of document
console.log(`The last 3 numbers off ${personObject.name} document are: ${personObject.document.substring(8)}`);
