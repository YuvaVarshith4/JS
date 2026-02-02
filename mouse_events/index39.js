/* 
eventListener = Listen for specific events to create interactive web pages
                events: click, mouseover, mouseout
                .addEventListener(event, callback);
*/

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

myBox.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";
        event.target.textContent = "OUCH! 🥹";
});

myBox.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "yellow";
        event.target.textContent = "Don't do it 🫣";
});

myBox.addEventListener("mouseout", event => {
       event.target.style.backgroundColor = "pink";
       event.target.textContent = "Please Don't leave 😖";
})

myButton.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH! 🥹";
});

myButton.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it 🫣";
});

myButton.addEventListener("mouseout", event => {
   event.target.style.backgroundColor = "pink";
   event.target.textContent = "Please Don't leave 😖";
})


