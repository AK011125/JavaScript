// function api(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() =>{
//             console.log("Weather data");
//             resolve(200);
//         },2000);
//     });
// }

// async function getWeatherData() {
//     await api();
// }

function getData(dataId){
    return new Promise((resolve, reject) => {
    setTimeout(()=> {
        console.log("Data ",dataId);
        resolve("Success");
    },2000);
    });
}

//Async-await
async function getAllData() {
    console.log("getting data ");
    await getData(1);
    console.log("getting data ");
    await getData(2);
    console.log("getting data ");
    await getData(3);
    console.log("getting data ");
    await getData(4);
    console.log("getting data ");
    await getData(5);
}

// IIFE ;- immediately invoked function expression
//it runs function as function is created
// (function)()
// put our function in () and put () beside it 
// it can only be use once a function

(async function getAllData() {
    console.log("getting data ");
    await getData(1);
    console.log("getting data ");
    await getData(2);
    console.log("getting data ");
    await getData(3);
    console.log("getting data ");
    await getData(4);
    console.log("getting data ");
    await getData(5);
})()

// it will run by its own 