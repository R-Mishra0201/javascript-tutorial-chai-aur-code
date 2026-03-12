// Immediately Invoked Function Expression (IIFE)

//  global scope ke pollution se bhi kayi baar problem create hoti hei => us global scope ke declaration ko avoid karne ke liye hum IIFE ka use karte hain


(function(){
    let username = "Rahul";
    console.log(`Welcome ${username} to the world of JavaScript!`);
}
)(); // IIFE ko immediately invoke karne ke liye hum is tarah se parentheses ka use karte hain

// semicolon lagate hei jab iife ke baad koi aur statement likhte hain taki syntax error na aaye

(
    ()=>{
        console.log(`DB CONNECTED`);
    }
)();
// unnamed iife


(
    (name)=>{
        console.log(`DB CONNECTED ${name}`);
    }
)("John");
// named iife