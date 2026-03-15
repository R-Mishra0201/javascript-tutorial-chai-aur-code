// for loops

// const array = [1, 2, 3, 4, 5];

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
// }

// for(let i = 1; i<=10; i++){
//     // console.log(`Outer Loop value : ${i}`);
//     for(let j = 1; j<=10; j++){
//         // console.log(`Inner Loop value : ${j}`);
//         console.log(i + '*' + j + "=" + i*j);
        
//     }
    
// }

// break and continue

for (let index = 1; index <=20 ; index++) {
    if (index===5) {
        console.log(`Detected 5`);
        break; // it will break the loop and exit the loop
    }
    console.log(`value of index is : ${index}`);
    
}

for (let index = 1; index <=20 ; index++) {
    if (index===5) {
        console.log(`Detected 5`);
        continue; // it will skip the current iteration and move to the next one
    }
    console.log(`value of index is : ${index}`);
    
}

