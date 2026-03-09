// singleton




// objects literals

// Object.create


// symbol data type

// how to access symbol properties of an object
// 

const mySm1 = Symbol("Key1");

const JsUser ={
    name: "Rahul",
    "full name" : "Rahul Mishra",
    [mySm1] : "My Symbol Value",
    age : 20,
    location : "Delhi",
    email : "rahul@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Tuesday", "Wednesday"]
}

// two ways for accessing the properties of an object

// 1. dot notation
// console.log(JsUser.name);
// console.log(JsUser.age);
// console.log(JsUser.full name); // this will give error because of space in the key



// 2. bracket notation
// console.log(JsUser["location"]);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);

// console.log(JsUser[mySm1]);

JsUser.email = "rahul@microsoft.com"
// Object.freeze(JsUser); // this will make the object immutable
JsUser.email = "rahul@chatgpt.com"

// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello, welcome to the world of JavaScript!");
}

console.log(JsUser.greeting);

JsUser.greeting2 = function(){
    console.log(`Hello ${this.name}, welcome to the world of JavaScript!`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());














