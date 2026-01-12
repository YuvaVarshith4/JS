/*
Error = An Object that is created to represent a problem that occurs 
        Occur often with user input or establishing a connection

try { } = encloses code tha might potentially cause an error 
Catch { } = catch and handle any thrown Errors from try { }
finally { } = (optional) Always executes. Used mostly for clean up 
              e.g., close files, close connections, release resources

             
*/

// console.lag();


// EXAMPLE 1

try{
    console.log(x);
    // NETWORK ERRORS
    // PROMISE REJECTION
    // SECURITY ERRORS 
}
catch(error){
    console.error(error);
}
finally{
    // CLOSE FILES
    // CLOSE CONNECTIONS
    // RELEASE RESOURCES
    console.log("This always executes");
}

console.log("You've reached the end!");

// EXAMPLE 2
try{
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));
  
    if(divisor == 0){
        throw new Error("You can't divide by zero!");
    }

    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number");
    }
    const result = dividend / divisor;
    console.log(result);
}

catch{error}{
    console.log(error);
}

console.log("You have reached the end!");










