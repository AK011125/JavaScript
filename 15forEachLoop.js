console.log("forEach is a method of arrays like toUpperCase()");
let arr = [1,2,3,4,5,6];

arr.forEach(function print(i){
    console.log(i);
}); // forEach will pass each value of arr to the function in it as argument of parameter

brr = ["Delhi", "Mumbai", "Gurugram", "Pune"];

brr.forEach((value) =>{
    console.log(value.toUpperCase());
});

brr.forEach((value, idx, brr) =>{
    console.log(value.toUpperCase(), idx, brr);
});

// this is a HOF or HOM Higher Order Function or Higher Order Method
// because it uses call back to pass argument to another function 
