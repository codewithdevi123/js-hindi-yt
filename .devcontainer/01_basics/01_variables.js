const accountId = 123456789
let accountEmail = "ashish@gmail.com"
var  accounntPassword = "0001"
accountCity = "udaipur"
let  accountState;
// accountId = 2 // not  allowed

accountEmail = "soni@12.com"
accounntPassword = "100022"
accountCity = "madariya"

console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accounntPassword, accountCity, accountState])

