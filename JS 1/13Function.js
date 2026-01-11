console.log("Hello".toUpperCase());

console.log("XYZ".toLowerCase());

// function name(){
// code }

function wish(){
    console.log("Good morning");
}

wish(); //calling a function

function sum(a,b,c){
    console.log(a+b+c);
}

sum(2,3,4); // it will give parameter 2,3,4 as a,b,c

function add(a,b,c=0){
    console.log(a+b+c);
}
add(2,8,3,2,4); // extra parameter will not be passed here

function print(x){
    console.log(x);
}

print("Hello from function");

function addition(x,y){
    s = x + y; // x, y , s are local variables 
    return s; // if any line is written after return it will not execute
}

let i = addition(3,4);
console.log(i);

// arrow function 

const multiplication = (x,y)=>{      //(x,y)=>{}
    return x * y;
}
console.log(multiplication(4,7));