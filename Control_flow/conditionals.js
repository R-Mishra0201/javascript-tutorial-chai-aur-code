// comparison operators => <, >, <=, >=, ==, ===, !=, !==

// logical operators => &&, ||, !


// const score = 200;

// if(score > 100){
//     const power = "fly"; // power is defined inside the if block and is only accessible within that block.
//     console.log(`you can ${power}`);
// }

// console.log(`you can ${power}`); // this will give an error because power is defined inside the if block and is not accessible outside of it.

// short hand if else => condition ? true : false


const balance = 1000;

// if(balance > 500){
//     console.log("you are rich");
// }

// if (balance > 500) console.log("you are rich"); // this is a short hand if statement, it is used when there is only one statement to execute if the condition is true.
// if (balance > 500) console.log("you are rich"), console.log("you have a good balance"); // this is very immature code, it is not recommended to use this style of coding because it is not readable and can lead to confusion.

// Nesting if statements


// if (balance < 500) {
//     console.log("less than 500");
// }else if (balance >= 500 && balance < 1000) {
//     console.log("between 500 and 1000");
// }else {
//     console.log("1000 or more");
// }


// switch case
const day = "monday";
switch (day) {
    case "monday":
        console.log("today is monday");
        break;
    case "tuesday":
        console.log("today is tuesday");
        break;
    case "wednesday":        
    console.log("today is wednesday");
        break;
    case "thursday":
        console.log("today is thursday");
        break;
    case "friday":
        console.log("today is friday");
        break;
    case "saturday":
        console.log("today is saturday");
        break;
    case "sunday":
        console.log("today is sunday");
        break;
    default:
        console.log("invalid day");
        break;
}

// truthy and falsy values
// falsy values => false, 0, "", null, undefined, NaN
// truthy values => all values that are not falsy are truthy

const name = "john";
if (name) {
    console.log("name is truthy");
} else {
    console.log("name is falsy");
}


// nullish coalescing operator => ??, it is used to provide a default value when the left operand is null or undefined.
const userName = null;
const defaultName = "guest";
const finalName = userName ?? defaultName;
console.log(finalName); // this will print "guest" because userName is null, if userName was undefined, it would also print "guest", but if userName was an empty string, it would print an empty string because an empty string is not null or undefined.
