// for of loop
// for of returns value
const programming = ["JavaScript", "Swift", "Java", "Python", "Ruby", "C++", "Golang"]
for (const item of programming) {
    console.log(item);
}

const hero = "Shaktiman"
for(const ch of hero) {
    console.log(ch);
}

// maps --> 
// basically maps contains key value pairs
// order of insertion is maintained
// only contains unique key value pairs

// how to create
const map = new Map()
map.set("IN", "India")
map.set("FR", "France")
map.set("US", "United States")
map.set("JP", "Japan")

console.log(map);

// how to iterate
for(const [key, value] of map) {
    console.log(`${key} : ${value}`);
}

// can we iterate objects
// lets see

// const lang = {
//     js: "JavaScript",
//     py: "Python",
//     rb: "Ruby",
//     swift: "Swift bu Apple",
//     java: "Java"
// }

// for(const [key, value] of lang) {
//     console.log(`${key} : ${value}`);
// }

// error is coming i.e object is not iterable
// we can't iteteate objects using for of


// ---------------------------------------------------------------------------------------------------------------------


// for in
// for in returns keys
const numbers = [1,2,3,4,5,6,7]
for(const key in numbers) {
    // key contains key i.e index
    // console.log(numbers[key])
    console.log(key);
}

// lets iterate objects
const lang = {
    js: "JavaScript",
    py: "Python",
    rb: "Ruby",
    swift: "Swift bu Apple",
    java: "Java"
}

for(const key in lang) {
    console.log(`${key} : ${lang[key]}`);
}

// can we iterate maps
// we can't bcz error comes i.e maps cant be iterate using for in 


// ---------------------------------------------------------------------------------------------------------------------


// for each
const heros = ["Thor", "Ironman", "Spiderman", "Captain marvel", "Hulk"]

// 1st way (normal func)
heros.forEach(function (item) {
    console.log(item);
})

// 2nd way (arrow func)
heros.forEach((item) => {
    console.log(item);
})

// 3rd way (only passing reference of func)
function printMe(item) {
    console.log(item);
}

heros.forEach(printMe)


// if we have array of objects [{}, {}, {}]

const games = [
    {
        gameName: "GTA",
        gameOrigin: "USA"
    },
    {
        gameName: "PUBG",
        gameOrigin: "KOREA"
    },
    {
        gameName: "FAUG",
        gameOrigin: "INDIA"
    }
]

// now how iterate
// where you found array first of all try to use forEach

games.forEach((item) => {
    console.log(`${item.gameName} is developed by ${item.gameOrigin}`);
})

