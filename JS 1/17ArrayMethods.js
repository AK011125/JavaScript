let arr = [1,2,3,4,5,6,7,8,9]

arr.map((i)=>{
    console.log(i);
});

let brr = arr.map((i)=>{
    return i*i;
});

console.log(arr);
console.log(brr);
//map is same as for each but it help to create a new array

let evenarr = arr.filter((i)=>{
    return i % 2 === 0;
});
console.log(evenarr);

let oddarr = arr.filter((i)=>{
    return i % 2 != 0;
});
console.log(oddarr);
//filter is use to perform task on the same arrays and store it to somewhere else

let output = arr.reduce((sum, i)=>{
    return sum + i;
});
console.log(output);
//reduce is use to find avg sum of a array by performing multiple operations on it

//find the largest of a array
let largest = arr.reduce((large,i)=>{
    return large > i ? large : i;
});
console.log(largest);