const myFriend = ["Asif", "Ali", "Ahsan", "Areez"]
const mybrother = ["Alam", "Kaifu", "AbuBakara", "Faizan"]


// myFriend.push(mybrother)
// console.log(myFriend); // Output: ['Asif', 'Ali', 'Ahsan', 'Areez', ['Alam', 'Kaifu', 'AbuBakar', 'Faizan']]; There Are Five Elements
// *Note : Array In Array
// console.log(myFriend.length); // Output: 5
/*    
console.log(myFriend[4]); // Output: [ 'Alam', 'Kaifu', 'AbuBakar', 'Faizan']

console.log(myFriend[4][3]); // To access an element from an array of array
*/
// const allRelative = myFriend.concat(mybrother) // It merges Arrays and its elements and returns New Array , 
// it has limition it work only for two Array
// console.log(allRelative); // Output: ['Asif', 'Ali', 'Ahsan', 'Areez', 'Alam', 'Kaifu', 'AbuBakar', 'Faizan']


const allRelative1 = [...myFriend, ...mybrother] // Seprade method
    // console.log(allRelative1); // it works like concat method() but it handles multiple Array




const another_Array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const another_Real_Array = another_Array.flat(Infinity) // ifinity= depth can be number 
    // console.log(another_Real_Array);



console.log(Array.isArray("Asif")); // Output : false
/*
const new_Array = [2, 3, 5, 5]
console.log(Array.isArray(new_Array)); // Output : true
*/

console.log(Array.from("Asif")); // Output : [ 'A', 's', 'i', 'f'] ; To make array use Array.from()

console.log(Array.from({ name: "Asif" })); // Output: [] empatyArray beco'z 
// we should provide arguement to make Array based on Key & Value  // important



let score1 = 220
let score2 = 555
let score3 = 999
let score4 = 22
const score_in_Array = Array.of(score1, score2, score3, score4) // it conert set of element in array 
console.log(score_in_Array);