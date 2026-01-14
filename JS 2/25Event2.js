let div = document.querySelector("div");

div.onmouseover = () =>{
    console.log("You are in div")
};

//event object
div.onmouseover = (e) =>{
    console.log(e); //event ki info
    console.log(e.type); // kya karne se event hua
    console.log(e.target); //kiske upar event hua
    console.log(e.clientX, e.clientY); //x and y corrodinates of event

};

//Event listners
let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () =>{   // we can also pass event object here (e)
    console.log("button was clicked");
});
// they can add two or more task at same time
btn1.addEventListener("click", () =>{
    console.log("button was clicked 2");
});

const handler3 = () =>{
    console.log("button was clicked 3")};

btn1.addEventListener("click", handler3);

btn1.addEventListener("click", () =>{
    console.log("button was clicked 4");
});
// to remove event listner
btn1.removeEventListener("click",handler3) //this event listener is removed