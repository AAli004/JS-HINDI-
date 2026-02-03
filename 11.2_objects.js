// object Literal
// object.create [constructor method]


const mySmb = Symbol('key1')

const jsUser = {
        name: " Faizan", // name working like string as a "name"
        age: 45,
        [mySmb]: "mykey1",
        location: "Banglore",
        email: "faizanali@gmail.com",
        isLoggedIn: false,
        lastLogInDays: ["Monday", "Saturaday"],
        "full name ": "Faizan Ali" // we can not access it through dot (.), beco'z there is no method escept of [""] 

    }
    /*
    console.log(jsUser.name);
    console.log(jsUser.lastLogInDays);
    console.log(jsUser.email);
    console.log(jsUser["email"]); // It is a good method to access a value 
    console.log(jsUser["location"]);
    console.log(jsUser["full name "]);
    console.log(jsUser[mySmb]); // To access a symbol
    console.log(typeof jsUser[mySmb]);
    console.log(typeof mySmb);


    jsUser.email = "Asiffaizan@google.com" // to change value 

    console.log(jsUser.email);
    Object.freeze(jsUser) // to lock / freez object after freez we can't change in object
    jsUser.email = "ahsanAli@microsoft.com"
    console.log(jsUser.email); // output : Asiffaizan@google.com
    console.log(jsUser);
    */



jsUser.greeting = function() {
    console.log("Hello JS User");
}
jsUser.greetingTwo = function() {
    console.log(`Hello Js User,${this.name}`); // Output : Hello Js User,  Faizan 
    // This method is used to refer a string from object 

}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


console.log(jsUser);