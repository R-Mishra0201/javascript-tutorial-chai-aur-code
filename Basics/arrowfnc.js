const user = {
    username: "Rahul",
    price: 199,

    welcomeMessage: function(){
        console.log(`Welcome ${this.username} to the world of JavaScript!`);
        console.log(this);
        
        // this keyword refers to the current object which is user in this case
    }

}

// user.welcomeMessage();

// user.username = "shahrukh"
// user.welcomeMessage();

// Arrow functions do not have their own 'this' context. Instead, they inherit 'this' from the surrounding scope.

// console.log(this);

// In the global scope, 'this' refers to the global object (window in browsers, global in Node.js).

// function chai(){
//     let username = "Rahul";
//     console.log(this.username); // undefined, as 'this' does not refer to the global object in this context
// }

// const  chai = function() {
    //     let username = "Rahul";
    //     console.log(this.username); // undefined, as 'this' does not refer to the global object in this context
    // }
    
    const chai = () => {
        let username = "Rahul";
        // console.log(this.username); // undefined, as 'this' does not refer to the global object in this context
        console.log(this); // In an arrow function, 'this' refers to the surrounding scope, which is the global scope in this case. So it will log the global object (window in browsers, global in Node.js).
        
    }
// chai();

// const addTwo = (num1,num2) => {
//     return num1 + num2;
// }


// implicit return in arrow functions
// const addTwo= (a,b) => a+b;


// const addTwo= (a,b) => (a+b);

// object literal in arrow functions
const addTwo= (a,b) => ({result: a+b});

console.log(addTwo(5,10));

