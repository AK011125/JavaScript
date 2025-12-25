console.log("Hello World !!");
console.log("Lets begin JavaScript");
name = "Ajay Kumar"; //variable
age = 30;
console.log(name);
console.log(age);
x = null;
y = undefined;
console.log(x);
console.log(y);
Fullname = "Ajay Kumar Jakhar";
console.log(Fullname);
common_name = "AK"; // $, _, 123, abcd allowed only
console.log(common_name); //console.log() is use for printing
var name = "Mr Sharma"; //we can re declare in var so we cont use it
let hisName ="Mr Jakhar" ;//we cant re declare in let
const herName ="Mrs Dhankar"; // we cant change its value or update it 
// var have global scope and let , const have local scope or block scope i.e, for 1 {}
typeof(name);
console.log(typeof(name)); //string

let z =BigInt("9431431434");
console.log(z);
console.log(typeof(z)); //bigint that is big integer value 

//object
const student = {
    fullName : "AK jakhar",
    Age : 20,
    college : "NIT Kkr",
    year : "2nd",
}

console.log(student);
console.log(student["Age"]);