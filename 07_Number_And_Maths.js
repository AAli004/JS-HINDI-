const score = 400
    // console.log(score); // output = 400 , Data Types = Undifined


const Balance = new Number(51100)
    // console.log(Balance);

// const bankBala = new String(400)
// console.log(bankBala);

/* console.log(Balance.toString().length); // we can conevrt number in string , also check length using string property
console.log(Balance.toFixed(2)); // value in decimal like 51100.00
console.log(Balance.toFixed(3)); // 51100.000 */


const otherNumber = 55.4499
    /*
    console.log(otherNumber.toPrecision(2)); // Output = 55
    console.log(otherNumber.toPrecision(3)); // 55.4
    console.log(otherNumber.toPrecision(4)); // 55.45 it does round off after decimal value
    console.log(otherNumber.toPrecision(1)); // 6e+1
    */



const otherNumber1 = 4699.4579
    /* 
    console.log(otherNumber1.toPrecision(3)); // 4.70e+3
    console.log(otherNumber1.toPrecision(2)); // 4.7e+3
    console.log(otherNumber1.toPrecision(4)); // 4699
    console.log(otherNumber1.toPrecision(5)); // 4699.5 
    */

console.log("*".repeat(59));


const hundreds = 10000000
    /*
    console.log(hundreds.toLocaleString()); // 1,00,00,000 *Note Its Indian formate *its depends on OS
    console.log(hundreds.toLocaleString('end-IN')); //  1,00,00,000 *it also indian Formate 
    console.log(hundreds.toLocaleString('en-US')); //   10,000,000
    console.log(hundreds.toLocaleString('en-UK')); //    10,000,000
    */

console.log('~'.repeat(50));

// =============== Maths =================


// console.log(Math); // Objecct {}

/* 
console.log(Math.PI);
console.log(Math.abs);
*/


/*
console.log(Math.abs(-4)); // Outout=4; It is used to change - sign in + sign
console.log(Math.abs(4)); // Output = 4; it does not change + sign in - sign , * Positive will be positive
*/

/*
console.log(Math.round(3.4)); // Output = 3
console.log(Math.round(3.5)); // Output = 4
*/

// console.log(Math.ceil(4.1)); // Output = 5 , Beco'z it will represent Top Value 
// 4.1 Is greater than 4 so, it represnts 5 which is Top Value 
// console.log(Math.floor(4.9)); // Output = 4 , Beco'z it will present Low Value
// 4.9 is smallest than 5 so, ir repesents 4 which is Low Value


/*
console.log(Math.sqrt(25)); // Output =25
console.log(Math.tan(45)); // 1.69
*/

/*console.log(Math.max(4, 5, 7, 6)); // output = 7 ; it is used to find max number in Array / object 
console.log(Math.min(5, 8, 3, 7, 9)); // output = 3
*/

// console.log(Math.random()); // iski value hamesh 0 aut 1 ke beech me atti hai ,minimum=0 & maximum<1 Ya'ani 0.99999999
// 1 kabhi nahi hogi
// console.log(Math.random() * 10); // To shift decimal at right side ,minimum=0, maximum<10 *10 Kabhi nahi Hogi 
// console.log(Math.random() * 100);

// console.log(Math.random() * 10 + 1); // To Avoid zero , iski minimum value 1 hogi , maximum=10.999999
/*
console.log((Math.random() * 10) + 1) // To Avoid BODMAS Rules use bracket

console.log(Math.floor(Math.random() * 10) + 1);
*/

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);


//console.log(Math.pow(25));