const user = {
    name: "Pedro",
    email:"pedro@pedro.com",
    birthday: "",
    role: "",
    active: "",
    showInfos: function(){
        console.log(`Name: ${this.name}. Email: ${this.email}`)
    }
};

user.showInfos();

const showName = showInfos.bind(user);