let mode = document.querySelector("#mode");
let body = document.querySelector("body");
let newmode = "light";

mode.addEventListener("click",() =>{
    if(newmode === "light"){
        newmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        newmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(newmode);
});