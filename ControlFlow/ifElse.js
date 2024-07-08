// if - else syntax

const x = 89
const b = 78

if (x > b) {
    console.log(`${x} is greater than ${b}`);
}

// comparision operator --> (>, <, >=, <=, ==, ===, !=, !==)
// logical operator &&, ||

// multiple if else
const num = 10

if (num > 15) {
    console.log(`${num} is greater than 5`);
} 
else if (num > 20) {
    console.log(`${num} is smaller than 20`);
} 
else {
    console.log(`${num} lies between 5 to 20`);
}


const logedInWithGoogle = true
const payedBill = true


// && basically used to check all the condition are true
if (logedInWithGoogle && payedBill) {
    console.log(`user is authenticted and also payed the bill`);
}

payedBill = false

// || executes if atleast one is true
if (logedInWithGoogle || payedBill) {
    console.log(`either user is authenticated or payed the bill`);
}