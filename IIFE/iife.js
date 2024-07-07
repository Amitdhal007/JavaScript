// IIFE basically used for two things
// 1. if you want to call immedietaly a function
// 2. avoiding global scope pollution (if you have two global variable with same name and that are making trouble to avoid that iife can be used)

// syntax ()()

// named IIFE and ; is used to stop calling
(function addTwoNumber(num1, num2) {
    console.log(`The sum of two numbers ${num1} and ${num2} are ${num1+num2}`);
})(2, 5);

// IIFE
(() => {
    console.log("Hii my name is amit");
})()