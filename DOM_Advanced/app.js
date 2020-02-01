//Event Listeners
// document.querySelector('button').addEventListener('click',handleClick);

// function handleClick(){
//     alert("Clicked");
// }

//Different syntax with anonymous functions
// document.querySelector('button').addEventListener('click',function(){
//     alert("Clicked");
// });

// for (var i = 0; i < document.querySelectorAll('.drum').length; i++){
//     document.querySelectorAll('.drum')[i].addEventListener('click',function(){
//         alert("Clicked");
//     });
// }

//Note : Higher Order Functions are functions that can take other functions as inputs

//Exercise 1 : Call dynamically all calcualtions using HOF
function add(x,y) {
    return x + y;
}
function subtract(x,y) {
    return x - y;
}
function multiply(x,y) {
    return x * y;
}
function divide(x,y) {
    return x / y;
}

function calculate(x,y,operator){
    return operator(x,y);
}

console.log(calculate(2,3,divide));