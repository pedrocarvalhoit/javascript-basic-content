const personObject ={
    name: "Pedro",
    age: 30,
    document: "11112222333",
    email: "pedro@pedro.com"
};
//Just the name
console.log(`The client name is: ${personObject["name"]}, with ${personObject["age"]} years old.`)

const keys = ["name", "age", "document", "email", "adress"];

keys.forEach((key) => {
    console.log(`The key ${key} has value ${personObject[key]}`);
});