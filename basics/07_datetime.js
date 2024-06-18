// dates

let date = new Date()

console.log(date);
console.log(date.toDateString());
console.log(date.toLocaleString());


let new_date = new Date(2024,0,1)  // month starts from 0
console.log(new_date)

let myCreatedDate = new Date(2023,0,23,5,3)
console.log(myCreatedDate.toLocaleString())

let myCreatedDate1 = new Date("2023-01-12")
console.log(myCreatedDate1.toLocaleString())

let myCreatedDate2 = new Date("01-14-2024")
console.log(myCreatedDate2.toLocaleString())
