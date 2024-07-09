// higher order function
// first of all can faorEach returns value
// lets check

// const cartoons = ["Ben10", "Power Rangers", "Tom and Jerry", "Chota Bheem", "Idaten Jump"]
// const values = cartoons.forEach((item) => {
//     // console.log(item)
//     return item
// })

// console.log(values);
// here we are getting undefinded i.e forEach doesnot returns value

// now lets talk about 
// filter basically return value if condition is true

const cartoons = ["Ben10", "Power Rangers", "Tom and Jerry", "Chota Bheem", "Idaten Jump"]
const superFun = cartoons.filter((item) => {return item})
console.log(superFun);

// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const result = numbers.filter((num) => num > 5)
// console.log(result);

// now lets talk about map
// returns all the value and also allows you to perform operations on that

// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const result = numbers.map((num) => num + 10)
// console.log(result);

// chaining of methods
// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const result = numbers.map((num) => num * 10).map((num) => num + 1).filter((num) => num > 40)
// console.log(result);

// now lets talk about reduce
// it is basically used to calculate the sum of each ele in array
// accumulator is basically a empty variable which basically stores the sum
// 0 basically a number i.e initialy accumulator contains 0

const numbers = [1,2,3,4,5,6,7,8,9,10]
const result = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0)

console.log(result);

const course = [
    {
        courseName: "JavaScript",
        price: 2399
    },
    {
        courseName: "Java",
        price: 999
    },
    {
        courseName: "Python",
        price: 1499
    }
]

const res = course.reduce((accumulator, item) => accumulator + item.price, 0)
console.log(res);