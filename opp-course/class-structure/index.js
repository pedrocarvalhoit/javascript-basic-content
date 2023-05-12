import User from "./User.js";
import Admin from "./Admin.js";
import Teacher from "./Teacher.js";

const user1 = new User('Pedro ','Carvalho', 'ppp@gmail.com');
console.log(user1.showInfos())

const teacher1 = new Teacher('Andre ','Duarte', "andre@.com");
console.log(teacher1.showInfos())