//  array is a data structure that can hold multiple values at once. It is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together. This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array).

const myArr = [1, 2, 3, 4, 5,"hites",true];

const myArr2 = new Array(1, 2, 3, 4, 5,"hites",true);

// // console.log(myArr2);

// // methods of array

// myArr.push(6); // adds an element to the end of the array
// // console.log(myArr);

// myArr.pop(); // removes the last element of the array
// // console.log(myArr);

// myArr.unshift(9); // adds an element to the beginning of the array
// // console.log(myArr);

// myArr.shift(); // removes the first element of the array
// console.log(myArr);

// // console.log(myArr.includes(1));
// // console.log(myArr.indexOf(1));

// const newArr = myArr.join(); // converts array into string
// // console.log(myArr);
// // console.log( typeof newArr);

// // slice or splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3); // start with index 1 and end with index 3 (not included) => slice does not modify the original array

console.log(myn1);
    
console.log("B", myArr);

const myn2 = myArr.splice(1,3); // start with index 1 and remove 3 elements => splice modifies the original array
console.log("C", myArr);

console.log(myn2);