let user_Name = "Faisal Ali"
const user_Mob = 7845123256
let user_Address = "Gorakhpur"

let user_Name1 = "Faizan Ali"
const user_MOb1 = 4578123658
let user_Address1 = "Hydrabad"

console.table({ user_Name, user_Mob, user_Address, user_Name1, user_MOb1, user_Address1 }); // Varibale ------> Value , value will print with varibale 


console.table([user_Name, user_Mob, user_Address]); // value with index

console.table([{ user_Name, user_Mob, user_Address, user_Name1, user_MOb1, user_Address1 }]);
// console.table({[user_Name, user_Mob, user_Address] }) // error