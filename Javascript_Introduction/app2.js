//Intermidiate Javascript 

//Random 
console.log(Math.random());

//If we want numbers 1-6 
console.log(Math.floor(Math.random()*6) + 1);

//Exercise 1 : Ask for two names and show a randon number as 0-100%
var name1 = prompt("Enter a name");
var name2 = prompt("Enter a name");
var randomPer = Math.floor(Math.random()*100) + 1;
alert("Match is : " + randomPer + "%");

//Comparators 
// === checks if two values have the same values and data types 
// !== , <, >, <=, >=