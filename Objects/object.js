// objects can be declared using two ways
// 1. declaring from constructor (singleton object i.e only one is present (unique))
// Object.create

// 2. declaring as a literal
// using symbol as a key
const mySymbol = Symbol("key");

const userDetails = {
    name: "Amit Kumar",
    age: 21,
    location: "Patiala, Punjab",
    education: "Engineer",
    status: "Single",
    [mySymbol]: "mykey1",
    device: ["macbook", "iphone", "airpods"]
}

// access
console.log(userDetails);
console.log(userDetails.device);
console.log(userDetails["location"])
console.log(userDetails[mySymbol])

// changing value
userDetails.status = "Married"
console.log(userDetails)

// freezing object so that no one can change
// Object.freeze(userDetails)
// userDetails.status = "single"
// console.log(userDetails)

userDetails.greeting = function() {
    console.log("hello good morning")
}

console.log(userDetails)
console.log(typeof userDetails.greeting); // output : function

console.log(userDetails.greeting); // it only returns a reference of a function, not executes the body of func (returns whole func) 
console.log(userDetails.greeting()); // executes the body of func

userDetails.greetingTwo = function() {
    console.log(`My name is ${this.name}`); // this keyword basically return the curr scope object
}