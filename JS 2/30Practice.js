let DATA = "Confidential";

class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("Website data = ",DATA);
    }
}

let std1 = new User("Ajay", "abc@gmail.com");
let std2 = new User("MadamG", "madamg@gmail.com");

class Admin extends User{
    editDATA(){
        DATA = "Some new value";
    }
}

let teacher1 = new Admin("HOD", "hod@hotmail.com");