console.log("1");

setTimeout(() => {
    console.log("Hello after 2 sec");
}, 2000); //2000 mili seconds


console.log("2"); //it will be exicuted before setTimeOut

function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumCallback){
    sumCallback(a,b);  // this function is calling a other function and passing its parameter there
}
calculator(11,2,sum); //sum is a function passed here

// we can also use setTimeout as callback
const hello=()=>{
    console.log("Hello");
}
setTimeout(hello, 3000);//it is for 3 sec delay of hello function 

//if we want first with 2 sec delay and second also after 2 sec so

function getData(dataId, getNextData){
    setTimeout(()=>{
        console.log("Data ",dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}

getData(101, () => {
    getData(102);
});
//here there will be a 2 sec dely for 101 and then again 2 sec delay for 102
//if want 103 and 104 also so syntax 
getData(101, () => {
    getData(102, () => {
        getData(103, () => {
            getData(104);
        });
    });
});
//This is a callback hell also called callback nested or callback Doom
