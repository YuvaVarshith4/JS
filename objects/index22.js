/*  
Object = A collection of related properties and/or methods
         Can represent real world objects (people, products, places)
object = {key:value,
          function()}
*/          

const person1 = {
    firstname: "Spongebob",
    lastname: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: () => {console.log("Hi! I'm Spongebob!")},
}

const person2 = {
    firstname: "Patrick",
    lastname: "Star",
    age: 42,
    isEmployed: false,
    sayHello: () => {console.log("Hey! I'm Patrick....")}
}


console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();

console.log(person2.firstname);
console.log(person2.lastname);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();



/*
this = reference to the objects where THIS is used 
       (the object depends on the immediate context)
       person.name = this.name
*/

//------- !!! arrow operator doesn't work for this !!! -------

const person3 ={
    name: "Spongebob",
    favfood: "Hamburgers",
    eat: function() {console.log(`${this.name} is eating ${this.favfood}`)},
}

const person4 ={
    name: "Patrick",
    favfood: "Pizza",
    eat: function() {console.log(`${this.name} is eating ${this.favfood}`)},
}

person3.eat();
person4.eat();


console.log(this); //window acts as an object, this is for that window



/* 
constructor = special method for defining the properties and 
              methods of objects

              use case: instead of creating many no.of objects 
*/

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){
        console.log(`You drive the ${this.model}`);
    }
}

const car1 = new Car("Ford", "Mustang", 2024, "Dark Horse Blue");
const car2 = new Car("Chevrolet", "Camaro", 2025, "yellow");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);


/* 
class = (ES6 feature) provides a more structured and cleaner way to
        work with objects compared compared to traditional constructor fucntion.
        e.g., static keyword, encapsulation, inheritance 
*/

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const product1 = new Product("Shirt", 19.99);

product1.displayProduct();
const salesTax = 0.05;
const total = product1.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);


