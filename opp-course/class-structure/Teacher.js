import User from "./User.js";

class Teacher extends User{
    constructor(name, email, birthday, role = 'Teacher', active = true){
        super(name, email, birthday, role, active)
    }

    aproveStudent(student, course){
        return `Student ${student}, aproved on ${course}`           
    }
}

const newTeacher = new Teacher('Estefânea')
console.log(newTeacher.aproveStudent('Andre', 'Phyton'))