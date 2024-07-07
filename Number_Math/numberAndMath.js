const num = 400
console.log(num);

const x = new Number(100)
console.log(x);

console.log(x.toString().length);

// decimal upto 2
console.log(x.toFixed(2));

const n = 123.78
console.log(n.toPrecision(3));
console.log(n.toPrecision(4));

const money = 1000000

console.log(money.toLocaleString('en-IN'));

// ---------- math ----------

console.log(Math.round(5.2))


// random number between 200 - 300

let min = 200
let max = 300

console.log(Math.floor(Math.random() * (max - min + 1) + min))
console.log(Math.ceil(2.8))

