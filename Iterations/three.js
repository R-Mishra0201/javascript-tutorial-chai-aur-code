// for of loops 

// const arr = [1, 2, 3, 4, 5];

// for (const element of arr) {
//     // console.log(element);
// }

// const greetings = "Hello World";

// for (const greet of greetings) {
//     console.log(greet);
// }


// Map

const map = new Map();

map.set("IN","India")
map.set("USA","United States of America")
map.set("FR","France")

// console.log(map);

// map has unique values, if we try to set the same key again it will update the value

map.set("IN","Bharat")

// console.log(map);

// for (const key of map) {
//     console.log(key);
    
// }

// destructuring the map

for (const [key, value] of map) {
    // console.log(key , ':' , value);
}


const obj = {
    name : "John",
    age : 30,
    city : "New York"
}

// object is not iterable, we cannot use for of loop directly on object, we need to convert it to array of key value pairs using Object.entries()

// for (const [key, value] of obj) {
//     console.log(key, ':', value);
// }




