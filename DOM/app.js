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

//Classlist shows the list of classes of the selected element--- see the css for added class
document.querySelector('.btn').classList.add('btn-test');
document.querySelector('.btn').classList.remove('btn-test');

//innerHTML returns the text content along with any tags of the elements
//textContent returns only the text associated with the element
document.querySelector('h1').innerHTML = "<em>Test inner html</em>"

//Attributes -- the attribute of an element ex. classes,id,href ...
document.querySelector('a').setAttribute('href','https://www.bing.com')