let heroes = ["Iron Man","Hulk","Thor","Batman"];
console.log(heroes);
let arr = ["Apple","Mango","Banana"];
console.log(arr);
// let arr = [item1, item2]

let brr = [92,93,94,90];
let crr = ["hulk", 94, "fruits", 83]; // but we dont preffer it
console.log(brr);
console.log(brr.length);
console.log(typeof(crr)); // it is a type of object
console.log(arr[0]); // index 0 element
console.log(arr[100]); // as this doesnt exsist so undefined
arr[1] = "hulk";
console.log(arr); //strings are immutable and arrays are mutable

//use of loop for printing array
for(let i = 0;i < arr.length; i++){
    console.log(arr[i]);
} // it will print the arr 

// using for- of
for(let i of heroes){
    console.log(i);
}
for(let i of arr){
    console.log(i.toUpperCase());
}