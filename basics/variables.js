console.log("Jaydeep")

const accountId = 144232
let accountPassword = "12345"
let accountEmail = "jaydeeptalaviya@gmail.com"
accountCity = "Jaipur"
let accountBank;
// use always or prefer let always to use it into block wise 


// var
// "var" is the oldest way to declare a variable in JavaScript.
//  Variables declared with "var" have a function-level scope,
//  meaning they are only accessible within the function in which they were declared. 
// They also have "hoisting" behavior, which means they are accessible throughout the entire scope of the function, 
// regardless of where they were declared. 
// However, because of its function-level scope, variables declared with var can lead to unexpected
//  behavior and are generally not recommended.

// let
// "let" was introduced in ECMAScript 6 (also known as ES6) as an alternative to "var". 
// Variables declared with "let" have the block-level scope, meaning they are only accessible within 
// the block in which they were declared. They also have the concept of the temporal dead zone, 
// which means they are not accessible before they are declared.

// const
// "const" was also introduced in ECMAScript 6 and is used to declare variables that cannot be reassigned. 
// This makes "const" variables useful for declaring constants, such as pi or the gravitational constant, 
// which have a fixed value. Like "let", "const" variables have the block-level scope, and, they are not 
// accessible before they are declared.

// However, it is recommended to use "let" and "const" over "var" when declaring variables in JavaScript
//  because they have more predictable behavior, and "const" is the most recommended for defining constant 
// values that you don't expect to change.

accountEmail = "abc@gmail.com"
accountPassword = "21231"
accountCity = "Bengluru"


console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountBank])