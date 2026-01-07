//  ****** Revision ******

const min = 1000
const max = 9999
const OTP = Math.floor(Math.random() * (max - min + 1) + min); // Using Math Formula max - min 
// console.log(OTP);

const otp = Math.floor(Math.random() * (9000) + 1000); // without Formula , Only On Concept based 
// console.log(otp);


// **************************************************************************************************

// *Note : Isase Sirf 1000 se 9999 But 0001,0002 ,0003 type ke output nahi Aayega ! 
// To iske liye .padStart() Use Karatein Hain 

// **************************************************************************************************
/*
.padStart() : JAVAscript Ka String Method Hai
Yeh string Ke Start (Left Side) Paar Character add Kar deta Hai 
Jab Tak string Given length Ki Na Ho Jayein 
*/

/*
 string.padStart(targetLength,padString)
targetLength -----> Final Lenth Kitani Chahiye 
padString   ----->  Kaun Sa Character Add Karna Hai

pad.Start() -----> Left Side 
pad.End()  -----> Right Side 
*Note = Number Par Direct Kam Nahin Karta Hai  YEH Sirf string par Kaam Karta Hain

*/
/*

         ** Example **
         
         
 */


const x = "788"
const y = x.padStart(4, "0")
    // console.log(y); // 0788

const a = "22"
const b = a.padEnd(6, "0")
    // console.log(b); // 220000

const m = "Hello"
    // console.log(m.padStart(8, "*")); // Output = ***Hello
    // console.log(m.padEnd(8, "*")) // Output = Hello***


// For Number ; First Convert number In string

const k = 55
const l = String(k)
    // console.log(typeof l);
    // console.log(l.padStart(5, "X")) // Outpur = XXX55
const p = l.padStart(5, "o") // Output = ooo55
    // console.log(p);
    // console.log(typeof p); // Outpu = string 
    // console.log(l.padEnd(8, "#")); // Output = 55######
    // console.log(typeof k);

const s = "588"
console.log(s.padStart(8, "*")); // Output = *****588