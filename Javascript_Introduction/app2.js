//Intermidiate Javascript 

//Random 
// console.log(Math.random());

//If we want numbers 1-6 
// console.log(Math.floor(Math.random()*6) + 1);

//Exercise 1 : Ask for two names and show a randon number as 0-100%
// var name1 = prompt("Enter a name");
// var name2 = prompt("Enter a name");
// var randomPer = Math.floor(Math.random()*100) + 1;
// alert("Match is : " + randomPer + "%");

//Comparators 
// === checks if two values have the same values and data types 
// !== , <, >, <=, >=

//Arrays 
// var numbers = [1,2,3,4,5];
// console.log(numbers);
// console.log(numbers.includes(2));

//Exercise 2 : FizzBuzz Game
for (var i=0; i<100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0){
        console.log("Fizz");
    }
    else if (i % 5 === 0){
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}