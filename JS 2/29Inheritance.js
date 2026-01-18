class Person{
    constructor (Name){
        this.Name = Name;
        this.species = "Homo Sapiens";
    }

    eat(){
        console.log("Eat");
    }

    sleep(){
        console.log("Sleep");
    }

    work(){
        console.log("Do nothing")
    }
}

class Engineer extends Person{
    constructor(Name){       //(branch)
        super(Name);      //(branch)      // to give i/p to the constructor here super is used
        // this.branch = branch; // super is used if we want to use this here
    }

    work(){
        console.log("Solve problems");
    }
}

// let Ajay = new Engineer("SET"); // here SET was pass to child
let Ajay = new Engineer("Ajay") // here Name is pass to parent
console.log(Ajay);
console.log(Ajay.eat);

class Doctor extends Person{
    work(){
        console.log("Treat Patients");
    }
}

let MadamG = new Doctor();
console.log(MadamG);
console.log(MadamG.sleep);