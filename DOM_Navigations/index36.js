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



//----- .nextElementChild ----

const element1 = document.getElementById("orange");
const nextSibling = element1.nextElementSibling;
nextSibling.style.backgroundColor = "yellow";


//----- .previousElementSibling ----

const element2 = document.getElementById("onions");
const prevSibling = element2.previousElementSibling;
prevSibling.style.backgroundColor = "yellow";


//----- .parentElement -----

const element3 = document.getElementById("ice cream");
const parent = element3.parentElement;
parent.style.backgroundColor = "yellow";

//----- .children ------
const element4 = document.getElementById("fruits");
const children = element4.children;


Array.from(children).forEach(child => {
        child.style.backgroundColor = "yellow";  
});

