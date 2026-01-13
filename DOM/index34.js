/* 
DOM = DOCUMENT OBJECT MODEL
      Object that represents the page you see in the web browser
      and provides you with an API to interact with it.
      Web browser constructs the DOM when it loads an HTML document,
      and structures all the elements in a tree-like representation.
      Javascript can access the DOM to dynamically
      change the content, structure, and style of a web page.
*/

// console.log(document); //displays the HTMl document
// console.dir(document); //display the properties of HTML document
// document.title = "My website";
// document.body.style.backgroundColor = "black";

const username = "Bro Code";
const welcomeMsg = document.getElementById("welcome-msg");
welcomeMsg.textContent += username === "" ? `Guest` : username;
