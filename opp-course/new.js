function User(name, email){
    this.name = name;
    this.email = email;

    this.showInfos = function(){
        return `${this.name}, ${this.email}`
    }
}

const newUser = new User('Pedro', 'pedro@yahoo.com')
console.log(newUser.showInfos());

function Admin(role){
    User.call(this, 'Victor', 'victor@.com')
    this.role = role || 'student'
}

Admin.prototype = Object.create(User.prototype)
const newUser2 = new Admin('admin')
console.log(newUser2.showInfos())
console.log(newUser2.role)