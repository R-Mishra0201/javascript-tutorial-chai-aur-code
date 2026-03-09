

function one(){
    const username = "John";

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  // ReferenceError: website is not defined => because website is block scoped variable and it is not accessible outside the block
    
    // two();
}

// one();

if(true){
    const username = "rahul"
    if(username === "rahul"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);  // ReferenceError: website is not defined => because website is block scoped variable and it is not accessible outside the block

}

// console.log(username);  // ReferenceError: username is not defined => because username is block scoped variable and it is not accessible outside the block

// console.log(addone(5)); // 6 // it will work because of hoisting, the function declaration is hoisted to the top of the scope, so we can call the function before it is defined.
 
function addone(num){
    return num + 1;
}


// console.log(addtwo(5)); // 7 // hoestly, this is a bit surprising because we are calling the function expression before it is defined, but it works because of hoisting.

// even if we declare the function as a function expression, it will still work because the function expression is also a block scoped variable and it is accessible within the block
const addtwo = function(num){
    return num + 2;
}
