/* 
eventListener: Listener for specific events to create interactive web pages
               event: keydown, keyup
               document.addEventListener(event, callback);
*/
const myBox = document.getElementById("myBox");

document.addEventListener("keydown", event => {
    myBox.textContent = "😶‍🌫️";
    myBox.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", event => {
    myBox.textContent = "😤";
    myBox.style.backgroundColor = "lightblue";
});

const movement = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")) {
        event.preventDefault();
        switch (event.key) {
            case "ArrowUp":
                y -= movement;
                break;
            case "ArrowLeft":
                x -= movement;
                break;
            case "ArrowRight":
                x += movement;
                break;
            case "ArrowDown":
                y += movement;
                break;
        }
       myBox.style.top = `${y}px`;
       myBox.style.left = `${x}px`;
    }
})