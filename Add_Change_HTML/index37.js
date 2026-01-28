// ----- EXAMPLE 1 -------

// STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "I like Pizza!";
newH1.id = "myH1";
newH1.style.color = "tomato";

// STEP 3 APPEND ELEMENT TO DOM

//document.body.append(newH1);
// document.body.prepend(newH1);
document.getElementById("box1").append(newH1);
// document.getElementById("box2").prepend(newH1);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1 /* new element */, box2 /* current element */);


//WHAT IF BOXES DOESN'T HAVE IDs, USE QUERY SELECTOR AND INSERT BEFORE FUNC

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, currentElement);

//REMOVE HTML ELEMENT
document.body.removeChild(newH1);

//IF WE WANT TO REMOVE THE CHILD FROM THE PARENT, LIKE BOX1(PARENT) AND NEWH1(CHILD), DO LIKE THIS
document.getElementById("box1").removeChild(newH1);
