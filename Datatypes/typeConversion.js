let myAge = "78"
let newAge = Number(myAge)
78 
console.log(typeof newAge);

let score = "32hjn"
let newScore = Number(score);
// NAN
console.log(newScore)

let score_
let newVal = Number(score_);
// NAN
console.log(newVal)

// let val = null
// let newValue = Number(val)
// 0 
// console.log(newValue);

let val = false
let newValue = Number(val)
// 1, 0 
console.log(newValue);

// convert Int to String
let int = 67
let newString = String(int);
console.log(newString);
console.log(typeof newString);

// convert string to boolean
let demoString = ""
console.log(Boolean(demoString))

let demoString_ = "vickey"
console.log(Boolean(demoString_))


// -------------------------Operations---------------------------


let str1 = "Hello"
let str2 = "World"
console.log(str1+" "+str2);

// all the things depends on the first datatype
console.log("1" + 3)
console.log(1 + "3")
console.log(1 + 3 + "8")

// preIncerement and postIncerement
let gameCounter = 100
console.log(gameCounter++)
console.log(++gameCounter)
