// falsy values --> ( 0, "", BigInt 0n, -0, false, NaN, null, undefined )
// truthy values --> ( true, 1, " ", "0", "false", [], {}, function(){} )

// how to check array is empty
const myArr = []
if (myArr.length === 0) console.log("array is empty");

// how to check object is empty
const emptyObject = {}
if (Object.keys(emptyObject).length === 0) console.log("object is empty");

// nullish coalescing operator ?? (null, undefined)
// if null or undefined comes then assign the next given value


let name
name = 5 ?? 10
console.log(name);

// in above example 5 is not null or undefined thats why name = 5

let age
age = null ?? 21
console.log(age);

// here first value value is null and next value is 21 therefore age is 21

let course
course = undefined ?? "maths"
console.log(course);

let hobby
hobby = null ?? undefined ?? "cricket"
console.log(hobby);

// ternairy opertor
// condition ? true : false

let num = 10
num <= 20 ? console.log("number is less than 20") : console.log("number is greater than 20");