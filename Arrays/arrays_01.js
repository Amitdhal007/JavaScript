// declare a array
let myArr = [1,2,3,4,5]
// console.log(myArr);
// console.log(myArr[2]);

// shallo copy -> shallow copy is a copy of object whose properties shares the reference point (changes made will reflect in original)
// deep copy -> deep copy is a copy of object whose properties does't shares same reference point (changes made will not reflect in original)


// adding at the back
myArr.push(7)
// console.log(myArr);

// removing back element
myArr.pop()
// console.log(myArr);

// adding at front but all the element has to shift by 1 place (size inc by 1)
console.log(myArr);
myArr.unshift(8)
// console.log(myArr);

// removing that first element (array size dec by 1)
// myArr.shift()
console.log(myArr);

// asking ques
console.log(myArr.includes(4));
console.log(myArr.indexOf(4));

// string representation of array
const stringArray = myArr.join()
console.log(stringArray);
console.log(typeof stringArray);
console.log(typeof myArr);

// slice and splice
const heros = ["shaktiman", "ironman", "captain America", "thor", "hulk"]
console.log("a ->>> ", heros);

// slice basically returns a copy of section of array (last index excluding) doesnot changes original array
console.log(heros.slice(1,3))
console.log("b ->>> ", heros);

// splice basically return a piece of array and also changes the original array (last index includes)
console.log(heros.splice(1, 3));
console.log("c ->>> ", heros);
