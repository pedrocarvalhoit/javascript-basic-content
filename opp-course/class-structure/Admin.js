import User from "./User.js";

export default class Admin extends User{
    constructor(name, email, birthday, role = 'Admin', active = true){
        super(name, email, birthday, role, active)
    }

    buildCourse(courseName, spotsAvailable){
        return `New ${courseName}, with ${spotsAvailable} spots opened`
    }
}

