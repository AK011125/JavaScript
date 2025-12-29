console.log("Strings");
let str1 = "JavaScript";
let str2 = 'HTML';

console.log(str1);
console.log(str1.length); // length of str

str1[1] = "C";  // can't be modified
console.log(str1);
console.log(str1[3]);

//Template Literals
let specialstr = `This is a Template Literal`;
console.log(specialstr);
console.log(typeof(specialstr));

let obj = {
    item : "pen",
    price : 10,
};
console.log("The cost of", obj.item, "is", obj.price,"rupees");
let output = `The cost of new ${obj.item} is also ${obj.price} rupees.`; //use of template literals
console.log(output);

// escape character \n or \t

let str3 = "Hello \t World"; // \n is single character
console.log("Hello \n World");
console.log(str3.length);

console.log(str1.toUpperCase()); // but it didn't change the original string
console.log(str1); // it is same as last one no changes seen 
console.log(str3.toLowerCase()); // change to lower case
console.log(str3.trim()); // remove all whitespaces from starting and ending only
str4 = str3.toUpperCase(); //strings are immutable
console.log(str4); //str4 is a new string now

console.log(str4.slice(3,12)); //return part of string {12 not included}
console.log(str1.slice(4)); //from 4 to end 

console.log(str1.concat(str2)); //join str2 with str1

console.log(str1.replace("a","gt")); // it replaces first a with gt
console.log(str1.replace("v","1234")); // it replace v with 1234
console.log(str1.replaceAll("a","h")); // it replace all a with h

console.log(str1.charAt(3)); // it help to find any character on a specific index in string

console.log(str1 + str2); //concatination in javascript in a short form
let str5 = "Hello" + 1234;
console.log(str5);