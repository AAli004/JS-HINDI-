// # Primitive
// 7 Types : String ,Number , Boolean , null , undefined ,Symbol, BigInt
const name = "Asif"; // String
const age = 22; // Number
const isLoggedIn = false; // Boolean
const state = null; // null
let city;
// undefined
const id = Symbol("123"); // Symbol           
const bigNumber = 1234567890123456789012345678901234567890; // BigInt

//sconst Id = ('123'); / / String
//console.log(typeof Id);
//const newId = ('123'); // Number
//console.log(typeof newId);
//console.log(Id === newId);

console.log('........777777.....')
console.log(".".repeat(18)); // 18 Dots

const Id = Symbol('123')
console.log(Id)
const AnotherId = Symbol('123')
console.log(Id === AnotherId);

const bigNumbers = 41349656568555555
console.log(bigNumbers);


// Reference (Non-Primitive)

// Object
let myObj = {
        name: "Asif",
        age: 21,
    }
    // console.log(myObj);

// Array
const Boy = ["Asif", "Ali", "Ahsan"];

// Function
const myFunction = function() {
    console.log("Hello World");
}
console.log(typeof bigNumbers)

let q = "2"
console.log(q)
console.log(typeof q);


console.log("#".repeat(19));



// ++++++++++++++++++++++++
//Stack(<============Primitive)
//Heap(<===========Non -Primitive)

let myYoutubename = "Asifali0055.com"
let anotherYoutubename = myYoutubename
anotherYoutubename = "FaisalAli005.com"
console.log(anotherYoutubename);
console.log(myYoutubename);

console.log("/".repeat(20));

let userOne = {
    email: "faisalali@gmail.com",
    Hisupi: "abc@eh"
}
let userTwo = userOne
userTwo.email = "FaizanAli@55.com"
userTwo.Hisupi = "Alis"

console.log(userOne);
console.log(userTwo);