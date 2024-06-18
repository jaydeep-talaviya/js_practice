// Primitives : Primitive values are the most basic types of data. 
// They are immutable, meaning their value cannot be changed once created
// Primitive data structure is a data structure that can hold a single value in a specific location

// total 7 types:

// string,Number,Boolean,Null,undefined,Symbol,BigInt


// Non-Primitives:the non-linear data structure can hold multiple values either in a contiguous location or random locations
// Non-primitives, or reference types, include objects and functions. 
// Unlike primitive values, which are stored directly in the location the variable accesses, non-primitives are stored as references.

// Array,Objects,Functions


// -------------------------------------

// Stack(Primitives)           Heap(Non-primitive)


let myemail = 'jaydeeptalaviya8@gmail.com'


let myemail_dup = myemail
myemail_dup='jaydeeptalaviya7@gmail.com'
console.log('duplicate value',myemail_dup)

console.log('origional value',myemail)




let user1 = {'email':'jaydeeptalaviya8@gmail.com','age':24}

let user2 = user1
user2.email = 'jaydeeptalaviya7@gmail.com'
console.log('user2 referenced from user 1',user2.email)
console.log('user1 origional value changed ',user1.email)