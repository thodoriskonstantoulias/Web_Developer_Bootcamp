// DOM Manipulation

//document.querySelector returns one item
//document.querySelectorAll return the all elements with the specified value as a node list

//document.querySelector("h1").innerHTML = "Good night";

//Change the third's list item name
document.querySelector('#third').innerHTML = "Ted";

//Same with another query 
document.getElementsByTagName('li')[2].innerHTML = "Another one";

//Change the text color of google link using nested element
document.querySelector('li a').style.color = 'red';

//Changing the style from DOM requires no dashes but camelcase
document.querySelector('.btn').style.backgroundColor = "yellow";
