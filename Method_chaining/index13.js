let username = window.prompt("enter your username: ");

//-----NO METHOD CHAINING

username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extrachars = username.slice(1);
extrachars = extrachars.toLowerCase();
username = letter + extrachars;
console.log(username);

//-----METHOD CHAINING

username = username.trim().charAt(0).toUpperCase() + username.slice(1).toLowerCase();
console.log(username);