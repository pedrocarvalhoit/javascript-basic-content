const client ={
    name: "Pedro",
    age: 30,
    document: "11112222333",
    email: "pedro@pedro.com",
    phone: ["111111", "222222"],
    balance: 200,
    payment: function(value){
        if(value > this.balance){
            console.log("Insufficientes funds")
        }else{
            this.balance -= value;
            console.log(`Successful payment, new balance is: ${this.balance}`)
        }
    }
};

client.payment(250);
client.payment(150);