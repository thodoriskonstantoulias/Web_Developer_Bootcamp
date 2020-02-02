//jQuery intro 
//We access the dom when jquery has finished loading - that is why it is better to include the scripts at the end of the body and not at the head
// $(document).ready(function(){
//     $("h1").css("color","red");
// });

//If we have out scripts at the end there is no need for document.ready function
// $("h1").css("color","red");

//To add a class - check css file to see the style for the below class
// $("h1").addClass("big-title");
// $("h1").removeClass("big-title");

//Manipulating texts
$("h1").text("Bye");
$("h1").html("<em>Bye</em>")

//Manipulating attributes
$("a").attr("href","https://www.google.com");

//Adding event listeners
$("h1").click(function(){
    $("h1").css("color","red");
});

//To set same event for all buttons  
$("button").click(function(){
    $("h1").css("color","purple");
});

//Body event listener
$(document).keypress(function(e){
    $("h1").text(e.key)
});