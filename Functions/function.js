function sayMyName() {
    console.log("Hello World");
    console.log("Hello Duniya");
}

// this is basically the reference of the function (here you got the memory location where the func stores , you got the whole func)
// thw body of func will not execute
sayMyName

// here function executes
sayMyName()

function addTwoNum(number1, number2) {  // parameters
    return number1 + number2
}

console.log(addTwoNum(2, 4));  // arguments

function loggedInUser(username) {
    // console.log(typeof username);
    if (!username) {
        console.log("Please enter username");
        return
    }
    console.log(`${username} just loggedIn`);
}

// loggedInUser("Amit kumar")
loggedInUser(" ")

// rest opertaor i f you have multiple argument then how to take all these in parameters
function calculateCartPrice(...items) {
    console.log(items)
}

calculateCartPrice(100, 200, 600, 800, 680, 230)

// how to pass object
const myObject = {
    name: "amit",
    price: 234
}

function handleObject(anyObject) {
    console.log(`my name is ${anyObject.name} and price is ${anyObject.price}`);
}

handleObject(myObject)

const myArr = [1,2,3,4,5]
function handleArray(getArray) {
    console.log(getArray);
}

handleArray(myArr)