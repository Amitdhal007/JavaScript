const myName = "Amit Kumar Dhal"
let myAge = 34
var currLocation = "Paitiala"
friendName = "Akshay Jha"

// the main diff between const, let, and var is below
// const variable cannot be changed
// let have local scope (block scope) cannot access outside of that block
// var have global scope and can make a conflict with the variable having same name 
// always use let and const


// myName = "Amit Boi" 
myAge = 90
currLocation = "Mumbai"
friendName = "Ritik Pandey"
console.table([myAge, currLocation, friendName])