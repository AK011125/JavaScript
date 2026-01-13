let btn = document.createElement("button");
btn.innerText = "click me !";

btn.style.backgroundColor = "red";
btn.style.color = "white";

document.querySelector("body").prepend(btn);

//ques 2
let para = document.querySelector("p");
para.classList.add("newclass"); //here both classes will be assign to para
//if we dont use class list so previous class will get remove automatically
