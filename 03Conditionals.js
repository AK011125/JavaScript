console.log("Hello");
// This is a comment 
/*multi line
comments*/
let a = 2;
let b = 6;
//operators
console.log("a = ",a ,"b = ",b);
console.log("a + b = ",a + b);
console.log("a - b = ",a - b);
console.log("a * b = ",a * b);
console.log("a / b = ",a / b);
console.log("a % b = ",a % b);
console.log("a ^ b = ",a ** b);

// uniary operator
a++;
b++;
console.log(a , b);

//Assognment operator
let x = 5;
x+=4;
/*+=, -=, *=, /= */
console.log("x = ",x);

//comparison operators
let y = 18;
console.log(y!= x);
/* != , <, >, <=, >=, ==, ===, !== */
//===  and !=== also check data type 
let z = "18";
console.log(y==z); //here data type is not chechked 
console.log(y === z); //here we also check data type

//logical operators
// && (And), ||(or), !(not)
let m = 34;
let n = 23;
let cond1 = m>n; //true
let cond2 = n=== 23; //true
console.log("cond1 && cond2", cond1 && cond2);
console.log(!(m == n)); //true

let color;
let mode = "dark-mode";
if(mode === "dark-mode"){
    color = "black";
    console.log(color);
}else if(mode === "light-mode"){
    color = "light";
    console.log(color);
}

let age = 16;
if(age > 18){
    console.log("You can vote");
}else{
    console.log("You can't vote");
}
//Ternary Operators
age > 18 ? console.log("adult") : console.log("not adult");