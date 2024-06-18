// array


const arr = [1,2,3,4,5]

console.log(arr)

// Shallow Copy: Shallow repetition is quicker. However, it’s “lazy” it handles pointers and references. Rather than creating a contemporary copy of the particular knowledge the pointer points to, it simply copies over the pointer price. So, each of the first and therefore the copy can have pointers that reference constant underlying knowledge.

// Deep Copy: Deep repetition truly clones the underlying data. It is not shared between the first and therefore the copy.

console.log(arr[0]);


const arr2= new Array(1,2,3)

console.log(arr2)

// array methods

arr.push(10)
console.log(arr)
arr.pop()
console.log(arr)

arr.unshift(1)
console.log(arr)



console.log(arr.includes(9))

console.log(arr.indexOf(9))
console.log(arr.indexOf(2))
console.log(arr.join("_"))
console.log(arr.join())


//slice,splice

const myn1 = arr.slice(1,3)
console.log("sliced",myn1)
// original
console.log(">>> original",arr)

const myn2 = arr.splice(1,3)
console.log("sliced",myn2)
// original
console.log(">>> original",arr) 

const arr3 = [1,2,3]
const arr4 = [4,5,6]
const arr5 = [7,8,9]

arr3.push(arr4)
console.log(arr3)

console.log(arr4)
const new_arry=arr4.concat(arr5) //returns new array so arr4 will not be change.
console.log(arr4)
console.log(new_arry) 

// spred
console.log([...arr4,...arr5])


const arr6 = [1,2,[3,4],5,6,[7,4,3]]
console.log(arr6.flat(Infinity))

console.log(Array.isArray('jay'))
console.log(Array.from('jay'))
