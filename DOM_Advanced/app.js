//Event Listeners
// document.querySelector('button').addEventListener('click',handleClick);

// function handleClick(){
//     alert("Clicked");
// }

//Different syntax with anonymous functions
// document.querySelector('button').addEventListener('click',function(){
//     alert("Clicked");
// });

for (var i = 0; i < document.querySelectorAll('.drum').length; i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',function(){
        alert("Clicked");
    });
}