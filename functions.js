function addTwoNumbers(a, b) {
    return a + b;
}


const result = addTwoNumbers(2, 3);
// console.log(result);


// function isUserLoggedIn(username){
//     if(!username){
//         console.log("Please enter a username");
//         return
//     }
//     return console.log(`${username} is logged in`);
// }

// function isUserLoggedIn(username){
//     if(username===undefined){
//         console.log("Please enter a username");
//         return
//     }
//     return console.log(`${username} is logged in`);
// }

function isUserLoggedIn(username = "Rahul"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} is logged in`;
}


//  console.log(isUserLoggedIn("Shahrukh"));


// rest operator

// function calculateCartPrice(...prices){
//     return prices;
// }

// console.log(calculateCartPrice(200,400,500,30));



// function calculateCartPrice(price1,price2,...prices){
//     console.log(price1);
//     console.log(price2);
//     return prices;

// }

// console.log(calculateCartPrice(200,400,500,30));


// when we handle objects in function we have to mind the spell and the structure of the object otherwise we will get undefined or error(type safety issue have to check)


const user ={
    username: "Rahul",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user);

// handleObject({
//     username: "Shahrukh",
//     price : 299
// })


// const myNewArray = [1,2,3,4,5];

function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([10,20,30,40,50]));
