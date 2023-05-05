import User from "./User.js";

class Admin extends User{
    constructor(name, email, birthday, role = 'Admin', active = true){
        super(name, email, birthday, role, active)
    }

    buildCourse(courseName, spotsAvailable){
        return `New ${courseName}, with ${spotsAvailable} spots opened`
    }
}

const newAdmin = new Admin('Luisa', 'lll@.con', '22/02/1992');
const jsCourse = newAdmin.buildCourse('Js Course', 20)
console.log(newAdmin.showInfos());
console.log(jsCourse);