/*  
Async/Await => Async = makes a function return a promise
               Await = makes an async function wait for promise

               Allow you to write async code in a synchronous manner
               Async doesn't have resolve or reject parameters
               Everything after Await is placed in an event queue
*/

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalked = true;

            if(dogWalked){
                resolve("You walk the dog");
            }
            else{
                reject("You DIDN'T walk the dog");
            }
        }, 1500);
    })
    
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            // const KitchenCleaned = true;
            const KitchenCleaned = false;

            if(KitchenCleaned){
                resolve("You clean the house");
            }
            else{
                reject("YOu DIDN'T clean the kitchen");
            }
        }, 2500);
    }) 
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const takenOutTrash = true;

            if(takenOutTrash){
                resolve("You take out the trash");
            }
            else{
                reject("You DIDN'T take out the trash");
            }
        }, 500);
    });
}

async function doChores(){
    try{
        const WalkDogResult = await walkDog();
        console.log(WalkDogResult);
    
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
    
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
    
        console.log("You finished all the chores!");
    }
    catch(error){
        console.log(error);
    }
}

doChores();

// walkDog().then(value => {console.log(value); return cleanKitchen()})
//          .then(value => {console.log(value); return takeOutTrash()})
//          .then(value => {console.log(value); console.log("You finished all the chores")})
//          .catch(error => console.error());