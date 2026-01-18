//Object in JS

const student = {
    name : "Amit Kumar",
    marks : 95,
    class : "B.Tech",
    printMarks : function() {
        console.log("marks = ",this.marks); // here this.marks means student.marks
    },
}
console.log(student);

//result -->> {name: 'Amit Kumar', marks: 95, class: 'B.Tech', printMarks: ƒ} 

//Protoype
//its a in-built object in object

let arr = ["Apple", "Banana", "Papya", "Mango"];
//here if we want to use push
console.log(arr);
arr.push("Litchi");
console.log(arr);

//how ca we use this push if its not defined answer is 
// it is already present in prototype object that is in-built here

const employee = {
    calcTax1 () {
        console.log("Tax rate is 20%");
    },

    calcTax2 : function(){   //Other way to define function in a object
        console.log("Tax rate is 30%");
    },
};
console.log(employee);
//result -->> {calcTax: ƒ}
//calcTax: f calcTax()
//[[Prototype]] : Object

// How to set a prototype
const Ajay = {
    salary : 5000000,
};

Ajay.__proto__=employee;

console.log(Ajay);
//Now we can use employee function in Ajay also

console.log(Ajay.calcTax1);
//if object and prototype both have same method so objects method will b e used

//class
class ToyotaCar{
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }

    saveBrand(brand){
        this.brandName = brand;
    }
}

console.log(ToyotaCar);

let Fortuner = new ToyotaCar();
console.log(Fortuner.start);

let Lexus = new ToyotaCar();
console.log(Lexus);

Fortuner.saveBrand("Fortuner");
console.log(Fortuner);