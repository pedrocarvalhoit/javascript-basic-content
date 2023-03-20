const client ={
    name: "Pedro",
    age: 30,
    document: "11112222333",
    email: "pedro@pedro.com",
    phone: ["111111", "222222"],
};

client.adress = [
    {
    street: "R. Clementino Viana",
    number: "131",
    apartment: true,
    comp: "ap 301",
    },
];

const objectKeys = Object.keys(client);
console.log(objectKeys);

if(!objectKeys.includes("adress")){
    console.error("Adress can't be null");
}