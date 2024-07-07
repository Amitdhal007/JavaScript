// this keyword basically refers to current scope object
// but on node.js the this is diff and on browser this is diff
// on node this is {} and on browser this is window

console.log(this)

const user = {
    username: "amit kumar",
    email: "amit@gmail.com",
    message: function() {
        // console.log(`cong ${this.username} you just logged in`);
    }
}

user.message() // here when we are calling function internally the function creates this keywords and point to current obj user

// diff between normal func vs arrow func
// 1. we can shorten the body of arrow function if func only have single statement which we can't do in normal func
// 2. in normal function this refers to the object using which we are calling the function and if we called without object in that case this refers to window
// but in case of arrow, when we call arrow internally arrow function does't creates this keyword in that case this refers to prevoius value of this before creating the func
// 3. we cant call arrow function above the decleration but we can do in normal function
// 4. we can use normal function as a constructor but we cant use in case of arrow function because when we creates constructor we need to use constructor keyword and in arrow
// function this keyword treated as a reference variable and reference variable can't be reserved keyword

const userDetail = {
    userName: "Asit Kumar",
    age: 25,
    wish: function() {
        function happyBirthday() {
            // this basically points to global object
            console.log(this);
        }

        // automatically gets called without this
        happyBirthday()
    }
}

// this -> userDetails
userDetail.wish()

const gameScore = {
    score: 300,
    playedWell: () => {
        console.log(this); // points to the previous value of this before creating function {}
    }
}

gameScore.playedWell()

const hero = {
    name: "SuperMan",
    power: function() {
        const laser = () => {
            console.log(this) // points to the previous value of this before creating function
        }
        laser()
    }
}

hero.power() // here this value is hero

// arrow function
const superHero = () => {
    return "shaktiman"
}

console.log(superHero())

const addTwoNumber = (num1, num2) => (num1 + num2) // if {} bracels then return keyword , else no return
console.log(addTwoNumber(2,7));

const passObject = (anyuser) => ({anyuser})
console.log(passObject({
    name: "Amit",
    age: 34
}))