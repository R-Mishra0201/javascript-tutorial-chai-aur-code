// const tinderUser = new Object(); its a singleton object

const tinderUser = {} // object literal syntax

tinderUser.id = "123abc";
tinderUser.name = "Rahul";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser ={
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Rahul",
            lastname : "Mishra"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


const obj1 ={
    1:"a",
    2:"b"
}

const obj2 ={
    3:"c",
    4:"d"
}

// const obj3 = {obj1,obj2} // this will create a new object obj3 with two properties obj1 and obj2
// console.log(obj3);

// const obj3 = Object.assign({},obj1,obj2); // this will merge obj1 and obj2 into a new object obj3

// console.log(obj3);

const obj3 = {...obj1,...obj2} // this will also merge obj1 and obj2 into a new object obj3

// console.log(obj3);

const users = [
    {userId:1, name:"Rahul"},
    {userId:2, name:"Rahul Mishra"},
    {userId:3, name:"Rahul M"}
]

users[1].name = "Rahul Mishra Updated"
// console.log(users);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // this will give us an array of keys of the object tinderUser
// console.log(Object.values(tinderUser)); // this will give us an array of values of the object tinderUser
// console.log(Object.entries(tinderUser)); // this will give us an array of key-value pairs of the object tinderUser in the form of an array of arrays

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // this will check if the object tinderUser has the property isLoggedIn or not and return true or false accordingly
// console.log(tinderUser.hasOwnProperty('email')); // this will check if the object tinderUser has the property email or not and return true or false accordingly

const course = {
    coursename : "JavaScript",
    price : 999,
    courseInstructor : "Rahul Mishra"
}

// destructuring of objects

// const {coursename, price, courseInstructor} = course; // this will create three variables coursename, price and courseInstructor and assign them the values of the corresponding properties of the object course

const {courseInstructor : instructor} = course

console.log(instructor);


