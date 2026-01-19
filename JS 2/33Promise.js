let  promise1 = new Promise((resolve, reject)=> {
    console.log("I am promise 1");
    resolve("Success")
});
//resolve promise

let  promise2 = new Promise((resolve, reject)=> {
    console.log("I am promise 2");
    reject("network error")
});
//reject promise


const getPromise =() =>{
    return new Promise((resolve, reject) =>{
        console.log("I am a promise");
    });
};

let promise = getPromise();
promise.then((res) => {
    console.log("promise fulfilled");
});

promise.catch((err)=>{
    console.log("Rejected");
});