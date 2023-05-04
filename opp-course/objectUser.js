const user = {
    init: function(name,email){
        this.name = name;
        this.email = email;
    },

    showInfos: function(){
        return this.name
    }
}

const newUser = Object.create(user)
newUser.init('Victor', 'vvv@.com')
console.log(newUser.showInfos())

console.log(user.isPrototypeOf(newUser))