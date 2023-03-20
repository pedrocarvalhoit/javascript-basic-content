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

client.adress.push({
    street: "R. Professor Manuel",
    number: "262",
    apartment: false,
});

console.log(client.adress);
console.log("-----------");

//Filtering apartments
const apartmentList = client.adress.filter(
    (adress) => adress.apartment === true
);
console.log(apartmentList);

