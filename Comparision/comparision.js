console.log(1 > 0)
console.log(2 > 1)
console.log(5 >= 3)

// comparing different dataTypes

console.log("2" > 0)
console.log("4" <= 6)

// comparing null

// == (equality operator) and >, <, >=, <= (comparision operator) both works differently
console.log(null > 0)
console.log(null >= 0) // null converted into 0
console.log(null == 0)

// comparing undefined
console.log(undefined > 0)
console.log(undefined >= 0) 
console.log(undefined == 0)


// === strict comparision
console.log("3" === 3)