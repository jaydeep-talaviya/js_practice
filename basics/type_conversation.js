let scope="33"

console.log(scope)

console.log(typeof scope)

let valueInNumber = Number(scope)
console.log(typeof valueInNumber)

console.log(valueInNumber);



valueInNumber = Number("33safs")
console.log(typeof valueInNumber)

console.log(valueInNumber);


const isLoggedIn = 1;

console.log(Boolean(isLoggedIn))

let mystr = "";

console.log(Boolean(mystr))

mystr = "hello";

console.log(Boolean(mystr))


//  string complex conversions
console.log("-------------------------")

console.log("1"+2)
console.log("1"+"2")
console.log(1+"2")
console.log("1"+2+2)
console.log(1+2+"2")

console.log("--------------------------")

console.log(+true)


// If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

// If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.

let gameCounter1=100
gameCounter1++
console.log(gameCounter1)

let gameCounter2=100
++gameCounter2
console.log(gameCounter2)

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
