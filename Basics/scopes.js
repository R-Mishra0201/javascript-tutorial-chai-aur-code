

//scopes


// in function or {} => block scope 
// outside the function or {} => global scope

let a = 300; // global scope variable

if (true) {
    let a = 10 // block scope variable
    const b = 20
    var c = 30
    console.log("INNER : ",a);
    
}


// console.log(a); // ReferenceError: a is not defined => because a is block scoped variable and it is not accessible outside the block
// console.log(a); // 300 => because a is global scoped variable and it is accessible outside the block


// console.log(b); // ReferenceError: b is not defined => because b is block scoped variable and it is not accessible outside the block

// console.log(c); // 30 => because c is function scoped variable and it is accessible outside the block

// that's why we should use let and const instead of var to avoid accidental global variables and to have better control over the scope of our variables.


