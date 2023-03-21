const clients = require("./clients.json");

function order(list, properties){
    const result = list.sort((a, b) => {
        if(a[properties] < b[properties]){
            return -1;
        }
        if(a[properties] > b[properties]){
            return 1;
        }
        return 0;
    });
    
    return result;
}

const orderByName = order(clients, "nome");
console.log(orderByName);