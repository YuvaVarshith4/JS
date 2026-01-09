/* 
sort() = method used to sort of an array in place.
         Sorts elements as strings in lexicographic order, not alphabetical
         lexicographic = (alphabet + numbers + symbols) as strings
*/

let fruits = ["banana", "apple", "carrot", "pineapple", "kiwi"];

fruits.sort();

console.log(fruits);

let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

// numbers.sort();

// numbers.sort((a, b) => a - b);

numbers.sort((a, b) => b - a); // reverse order

console.log(numbers);


const people = [{name: "Spongebob", age: 30, gpa: 3.0},
                {name: "Patrick", age: 37, gpa: 1.5},
                {name: "Squidward", age: 51, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}]

// people.sort((a, b) => a.age - b.age);l
people.sort((a, b) => b.age - a.age); // for reverse order

people.sort((a, b) => a.name.localeCompare(b.name)); // lexical order
people.sort((a, b) => b.name.localeCompare(a.name)); // reverse lexical order


console.log(people);                
