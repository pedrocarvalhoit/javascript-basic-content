const clients = require("./clients.json");

function filterApartmentsWithoutComp(clients){
    return clients.filter((cliente) =>{
        return(cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento")
        );
    });
}

const filtered = filterApartmentsWithoutComp(clients);
console.log(filtered);