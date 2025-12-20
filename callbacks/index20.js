/* 
 Callback = a function that is passed as an argument to another function
 
            used to handle asynchronous operation:
            1. Reading a file
            2. Network a file
            3. Interacting with databases
              
            "Hey, when you're done, call this next."

            first outside function executes then only inside function executes
*/


hello(Wait);
hello(goodbye);
hello(leave);

function hello(Callback){
    console.log("Hello!");
    Callback();
}

function Wait(){
    console.log("Wait!");
}

function leave(){
    console.log("Leave!");
}

function goodbye(){
    console.log("Goodbye");
}

//------------------------------------------

sum(display, 4, 6);
function sum(callback, x, y){
   let result = x + y;
   callback(result);
}

function display(result){
    console.log(result);
}

function pagedisplay(result){
    document.getElementById("myH1").textContent = result;
}


//-----------------------------------------------------------------------------------------------------------------------------

/*
forEach() = method used to iterate over the elements of an array. and apply a specified function (callback) to each element

            array.forEach(callback)
            element, index, array are provided (as "element" argument in the given example below)
*/

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(display);
numbers.forEach(double);
numbers.forEach(square);

function double(element,index, array){
    array[index] = element * 2;
}
function square(element,index, array){
    array[index] = pow(element, 2);
}
function display(element){
    console.log(element);
}


//-----------------------------------------------------------------------------------------------------------------------------

/* 
.map() = accepts a callback and applies that function to each element of an array, 
         then return a new array
*/

const squares = numbers.map(square);
console.log(squares); 


const dates = ["2024-2-15", "2025-8-15", "2023-10-26"];
const formatdates = dates.map(formatdates);

console.log(formatdates);

function formatdates(element){
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

//----------------------------------------------------------------------------------------------------------------------------

/*
.filter() = creates a new array by filtering out elements
*/

let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(oddNums);
console.log(evenNums);

function isEven(element){
    return element%2 === 0; //strictly equal
}
 
function isOdd(element){
    return element%2 !== 0; //strictly  not equal
}

//----------------------------------------------------------------------------------------------------------------------------

/*
.reduce() = reduce the elements of an array to a single value
*/

const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);
const Max = prices.reduce(max);

console.log(`$${Max.toFixed(2)}`);
console.log(`$${total.toFixed(2)}`);

function max(accumulator,element){
    return Math.max(accumulator,element);
}
function sum(accumulator, element){
    return accumulator + element;
}

//----------------------------------------------------------------------------------------------------------------------------

/* 
Timeouts
*/
function helloworld(){
  console.log("Hello World")
}// Here helloworld function is callback function.
setTimeout(helloworld, 3000);  //3000millisec = 3sec

//Now including helloworld function within setTimeout

setTimeout(function(){
    console.log("Hello World");
}, 3000);

//----------------------------------------------------------------------------------------------------------------------------

/*
Functions with callbacks
*/

const cubes = numbers.map(function(element){
    return Math.pow(element,3);
});
const evenNUM = numbers.filter(function(element){
    return element % 2 === 0;
})
const product = numbers.reduce(function(accumulator, element){
    return accumulator * element;
})
console.log(cubes);  
console.log(evenNUM);
