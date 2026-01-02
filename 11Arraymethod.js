console.log("Array methods");
let arr = ["Apple", "Mango", "Banana", "Gavava", "Lithi"];
arr.push("Orange"); // to add a item it change in original array
console.log(arr);
arr.pop("Apple"); // it only delete from last what so ever element is pass
console.log(arr);

console.log(arr.toString()); // it convert our array to string  oriuginal array is unchanged

let marvelHeroes = ["Thor","Ironman","Captain America"];
let dcHeroes = ["Superman","Batman"];

let heroes = marvelHeroes.concat(dcHeroes); //like as concatination of strings
console.log(heroes);
//it do not change original array

marvelHeroes.unshift("Antman", "Spiderman"); // it is use to addm element in starting 
console.log(marvelHeroes);

marvelHeroes.shift(); //it delete from starting same as pop
console.log(marvelHeroes);

console.log(heroes.slice(1,3));// it slice element from 1 to 3 but 3 not included
//splice is use to change the original array
console.log(heroes);
heroes.splice(2,2,"Hulk");//it will delete 2 element from 2nd index
console.log(heroes);
// if splice(4) it means it start from index 4 and delete all element after that index