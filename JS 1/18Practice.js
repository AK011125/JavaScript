arr = [84,79,94,74,94,93,95,74,68,95];

let marks = arr.filter((i)=>{
    return i >90;
});
console.log(marks);

let n = prompt("Enter a number : ");

let brr = [];
for (let i = 1; i<=n; i++){
    brr[i-1]= i;
}
console.log(brr);

let sum = brr.reduce((sum, i)=>{
    return sum + i;
});
console.log("Sum of numbers is : ",sum);

let pro = brr.reduce((product, i)=>{
    return product * i;
});
console.log("factorial of numbers is : ",pro);
