const accountId = 14555
let accountEmail = "Asifali112@gmail.com"
var accountPassword = "457ll"
accountCity = "Kushinagar" // We CAn use this method to declare a variable but it's not good method 
let accountState;

// accountId = 222 // This is not allowed 

accountEmail = "ali2005@gmail.com"
accountPassword = "555jj"
accountCity = "Hydrabad"

/*

prefer to not use 'var'
beco'z of issue in block scope and functional scope
*/

console.log("AccountId", accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

// if you want output in table form with together , use console.table() with index (0-1)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);