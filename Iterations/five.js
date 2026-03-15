const coding = ["JavaScript", "Python", "Ruby", "Java", "C++"];


// for each
// coding.forEach(function(language) {
//   console.log(language);
// });

// coding.forEach((val)=>{
//     console.log(val);
    
// })

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe) // we have to pass the function refrence without the parenthesis because we don't want to call the function, we just want to pass it as a callback to forEach method.

// coding.forEach((item,index,arr)=>{
//     // console.log(`The item is ${item} and the index is ${index} and the array is ${arr}`);
//     console.log(item,index,arr);    
// })


const myCoding = [
    {
        languageName : "JavaScript",
        languageType : "Scripting",
        languagePopularity : "High"
    },
    {
        languageName : "Python",
        languageType : "General Purpose",
        languagePopularity : "High"
    },
    {
        languageName : "Ruby",
        languageType : "Scripting",
        languagePopularity : "Medium"
    }
]

myCoding.forEach((val)=>{
    console.log(val.languageName);// we can access the properties of the object using dot notation.
    console.log(val.languageType);
    console.log(val.languagePopularity);

})