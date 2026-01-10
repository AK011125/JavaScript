console.log("Practice Questions");
let count = 0;
function vowelcount(x){
    for(let i = 0; i < x.length; i++){
        if(x[i] == "a" || x[i] == "e" || x[i] == "i" || x[i] == "o" || x[i] == "u"){
            console.log("index : ", i, x[i]);
            count = count +1;
        }    
    }
    return count;
}

console.log("No of vowel are : ",vowelcount("Hualeilowasdia"));


// using arrow function
const countvowel = (x) =>{
    let count = 0;
    for (const i of x){
        if (i == "a" ||
            i == "e" ||
            i == "i" ||
            i == "o" ||
            i == "u"
        ){
            count ++;
        }
    }
    return count;
}
console.log("Total vowels : ",countvowel("kauyaadbvouyerkfhkjebdfkvjgewrubv"));