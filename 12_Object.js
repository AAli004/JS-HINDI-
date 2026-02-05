// Singleton object (contructor method)
const youtubeUser = new Object({
        name: "Asif"

    })
    // console.log(youtubeUser);

// literal Object 
const fbUser = {
        name: "Faizan"
    }
    //console.log(fbUser.name);

const InstaUser = {}
InstaUser.id = "faizan78d"
InstaUser.name = "Areez Ali"
InstaUser.isLoggedIn = false

// console.log(InstaUser);

const twitterUser = {
    email: "noneone11@gmaiail.come",
    fullname: {
        userfullname: {
            firstname: "Player456",
            lastname: "Parker"
        }
    }
}

//console.log(twitterUser.fullname);

//console.log(twitterUser.fullname.userfullname);

//console.log(twitterUser.fullname.userfullname.lastname);


// console.log(twitterUser);


InstaUser.Greeting = function() {
        console.log(`Hi User, ${this.id}`)
    }
    // console.log(InstaUser.Greeting());
    // console.log(InstaUser);

const obj1 = { 1: "A", 2: "B" }
const obj2 = { 3: "A", 4: "B" }
    // const obj3 = { obj1, obj2 } // It returns objects in object
const obj3 = Object.assign(obj1, obj2) // Output : {'1': 'A' , '2': 'B', '3': 'A' , '4': 'B'}
const obj4 = Object.assign({}, obj1, obj2) // Output = obj3 ^
    //console.log(obj3);
    //console.log(obj4);
    /*
console.log(obj3 === obj1); // true
console.log(obj3 === obj2); // true
*/




const myObj1 = { 1: "m", 2: "n" }
const myObj2 = { 3: "s", 4: "t" }
const myObj3 = { 5: "u", 6: "v" }
const myObj4 = { 7: "x", 8: "y" }
const myobj5 = Object.assign({}, myObj1, myObj2, myObj3, myObj4)
const myObj6 = Object.assign(myObj1, myObj2, myObj3, myObj4)
    // console.log(myobj5);
    //console.log(myObj1 === myobj5); // flase 
    //console.log(myObj6 === myObj1); // true
    //console.log(myObj1);

myObj1.c = 10
    // console.log(myObj1.c);
Object.freeze(myObj1)
myObj1.d = 15
    //console.log(myObj1.d)
    //console.log(myObj1);


const Target = { A: "Apple", B: "Banana" }
const Source = { B: "Orange", C: " Grapes" }
const returnedTarget = Object.assign(Target, Source)
    // console.log(returnedTarget); // { A: 'Apple', B: 'Orange', C: ' Grapes' }
    //  *Note B: "Banana" is replaced by B: "Orange" due to overwrite
    // console.log(Target); //  { A: 'Apple', B: 'Orange', C: ' Grapes' }
    // console.log(Target === returnedTarget);

const Aim = {...Target, ...Source } // Spread Operator
    // console.log(Aim); // { A: 'Apple', B: 'Orange', C: ' Grapes' }




// *************************************


const users = [{
        id: 55,
        email: "username897@microsoft.com"
    },
    {
        id: 56,
        email: "username897@microsoft.com"
    },
    {
        id: 55,
        email: "username897@microsoft.com"
    },
    {
        id: 55,
        email: "username897@microsoft.com"
    }

]
console.log(users[1].email);
console.log(InstaUser); //

console.log(Object.keys(InstaUser)); // To Find keys of any Obejct it returns keys in Array 
// Output : [ 'id', 'name', 'isLoggedIn', 'Greeting' ]
console.log(Object.values(InstaUser)); // To Find Values of any object it returns values also in Array
// Output = [ 'faizan78d', 'Areez Ali', false, [Function (anonymous)] ]
console.log(Object.keys(InstaUser).length); // Output = 4 
console.log(Object.values(InstaUser).length); // Output =4

console.log(Object.entries(InstaUser)); // Array Ke Ander Array Bana Deta hai Key : value ke Based Par
// Output = 
/*
[
  [ 'id', 'faizan78d' ],
  [ 'name', 'Areez Ali' ],
  [ 'isLoggedIn', false ],
  [ 'Greeting', [Function (anonymous)] ]
]
  */


console.log(InstaUser.hasOwnProperty('isLoggedIn')); // To Find Property In Object , // Output = true
console.log(InstaUser.hasOwnProperty('isLogged')); // Output : false