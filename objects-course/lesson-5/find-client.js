const clients = require("./clients.json");

function search(list, key, value){
    return list.find((item) => item[key].includes(value));
}

const found = search(clients, "nome", "Oralle");
console.log(found);

console.log(search(clients, "telefone", "1918820860"));