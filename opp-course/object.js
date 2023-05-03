const user = {
    name: "Pedro",
    email:"pedro@pedro.com",
    birthday: "2021/21/01",
    role: "student",
    active: true,
    showInfos: function(){
        console.log(`Name: ${this.name}. Email: ${this.email}`)
    }
};

const admin = {
    name:"Thamires",
    email:"thamires@mm.com",
    role:"admin",
    createCourse(){
        console.log("Course created");
    }
}

//admin herds from user
Object.setPrototypeOf(admin, user)
admin.showInfos();
admin.createCourse();

