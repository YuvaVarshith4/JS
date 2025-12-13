// let day = pizza;

// switch (day) {
//     case 1:
//         console.log("It is Monday");
//         break;
//     case 2:
//         console.log("It is Tuesday");
//         break;
//     case 3:
//         console.log("It is Wednesday");
//         break;
//     case 4:
//         console.log("It is Thursday");
//         break;
//     case 5:
//         console.log("It is Friday");
//         break;
//     case 6:
//         console.log("It is Saturday");
//         break;
//     case 7:
//         console.log("It is Sunday");
//         break;
//     default: 
//         console.log(`${day} is not a day`);   
// }

let testscore = 91;
let lettergrade;

switch(true){
    case testscore >= 90:
        lettergrade =  "A";
        break;
        case testscore >= 80:
            lettergrade =  "B";
            break;
        case testscore >= 70:
            lettergrade =  "C";
            break;
        default:
            lettergrade = "F";
}

console.log(lettergrade);