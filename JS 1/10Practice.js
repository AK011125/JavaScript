let arr = [85,97,44,37,76,60];
let avg = 0;
let sum = 0;
for(let i = 0;i<arr.length;i++){
    sum = sum + arr[i];
}
avg = sum/arr.length;
console.log(avg);

let brr = [250,645,300,900,50];
for(let i = 0;i<brr.length;i++){
    brr[i] = brr[i] - 0.1*brr[i];
    console.log(brr[i]);
}