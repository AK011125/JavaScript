function asyncFunc1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("some data 1");
            resolve("Sucess");
        },4000);
    });
}
function asyncFunc2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("some data 2");
            resolve("Sucess");
        },4000);
    });
}

// console.log("Feacthing data 1");
// let p1 = asyncFunc1();
// p1.then((res)=>{
//     console.log(res);
// });
// console.log("Feacthing data 2");
// let p2 = asyncFunc2();
// p2.then((res)=>{
//     console.log(res);
// });
//here both fetch at same data so we do something else

console.log("Feacthing data 1");
let p1 = asyncFunc1();
p1.then((res)=>{
    console.log(res);
    console.log("fethching data 2");
    let p2 = asyncFunc2();
    p2.then((res)=>{
        console.log(res);
    });
});

//Now the above syntex is used

//More simple syntx below

        // console.log("Feacthing data 1");
        // asyncFunc1().then((res)=>{
        //     console.log(res);
        //     console.log("fethching data 2");
        //     asyncFunc2().then((res)=>{
        //         console.log(res);
        //     });
        // });

//Promise chain {we can use this in exchange of callback hell}

// function getData(dataId, getNextData){
//     setTimeout(()=>{
//         console.log("Data ",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }

//getData(1)
//  .then(res) =>{
//      return getData(2);
//  })
//  .then(res)=>{
//      return getData(3);
//  })
//  .then((res)=>{
//      console.log(res);
//  });