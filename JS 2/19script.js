console.log("Hello");
let heading = document.getElementById("heading"); //h1
console.log(heading);

let text = document.getElementsByClassName("text");
console.log(text);

let para = document.getElementsByTagName("p");
console.log(para);
console.dir(para);

//or we can use querySelector(" ")
let x = document.querySelector("p");
console.dir(x);

let y = document.querySelector("#heading");
console.dir(y);

let div = document.querySelector("div");
console.dir(div);