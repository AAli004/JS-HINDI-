// ***** Objects *****

// There Are Two Method To Declare Object 
/*
1.   literal  Method
2.   Constructor Method
*/



//   Singleton (construct method se bana obejct)
// Object.create

// Object literals


const mySmb = Symbol("Key1")

const user = {
        name: "Asif", // name, age,location, email + etc. are work as "name" like string 
        age: 19,
        "full name ": "Asif Ali", // We Cant access with dot (.) Ya'ani *console.log(user.full name) so we can use ["full name"]
        location: "Gorakhpur",
        email: "ali555@gmail.com",
        isloggedIn: false,

        lastLoginDays: ["Monday", "Saturday"],
        [mySmb]: "myKey1"
    }
    /*
    console.log(user.location); // First Method To Access 
    console.log(user["location"]); // Second Method To Acceess
    console.log(user.email);
    console.log(user.isloggedIn);
    console.log(user.lastLoginDays);
    console.log(user["email"]);
    console.log(user["full name "]);
    console.log(user["full name "]);
    console.log(typeof user.isloggedIn);
    console.log(typeof user.email);
    console.log(typeof user.age);
    */


console.log(user[mySmb]);
console.log(typeof user.mySmb);








/*

console.log(mySmb);
const id = Symbol('123')
console.log(typeof id);
*/