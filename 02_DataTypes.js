console.log("#".repeat(70));

"Use Strict"; // It is use to treat all JS old cod as newer version

// alert(3 + 3); //we are using nodejs,not browser

console.log(3 +
        3) // It is not good experience beco'z code readability should be high


// Data Types in JS

let name = " Ahsan" // string => '' , ""

let age = 15 // number => 2 to power 53 may be 
    // if your number is so big use then use 'bigint' ye jydatar facebook , trading me use hota

let isloggedIn = false // or true
    // boolean =>  true / false


let temperature = null
    // null => standalone value // empty value ka representation hai 

//let country;
// undefined

// symbol => unique value

// object

console.log(typeof "asif");
console.log(typeof 15);

console.log(typeof undefined) // ka out put undefined
console.log(typeof null) // ka out put object hai log ise error bhi bolte hain
    // console.log (type) is used to check data type

// 1. Primitive Data Types:
// a. Number: Integer and Float (Decimal)   
// b. String: Sequence of characters, enclosed in single or double quotes
// c. Boolean: true or false
// d. Null: Represents the intentional absence of any object value
// e. Undefined: A variable that has been declared but not assigned a value
// f. Symbol (ES6): A unique and immutable primitive value