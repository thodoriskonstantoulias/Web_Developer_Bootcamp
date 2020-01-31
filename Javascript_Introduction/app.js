//alert("Hello");

//Data types 
// console.log(typeof(123));
// console.log(typeof("name"));
// console.log(typeof(true));

//Variables 
//var name = prompt("What is your name");
//alert(name);

//Strings
 
//alert("Hello " + "World");
// var name2 = "Ted";
// console.log("Number of chars are : " + name2.length);

//Exercise : Inform user how many chars has typed and tell the remaining from 140 
// var userInput = prompt("Type your tweet");
// alert("You have typed : " + userInput.length + " charactes and you have " + (140-userInput.length) + " remaining"); 

//Exercise 2 : Slice the charactes up to 10 
// var userInput2 = prompt("Type your tweet");
// alert("Your message is " + userInput2.slice(0,10));

//Exercise 3 : Ask user for their name and capitalize only first letter
// var userInput3 = prompt("Type your name");
// var nameCapitalFirst = userInput3.slice(0,1).toUpperCase() + userInput3.slice(1,).toLowerCase();
// alert("Your name is " + nameCapitalFirst);


//Functions 

//Simple Functions
function testFunc(){
    console.log("Inside a function");
} 

testFunc();

//Functions with arguments
function testFunc2(name){
    console.log("Inside a function with argument : " + name);
} 

testFunc2(3);

//Functions with return values 
function testFunc3(name){
    return name;
} 

console.log(testFunc3("Ted"));

//Exercise 4 : Find the BMI as a function
function bmiCalculator(weight,height){
    return weight/Math.pow(height,2);
}

var weight = prompt("Enter your weight");
var height = prompt("Enter your height");
console.log("BMI calculator according your input is : " + Math.round(bmiCalculator(weight,height)));