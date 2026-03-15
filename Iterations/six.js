// const coding =["JavaScript", "Python", "Ruby", "Java", "C++"];

// coding.forEach(function(language){
//     console.log(language);
//     return language; // forEach method does not return anything, it just executes the callback function for each element in the array.
// })


// filter 

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// const even = myNumbers.filter((num)=>{
//     return num % 2 === 0; // filter method returns a new array with all the elements that pass the test implemented by the provided function.
// })

// console.log(even);


// const newNums = []

// myNumbers.forEach((num)=>{
//     if(num % 2 === 0){
//         newNums.push(num);
//     }
// })

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
}) // overwrite userBooks with the new filtered array that contains only the books that were published after 1995 and belong to the History genre.


  console.log(userBooks);