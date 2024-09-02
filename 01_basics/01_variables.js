const accountId = 144553
let accountEmail = "mdgufranalam73210@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"
console.log(accountId);
/*

Prefer not to use var
because of issue in block scope and functionl scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

console.log(accountId);
