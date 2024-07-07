let marvel_heros = ["ironman", "captian america", "hulk", "thor"]
let dc_heros = ["superman", "batman", "flash", "aquaman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// adding using spread operator
// const usingSpread = [...marvel_heros, ...dc_heros]
// console.log(usingSpread);

// using concatinate (doesnot changes the original array)
// marvel_heros.concat(dc_heros)
const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros);

// making this multi level array into one
const another_array = [1, 2, [4, 7, 8], 9, [12, 89, 67, [23, 78, [9, 99]], 66], 89]
const newAnotherArray = another_array.flat(Infinity)
console.log(newAnotherArray);

// checking whether is it a array or not
console.log(Array.isArray(marvel_heros));

// making array from a element (array, variable, object) etc
console.log(Array.from("IronMan (Tony Stark)"));
// [
//     'I', 'r', 'o', 'n', 'M',
//     'a', 'n', ' ', '(', 'T',
//     'o', 'n', 'y', ' ', 'S',
//     't', 'a', 'r', 'k', ')'
//   ]

console.log(Array.from({name: "AmitKumar"})); // -> [] bcz you have to specify your requirement whether you want key or value to make array


// making array from multiple element (array, variable, object) etc
const score = 200
const score2 = 300
const score3 = 788

console.log(Array.of(score2, score, score3));