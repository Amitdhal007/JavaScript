// memory are of two types stack and heap
// stack (functions call, primitive, reference variable)
// heap (objects)


// primitive
let myName = "Amit Kumar"
let myBrotherName = myName
// copy of myname is assigned 

console.log(myName)
console.log(myBrotherName)
myBrotherName = "Rohit Sharma"
// changes made to copy will not refelect in original 
console.log(myName)
console.log(myBrotherName)

// Non primitive
let objOne = {
    name : "Amit Kumar",
    age : 34
}

let objTwo = objOne

console.log(objOne);
console.log(objTwo);

objTwo.name = "Asit Dhal"
objTwo.age = 19
// changes made to one will refelect in original bcz both points toward same object in heap

console.log(objOne)
console.log(objTwo);
