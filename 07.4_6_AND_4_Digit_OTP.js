const min = 0
const max = 9999
    /*
    const min1 = String(min) // Fisrt Convert number in string beco'z 
    const max1 = String(max)
        // console.log(typeof min);
        // console.log(typeof min1);
        // 
    */

const OTP = String(Math.floor(Math.random() * (max - min + 1) + min)).padStart(4, "0")
OTP = Number(OTP)
console.log(OTP);
console.log(typeof OTP);