alert("Hello !!!"); //popup alert
let a = prompt("Enter a number : "); //input
console.log("Your number is : ",a); //print the number
if(a % 5 === 0){
    console.log("Multiple of 5");
}else{
    console.log("Not a Multiple of 5");
}

/*grades using if else if 
90 - 100 A
70 - 89 B
60 - 69 C
50 - 59 D
0 -  49 F */
let num = prompt("Enter your Score(0-100) : ");
if(num > 90 && num < 100){
    console.log("Grade 'A'");
}else if(num > 70 && num < 89){
    console.log("Grade 'B'");
}else if(num > 60 && num < 69){
    console.log("Grade 'C'");
}else if(num > 50 && num < 59){
    console.log("Grade 'D'");
}else{
    console.log("Grade 'F'");
}