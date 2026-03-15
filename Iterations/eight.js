const myNums = [1, 2, 3, 4, 5];

const initialValue = 0;

// accumulator is the value that is returned by the callback function in the previous iteration, and currentValue is the current element being processed in the array. 
// The reduce method executes the callback function for each element in the array, and returns a single value that is the result of the reduction. 
// In this case, we are summing all the numbers in the myNums array, starting with an initial value of 0.


// accumulator me pehle initial value jayegi then jab loop start ho jayega after one process  , accumulator me acc+currval ka result jayega

const sum = myNums.reduce((accumulator, currentValue) => {
  console.log(`acc : ${accumulator} and currval : ${currentValue}`);

  return accumulator + currentValue;
}, initialValue);

console.log(sum);
