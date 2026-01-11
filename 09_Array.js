// ***** Array *****

const myArray = [0, 1, 2, 3, 4, 5]
    // ***** Method To Declare Array *****
    // const myFriend = ["Ahsan", "Sameer", "Faizan", "Imaad", "Areez", "Faisal"]
    // const myArray2 = new Array(1, 2, 3, 4)
    // console.log(myArray[3]); // Output : 3 , with the help of it we can access value based om index (0 ---> n-1)


// ***** Array Method *****

//myArray.push(6) // To Add value in array 
//myArray.push(7)
//myArray.push(0)
//myArray.pop() // To remove last item/element/value form Array , we don't provide arguement 

/*
myArray.unshift(5) //    to insert value/element at the start point [5, 0, 1, 2, 3, 4, 5] , it shifts all element of array .
    // *Note ; It creates problem when we apply for large Array beco'z it consumes times and loads on CPU 

myArray.shift() // It removes element from at the start point [0, 1, 2, 3, 4, 5]
*/

// console.log(myArray.includes(6)); // To check element in Array "Hai" Or "Nahi" , it returns Bolean (false/true)
// Notes : retuerns false/true with Array
// console.log(myArray.indexOf(3)); // to check index of element
// console.log(myArray.indexof(9)); // Output : -1
// console.log(myArray.indexof(88)); // Output : -1
/*
const A = myArray.includes(9) // 
console.log(A) // Output : false
*/


const newArray = myArray.join() // Adds all the elements of an array in to a string , *Note: Yeh element ko bind bhi karta hai aur array 
    // Araay ko string Bana Deta hai
    /*
    console.log(myArray); // Output : [ 0, 1, 2, 3, 4, 5]
    console.log(newArray); // Output : 0,1,2,3,4,5
    console.log(typeof newArray); // Output : string
    */


// ***** slice & splice    *****

// *** slice() ***
console.log("A", myArray);
const newArray2 = myArray.slice(1, 3)
console.log(newArray2); // Output: [ 1, 2 ] ; *Note : Starting from n(range) ,But ending is n-1(range-1)
console.log("B", myArray);

// *** splice() *** 

const newArray3 = myArray.splice(1, 3)
console.log(newArray3); // Output : [ 1, 2, 3 ]; *Note : Starting from n , And includes given range
// Note : but is change original array Ya'ani splice portion nikal jata hai aur original array manipulate ho jati hai [ 0, 4, 5 ]
console.log(myArray); // [ 0, 4, 5 ]