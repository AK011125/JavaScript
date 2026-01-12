console.log("Hello");//just to check either js is linked or not to html

let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + " from A.K. Jakhar";

let divs = document.querySelectorAll(".box");

// console.log(divs);
// divs[0].innerText = "New value 1";
// divs[1].innerText = "New value 2";
// divs[2].innerText = "New value 3";

// alternate way to do it with loops
let idx = 1;
for(div of divs){
 div.innerText = `New value ${idx}`;
 idx++;
}