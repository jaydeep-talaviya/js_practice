const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);


console.log(balance.toString());
console.log(balance.toString().length);

console.log(balance.toFixed(2));
console.log(balance.toFixed(3));

const otherNum = 123.960

console.log(otherNum.toPrecision(4));

console.log(otherNum.toLocaleString());


const hundreds = '1000000'
console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++++++++++ MATH +++++++++++++++++++++++++++++++++++

console.log(Math)

console.log(Math.abs(-4))

console.log(Math.round(4.3))
console.log(Math.ceil(4.66))


console.log(Math.floor(4.66))


console.log(Math.sqrt(4))


console.log(Math.random()) // always returns bet 0 to 1

console.log(Math.floor(Math.random()*10+1)) // returns to 0 - 10

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min +1)+min))