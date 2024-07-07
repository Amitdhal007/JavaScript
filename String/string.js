const name = new String('Amit Kumar Dhal')
const phone = "iphone11"
console.log(typeof phone);

// string interpolation
//console.log(`my name is ${name} and i have ${phone}`)

// we can access character using key
//console.log(name[3])

// we can access prototype object which has inbuilt function
//console.log(name.__proto__)

// few inbuilt functions
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.charAt(6))
// console.log(name.indexOf('K'))

// substring, but can't use -ve index
const newName = name.substring(0, 8)
// console.log(newName);

// slice, we can use -ve index
const newPhone = phone.slice(-10, 2)
// console.log(newPhone)

// startIndex: The starting index from where to begin extraction. If negative, it's treated as str.length + startIndex.
// endIndex: The ending index up to (but not including) which to extract. If negative, it's treated as str.length + endIndex.

const newStringOne = "   macbookPro11 "
// console.log(newStringOne)
// console.log(newStringOne.trim())

const url = "https://google.com"
// console.log(url.replace('com', 'in'))

// console.log(url.includes("//"))

const myNameComp = name.split(" ")
// console.log(myNameComp[1])