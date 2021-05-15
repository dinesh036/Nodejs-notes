// GLOBALSE - NO WINDOW !!!!
// __dirname - path to current directory
// __filename - filename
// require - fucntion to use modules(CommonJS)
// module - info about current module (file)
// process - info about env where the program is bening executed

// console.log(__filename)
// setInterval(()=>{
//     console.log('Hello World')
// ,1000})

// Modules
const names = require('./4-names');
const sayHi = require('./5-utils');
const alternative = require('./6-alternative-flavor');
require('./7-mind-granade')
//console.log(alternative);
sayHi(names.john)
sayHi('Dinesh')
sayHi(names.peter)