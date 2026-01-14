/* 
element selectors = Methods used to target and manipulate HTML elements
                    They allow you to select one or multiple HTML elements
                    from the DOM (Document Object Model)
*/

/* 
1. document.getElementById()  // ELEMENT OR NULL
2. document.getElementsClassName()  // HTML COLLECTION
3. document.getElementByTagName() // HTML COLLECTION
4. document.querySelector() // ELEMENT OR NULL
5. document.querySelectorAll() // NODELIST
*/

// document.getElementById() 
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading); // It'll output html like <h1 id="my-heading" style="background-color: yellow; text-align: center;">Food R Us</h1>


// document.getElementsClassName()
const fruits = document.getElementsByClassName("fruits");
console.log(fruits);

fruits[2].style.backgroundColor = "blue";

for(let fruit of fruits){
    fruit.style.backgroundColor = "blue";
}

fruits.forEach(); // error, because it's HTML based content

Array.from(fruits).forEach(fruit => {          // Typecasting into array
      fruit.style.backgroundColor = "yellow"
});

// document.getElementByTagName()
const h4Elements = document.getElementsByTagName("h4");
console.log(h4Elements);
const liElements = document.getElementsByTagName("li");

h4Elements[1].style.backgroundColor = "yellow";

for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "green";
}

for(let liElement of liElements){
    liElement.style.backgroundColor = "brown";
}

Array.from(h4Elements).forEach(h4Element => {          // Typecasting into array
    h4Element.style.backgroundColor = "green"
});

Array.from(liElements).forEach(liElement => {          // Typecasting into array
    liElement.style.backgroundColor = "brown"
});


// document.querySelector()
const element = document.querySelector(".fruits"); 
element.style.backgroundColor = "red"; //element of first fruit colored red

const element = document.querySelector(".h4"); 
element.style.backgroundColor = "red"; //element of first h4 colored red

const element = document.querySelector(".li"); 
element.style.backgroundColor = "red"; //element of first list element colored red

// document.querySelectorAll()

const fruit0 = document.querySelectorAll("fruits");
fruits[0].style.backgroundColor = "navy blue";

const foods = document.querySelectorAll("li");
console.log(foods); //display the Nodelist

foods.forEach(food => {
    food.style.backgroundColor = "yellow";
})



