// datatypes are of two types
// primitive (value type) and Non Primitive (reference type)
// the caterogrization is basically done on the basis of how data stored is stored in memory and -
// how we can access data
// value type basically means if we pass value in that case copy of value is passed not the original value where
// in case of non primitive the reference of value is passed in that case changes made to that will reflect in original value also


// Primitive DataTypes
// Number, Boolean, String, BigInt, Null, Undefined, Symbol (help in finding unique value)

const userId = Symbol('abc')
const Id = Symbol('abc')
const x = null

// both contains "abc" but still both are different
console.log(userId)
console.log(Id)
console.log(typeof x)


// Non primitive dataTypes 
// arrays : object
let heros = ["shaktiman", "krish", "Ironman", "captain America"]

// function : object function
const myFunction = function() {
    console.log("Hello World");
}

// object : object
let userDetails = {
    name : "Akshay",
    age : 34
}

