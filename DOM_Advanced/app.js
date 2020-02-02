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
// function add(x,y) {
//     return x + y;
// }
// function subtract(x,y) {
//     return x - y;
// }
// function multiply(x,y) {
//     return x * y;
// }
// function divide(x,y) {
//     return x / y;
// }

// function calculate(x,y,operator){
//     return operator(x,y);
// }

// console.log(calculate(2,3,divide));

//Back to the drum kit site
//We use this keyword below to check which button was clicked
for (var i = 0; i < document.querySelectorAll('.drum').length; i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',function(){
        //console.log(this);

        switch (this.innerHTML)  {
            case "w" : 
                var audio = new Audio('sounds/tom-1.mp3');
                break;
            case "a" : 
                var audio = new Audio('sounds/tom-2.mp3');
                break;
            case "s" : 
                var audio = new Audio('sounds/tom-3.mp3');
                break;
            case "d" : 
                var audio = new Audio('sounds/tom-4.mp3');
                break;
            case "j" : 
                var audio = new Audio('sounds/snare.mp3');
                break;
            case "k" : 
                var audio = new Audio('sounds/crash.mp3');
                break;
            case "l" : 
                var audio = new Audio('sounds/kick-bass.mp3');
                break;  
            default :
                break;     
        }
        //The following plays sound
        //var audio = new Audio('sounds/crash.mp3');
        audio.play();
    });
}