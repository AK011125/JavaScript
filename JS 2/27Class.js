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
    calcTax () {
        console.log("Tax rate is 10%");
    },
};
console.log(employee);
//result -->> {calcTax: ƒ}
//calcTax: f calcTax()
//[[Prototype]] : Object

