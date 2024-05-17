const getLastWordLength = require('./getLastWordLength')

console.log(getLastWordLength.getLastWordLength('')); // 0
console.log(getLastWordLength.getLastWordLength('man in BlacK')); // 5
console.log(getLastWordLength.getLastWordLength('hello, world!')); // 6