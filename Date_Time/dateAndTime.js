// create date object
const myDate = new Date()
console.log(typeof myDate);
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleString())

// new way of creating date
// month starts from 0 and day also from 0 (eg jan -> 0 && mon -> 0)
const date = new Date(2023, 4, 9)
console.log(date.toDateString());

// month starts from 01
// const new_Date = new Date("2021-01-16")
const new_Date = new Date("01-14-2021")
console.log(new_Date.toDateString());

// my current timestamp (this gets calculated from 1 jan 1970 in ms)
const timeStamp = Date.now()
console.log(timeStamp);

// timestamp from (1 jan 1970) to a (particular date)
console.log(new_Date.getTime());

const curr_Date = new Date()
console.log(curr_Date);
console.log(curr_Date.getDate());
console.log(curr_Date.getMonth() + 1); // 0 based 0 means jan

console.log(curr_Date.toLocaleString('Default', {
    weekday: "long"
}));