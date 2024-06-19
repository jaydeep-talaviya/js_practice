let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evens = [];
let odds = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evens.push(numbers[i]);
    } else {
        odds.push(numbers[i]);
    }
}

console.log("Even numbers: ", evens);
console.log("Odd numbers: ", odds);



let students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 68 },
    { name: "David", score: 74 },
    { name: "Eve", score: 58 }
];
let grades = [];

for (let i = 0; i < students.length; i++) {
    let grade;
    if (students[i].score >= 90) {
        grade = "A";
    } else if (students[i].score >= 80) {
        grade = "B";
    } else if (students[i].score >= 70) {
        grade = "C";
    } else if (students[i].score >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }
    grades.push({ name: students[i].name, grade: grade });
}

for (let i = 0; i < grades.length; i++) {
    console.log(`${grades[i].name} received a grade of ${grades[i].grade}`);
}


for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        let result = i * j;
        console.log(`${i} * ${j} = ${result}`);
    }
    console.log(''); // Adding a blank line for readability between rows
}

let rows = 5;

for (let i = 1; i <= rows; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '* ';
    }
    console.log(pattern);
}



// break

let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 7;
let found = false;

for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] === target) {
        found = true;
        console.log(`Found ${target} at index ${i}`);
        break; // Exit the loop immediately
    }
}

if (!found) {
    console.log(`${target} not found in the array.`);
}

// continue

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        continue; // Skip the rest of this loop iteration for even numbers
    }
    console.log(numbers[i]); // This will only print odd numbers
}

//---------------------------------------------------------
console.log(".......................................")
// while loop

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}


let n = 5; // You can change this number to calculate the factorial of a different number
let factorial = 1;
let j = 1;

while (j <= n) {
    factorial *= j; // Multiply the current value of factorial by i
    j++; // Increment i by 1
}

console.log(`The factorial of ${n} is ${factorial}`);


// ------------- do while -------------------

console.log(">......................................................<")

let n1 = 5; // You can change this number to calculate the factorial of a different number
let factorial1 = 1;
let i1 = 1;

do {
    factorial1 *= i1; // Multiply the current value of factorial by i
    i1++; // Increment i by 1
} while (i1 <= n1);

console.log(`The factorial of ${n1} is ${factorial1}`);