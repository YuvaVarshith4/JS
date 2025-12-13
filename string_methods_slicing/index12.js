//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// let username = "  Bro Code";
// console.log(username.charAt(2)); //outputs "B" in console

// console.log(username.indexOf("o"));

// console.log(username.lastIndexOf("o"));

// console.log(username.length);

// console.log(username.trim());

// console.log(username.toUpperCase());

// console.log(username.repeat(4));

// console.log(username.startsWith(" ")); //true in this case

// console.log(username.endsWith(" ")); //false in this case

// console.log(username.includes(" ")); //true in this case

// let phonenumber = "123-456-7890";

// console.log(phonenumber.replaceAll("-","$"));

// console.log(phonenumber.padStart(15,"0")); //15 is required size of string and "0" is the one to be added at start to fill in empty spaces. output:- 000123-456-7890


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const fullname = "Broseph Code";
// let firstname = fullname.slice(0,3);
// let lastname = fullname.slice(4,8);
// let firstchar = fullname.slice(0,1);
// let lastchar = fullname.slice(-1);


let firstname = fullname.slice(0,fullname.indexOf(" "));
let lastname = fullname.slice(fullname.indexOf(" ") + 1);


console.log(firstname);
console.log(lastname);
// console.log(firstchar);
// console.log(lastchar);