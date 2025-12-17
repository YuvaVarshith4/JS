let fruits = ["apple","orange","banana"];

fruits.push("coconut");
fruits.pop();
fruits.unshift("mango"); //adds mango at the starting of array
fruits.shift(); //removes first element of the array

for(let fruit of fruits){
    console.log(fruits);
}

fruit.sort().reverse();


//---------------------------------------------------------------------------------
/*
Spread operator:- ... allows an iterable such as an array or string
                  to be expanded into separate elements(unpacks the elements)
*/

let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum);
console.log(minimum);


let username = "Bro Code";
let letters = [...username].join("-"); //output: B-r-o- -C-o-d-e
console.log(letters);

let vegetables = ["carots","celery","potatoes"];
let foods = [...fruits, ...vegetables]; //

console.log(foods);


//-------------------------------------------------------------------------------
/*
Rest Operator:- (...rest) allow a function work with a variable
                number of arguments by bundling them into an array

                spread = expands an array into separate elements
                rest = bundles separate elements into an array
*/

function OpenFridge(...food){  //rest
   console.log(food); 
   console.log(...food); //spread
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

OpenFridge(food1,food2,food3,food4,food5);


function sum(...number){
    let result = 0;
    for(let num of number){
        result += num;
    }
    return result;
}

const total = sum(1,2,3,4,5);
console.log(`Your total is $${total}`);


function getAverage(...number){
    let result = 0;
    for(let num of number){
        result += num;
    }
    return result / number.length;
}

const totalAverage = getAverage(75,99,78,56,100);
console.log(`Total average is ${totalAverage}`);




function combineString(...strings){
    return strings.join(" ");
}

const fullname = combineString("Mr.","Steven","Peter","Devereux","Smith");
console.log(fullname);