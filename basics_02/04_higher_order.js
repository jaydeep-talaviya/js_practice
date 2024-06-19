//  for of 

const arr = [1,2,3,4,5,6]

for (const num of arr){
    console.log(num);
}

// map function

let numbers = [1, 2, 3, 4, 5];

let doubledNumbers = numbers.map(function(num) {
    return num * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// ..............................................
const coding = ['js','ruby','java','python','cpp']
coding.forEach(function (item){console.log(item,'\n')} )


// ------------------------

let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Step 1: Filter out even numbers
let oddNumbers = numbers2.filter(function(num) {
    return num % 2 !== 0;
});

console.log(oddNumbers); // Output: [1, 3, 5, 7, 9]

// Step 2: Double each remaining number
let doubledOddNumbers = oddNumbers.map(function(num) {
    return num * 2;
});

console.log(doubledOddNumbers); // Output: [2, 6, 10, 14, 18]

// Step 3: Sum up all the doubled numbers
let sum = doubledOddNumbers.reduce(function(acc, curr) {
    return acc + curr;
}, 0);

console.log(sum); // Output: 50



// filter() is used to filter out even numbers and create a new array (oddNumbers) containing only odd numbers.
// map() is used to double each element in the oddNumbers array and create a new array (doubledOddNumbers).
// reduce() is used to sum up all the elements in the doubledOddNumbers array and calculate the final result (sum).
