for (let i =1; i<= 5; i++){
    console.log("Hello world");
}
for(let i =0; i<5;i++){
    console.log("Hii");
}
let sum = 0;
for(let i = 0;i < 5; i++){
    sum = sum + i;
    console.log(sum);
}
console.log("Net sum = ",sum);
let i =0;
while(i<5){
    console.log(i);
    i++;
}
let j = 20;
do{
    console.log(j);
    j--;
}while(j>10);

//for-of loop
let str = "HelloWorld";
for(let i of str){
    console.log("i =",i);

}
let str1 = "JavaScript";

let size = 0;
for (let j of str){
    //iterator -> characters
    console.log("j =",j);
    size++;
}
console.log("string size =",size);

//for-in loop
let student = {
    name : "Amit kumar",
    age : 20,
    cgpa : 7.5,
    ispass : true,
};

for(let i in student){
    console.log(i);
}
for(let key in student){
    console.log("key =",key,"value =",student[key]);
}