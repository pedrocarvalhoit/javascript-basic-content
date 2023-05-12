import User from "./User.js";

export default class Teacher extends User{
    constructor(name, email, birthday, role = 'Teacher', active = true){
        super(name, email, birthday, role, active)
    }

    showInfos(){
        return `${this.name}and email:${this.email}.`
    }

    aproveStudent(student, course){
        return `Student ${student}, aproved on ${course}`           
    }
}

