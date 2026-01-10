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
