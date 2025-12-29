console.log("Printing Even no 0 to 100");
for(let i = 0;i<=100; i=i+2){
    console.log(i);
}
console.log("Number guessing game")
let number = 3;
let input = prompt("Guess a no 0-5 : ");

// if(input == number){
//     console.log("Yes to guess right !!");
// }else{
//     input = prompt("Try again : ");
// }  -->> this is okay but not unlimited attempts

// so use a while loop

while(number != input){
    input = prompt("Try again : ");
}
console.log("Finally You Did It !!");