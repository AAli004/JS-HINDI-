const name = "Ahsan Ali"
const age = 18

// console.log(name + age); // it is old method 
// console.log(name + age + " value"); // if you want print something else with variable like value

console.log(`Hello, My Name Is ${name} And My age ${age} `); // It is more readable , reliable and modern method
//  *No Effcet On Result


const gameName = new String("Asif Ali") // it's second method to declare String using JS object (String oject) 
    // where new is k-word
    // console.log(gmaeName); // *No Effect on Result
console.log(gameName[0]); // Accesse of key:value pair // Key:Value pair starts with 0 To N-1 ( 0 - n-1)
// String index is based
console.log(gameName[3]); // it is used to access Value based on key
console.log(gameName[4]); // noting display
console.log(gameName.__proto__); // Prototype is home of string All method 

console.log(gameName.length); // to know length of string

// const gameName1 = new String(" Asif ")
//console.log(gameName1.length); // Output = 6 , it Count Space also 
//console.log(gameName1.__proto__);

console.log(gameName.toUpperCase()); // it is function that is used to print string in upperCase
//  but it does not modity original Value or srting beco'z string ptimitive data type

console.log(gameName.charAt(5)); // kis position par kaun sa character hai index based hai it is safe 
// console.log(gameName[5]); // Output same hota hai but not behaviour
/* console.log(gameName.indexOf('l'));
console.log(gameName.indexOf(' i')); // with space -1
console.log(gameName.indexOf('i')); // without space 2
console.log(gameName.indexOf("i")); // 2 */
const newString = gameName.substring(0, 5) // It's method to divide a string in a sub string 
    // but end number's Character does not enclude in sub string where end number is 5 
    // note* isme negValue Nahi De skate hain denge bhi to 0 se strt karega 
console.log(newString);
const anotherString = gameName.slice(0, 5)
const anotherString1 = gameName.slice(-8, 4) // Isme Negative value Bhi De Sakte hain
console.log(anotherString);
console.log(anotherString1);
// console.log(gameName.trim()); // To Kill Space

const anotherString2 = "    asif   "
console.log(anotherString2);

// console.log(anotherString2.trim());
// console.log(anotherString2.trimEnd());
// console.log(anotherString2.trimStart());
console.log(anotherString2.valueOf());


const url = "https://Areez.com/asif@#ali"
console.log(url.replace('@#', 'faizan')) // Replace somethinf from string
    /*url.replace = ('asif', 'imaad')
    console.log(url.replace);*/ // thias methode does not work
console.log(url.includes('asif')); // it is used to find value if exist then retuen true
console.log(url.includes('Faizan')); // false



console.log("*".repeat(50));
console.log(gameName.split(' ')); // it makes array on based sapce or (- , _ it is separater ) or given command
const words = gameName.split(' ') // Second method
console.log(words); // Same output
console.log(words[1]); // it work on index based value , Output = Ali