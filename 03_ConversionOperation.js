let score = 33

console.log(typeof score);
// console.log(typeof(score)); // IF you want to check variable data types you can use two method of these


console.log("#".repeat(50));

let sec_score = "33"
console.log(typeof sec_score);

let valueInNumber = Number(sec_score);

console.log(typeof valueInNumber);
console.log(valueInNumber);


console.log("<".repeat(50));

let third_score = "55qg"
console.log(typeof third_score);
let valueInNumber2 = Number(third_score);
console.log(valueInNumber2);
console.log(typeof valueInNumber2);


console.log(">".repeat(50));

let fourth_score = null // object 
console.log(typeof fourth_score);
let valueInNumber3 = Number(fourth_score)
console.log(typeof valueInNumber3);
console.log(valueInNumber3);


console.log("/".repeat(70))

let fifth_score = undefined
console.log(typeof fifth_score);
let valueInNumber4 = Number(fifth_score)
console.log(typeof valueInNumber4);
console.log(valueInNumber4);

console.log("?".repeat(60));

let sixth_score = true
console.log(typeof sixth_score);
let valueInNumber5 = Number(sixth_score)
console.log(typeof valueInNumber5);
console.log(valueInNumber5); // true=1  false=0

console.log("@".repeat(70));

let seventh_score = "Faizan"
console.log(typeof seventh_score);
let valueInNumber6 = Number(seventh_score)
console.log(typeof valueInNumber6);
console.log(valueInNumber6);


// Result Note 

/* 
"33" => 33
"88dw" => NaN 
True => 1
False => 0
*/

console.log("`".repeat(80));

let isLoggedIn = 1
console.log(typeof isLoggedIn);
let valueInBoolean = Boolean(isLoggedIn)
console.log(typeof valueInBoolean);
console.log(valueInBoolean);

let isLoggedIn1 = 0
console.log(typeof isLoggedIn);
let valueInBoolean1 = Boolean(isLoggedIn1)
console.log(typeof valueInBoolean1);
console.log(valueInBoolean1);


console.log("*".repeat(80));

let GivenValue = ""
console.log(typeof GivenValue);
let valueInBoolean3 = Boolean(GivenValue)
console.log(valueInBoolean3);
console.log(typeof valueInBoolean3);


// 1 => true , 0 ====> false
// "" => false ; "Asif" => True



console.log("Convertion In String".repeat(5));
let someNumber = 33
console.log(someNumber);

let InStringNumber = String(someNumber)
console.log(InStringNumber);
console.log(typeof InStringNumber);