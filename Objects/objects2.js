// objects using constructor -> singleton object
const tinderUser = new Object()
tinderUser.name = "Akshay Jha"
tinderUser.email = "akshay@gmail.com"
tinderUser.status = "single"

console.log(tinderUser);

// adding two object
let obj1 = {0: "a", 1: "b", 2: "c"}
let obj2 = {3: "d", 4: "e", 5: "f"}

let obj3 = {obj1, obj2}
console.log(obj3);

let obj4 = {...obj1, ...obj2} // spread operator
console.log(obj4);

let obj5 = Object.assign({}, obj1, obj2)
console.log(obj5);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Akshay",
            secondName: "Jha"
        }
    }
}

console.log(regularUser.fullName.userFullName.secondName);

const users = [
    {
        id: 1,
        name: "amit"
    },
    {
        id: 2,
        name: "akshay"
    },
    {
        id: 3,
        name: "anish"
    }
]

console.log(users[1].id);
// arrays of keys and values
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))

// array of each pair
console.log(Object.entries(tinderUser))

// checking property present or not
console.log(tinderUser.hasOwnProperty("status"));
console.log(tinderUser.hasOwnProperty("age"));


// destructuring 
const course = {
    courseName: "Js in hindi",
    courseInstructor: "Hitesh Choudhry",
    price: "999"
}

// const {courseInstructor, courseName} = course
// console.log(courseInstructor);
// console.log(courseName);

// or
const {courseInstructor: instructor, courseName: cName} = course
console.log(instructor);
console.log(cName);


// const navbar = (props.company) => {
//     console.log("hello");
// }

const navbar = ({company}) => { // destructuring
    console.log("hello");
}

navbar(company = "hitesh")

// api are used for sharing of data
// data from backend came in form of json then that data gets converted into objects then we use that data

// json
// {
//     "name": "amit",
//     "age": 21
// }