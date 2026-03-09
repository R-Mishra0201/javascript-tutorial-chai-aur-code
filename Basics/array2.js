const marvelHeroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"];
const dcHeroes = ["Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern"];

// marvelHeroes.push(dcHeroes); // adds the dcHeroes array as a single element to the end of the marvelHeroes array
// console.log(marvelHeroes);
// console.log(marvelHeroes[5][1]);

// const allHeroes = marvelHeroes.concat(dcHeroes); // concatenates the marvelHeroes and dcHeroes arrays into a new array called allHeroes
// console.log(allHeroes);

// const allNewHeroes = [...marvelHeroes, ...dcHeroes]; // spread operator is used to concatenate the marvelHeroes and dcHeroes arrays into a new array called allNewHeroes
// console.log(allNewHeroes);


const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4,5]]];

const realAnotherArr = anotherArr.flat(Infinity); // flat method is used to flatten the nested arrays into a single array

console.log(realAnotherArr);


console.log(Array.isArray("Rahul")); // checks if the variable is an array or not
console.log(Array.from("Rahul")); // creates an array from the string "Rahul"
console.log(Array.from({name: "Rahul", age: 25})); // creates an array from the object {name: "Rahul", age: 25} but it will be an empty array because the object does not have a length property

let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;

console.log(Array.of(score1,score2,score3,score4)); // creates an array from the given arguments
