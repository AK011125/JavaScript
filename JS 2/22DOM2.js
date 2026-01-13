console.log("Hi");
let btn = document.createElement("button");
console.log(btn);

let div = document.querySelector("div");
div.append(btn); //by this button will be add to div at last 
// for starting we have to use prepend(btn)
// div.after(btn); this is use for after div
// same as before

//adding a new h1 heading without using html code

let heading = document.createElement("h1");
heading.innerHTML = "<i>Hi , This is new heading </i>";

document.querySelector("body").prepend(heading);

// in the same way we can delete element from node
// node.remove()

let x = document.querySelector("div");
// x.remove(); // it is use to remove the compelete div

//appendChild() removeChild() imp mdn