/* 
DOM Navigation = The process of navigating through the structure 
                 of an HTML document using JS.

.firstElementChild 
.lastElementChild
.nextElementSibling
.previousElementSibling
.parentElement
.children                 
*/


// ---- .firstELementChild ----

const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow"; //apple will be yellow


const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement =>{
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow"; // every first element yellow
});



