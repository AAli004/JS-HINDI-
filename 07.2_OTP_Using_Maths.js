// ******* USING FIRST METHOD *********

// ******* 4 Digits OTP *******


const min = 1000
const max = 9999
const OTP = Math.floor(Math.random() * (max - min + 1) + min);
// console.log(OTP);


// ******* 6 Digits OTP *******
const min_1 = 100000
const max_1 = 999999
const otp = Math.floor(Math.random() * (max_1 - min + 1) + min_1);
// console.log(otp);


// ******* USING SECOND METHOD *******

// ******* 4 DIGITS OTP ******



const YOUR_OTP = Math.floor(Math.random() * (9000) + 1000);
// Math.random()*9000 -----> : 0 -> 8999
// +1000 -----> : 1000 -> 9999
console.log(YOUR_OTP);


// ******* 6 DIGITS OTP ******


const MY_OTP = Math.floor(Math.random() * (900000) + 100000);
console.log(MY_OTP);