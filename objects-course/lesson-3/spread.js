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

function callClient(comercialPhone, residentialPhone){
    console.log(`Calling ${comercialPhone}`);
    console.log(`Calling ${residentialPhone}`);
}
callClient(...client.phone);

const package = {
    receiver: client.name,
    ...client.adress[0],
};
console.log(package);
