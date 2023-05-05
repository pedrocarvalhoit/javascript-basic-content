export default class User{
    constructor(name, email, birthday, role, active = true){
        this.name = name;
        this.email = email;
        this.birthday = birthday;
        this.role = role || 'Student';
        this.active = active;
    }

    showInfos(){
        return `${this.name}, and email is:${this.email}`
    }
}

const newUser = new User('Pedro', 'pedro@gmail', '1992-01-01');
console.log(newUser.showInfos());
