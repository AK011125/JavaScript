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
