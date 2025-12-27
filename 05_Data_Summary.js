// #Primitive Data 
// 7 Types : String , Number , Boolean , null , undefined , Symbol  , BigInt

const score = 100 // Number
const scoreValue = 100.3

const isLoggedIn = false // Boolean 

const outsideTemp = null // null 

let user_Email; // value not assigned so, it is called undifined ( It is First Method )
let userEmail = undefined // it is second method 

const Id = Symbol('123') // Symbol
const anotherId = Symbol('123')
console.log(typeof Id);
console.log(typeof anotherId);
console.log(Id == anotherId);

// const bigNumber = 45565569964664455558846556255587862654544 n // to use BigInt represent with 'n' at end of number it's first method
// console.log(typeof bigNumber);
const bigNumber1 = BigInt("446654645456546546454546545465123") // second method 
console.log(typeof bigNumber1);

const x = "456n" // String
console.log(typeof x);
console.log(typeof outsideTemp);
// const bigNumber3 = BigInt("3456543576674356754")
console.log(typeof bigNumber3);






console.log("*".repeat(100));
console.log("Reference Data ");





// #Non-Primitive (Reference) Data Types
// Array , objects , Function


const broName = ["Ahsan", "Faisal", "Imaad", "Faizan", "Alam", "Areez"]; // Array


const myObj = {
    name: "Asif",
    age: 22,
}; // Object


const myFunction = function() {
    console.log("Hello World");


}

// console.log(myObj);
// console.log(broName);
// console.log(myFunction);
// console.log(typeof myFunction);
/*console.log(typeof broName); // result ------> object
console.log(typeof myObj);   // result ------> object
console.log(typeof myFunction); // result ------> Object function*/

console.log(typeof []);
console.log(typeof {});
console.log(typeof [{}]);
/* 
if you want to check is your Array is Array or Not then use this method 
*/
console.log(Array.isArray(broName));
console.log(typeof
    function() {});
console.log(typeof
    function(myFunction) {});

const bigNumber4 = BigInt("65645587955555145554")
console.log(typeof bigNumber4);





console.log("Memory ".repeat(20));


/*
          MEMORY  ( STACK & HEAP )
*/

// Stack ---------> Primitive  
// Heap  ---------> Non-Primitive ( Reference Data)
/*
Jab Stack Memory Use Hoti Hai Tab Declare Huye Variable Ka Copy Milta Hai 
Aur Heap Mein REFERENCE (ADDRESS) Milta Hai VArible Ke YA Original Value Ka Isme 
Jo Kuch Chnage Hota Hai Original Value ME Hota Hain AUR STACK ME Original Value me changing Nahi Hoti HAi 
*/


// Example Of Stack

/* 
let custo_Email = " ali58@gmail.com"
let anothoer_cust_Email = custo_Email
anothoer_cust_Email = " areez6@gmail.com"
console.log(custo_Email);

console.log(anothoer_cust_Email);
*/
let custOne = {
    email: "IMAAD@gmail.com",
    upi: "cust@ybl"
};
let custTwo = custOne
custTwo.email = "SAmeer45@gmail.com" // .ke baad key lagate hain access karne ke liye 

console.log(custOne.email);
console.log(custTwo.email);

console.log(custTwo);

console.log(custOne);