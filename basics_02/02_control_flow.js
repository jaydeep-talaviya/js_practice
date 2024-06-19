// if statement:

let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
}

// if...else statement:
age = 16;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are not an adult.");
}

// if...else if...else statement:

let score = 75;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}


let fruit = "apple";
switch (fruit) {
    case "banana":
        console.log("Bananas are $0.99 a pound.");
        break;
    case "apple":
        console.log("Apples are $1.49 a pound.");
        break;
    case "orange":
        console.log("Oranges are $0.79 a pound.");
        break;
    default:
        console.log("Sorry, we are out of " + fruit + ".");
}

// Note -> == means match values without checking type , ===  compare with type


let membershipLevel = "Gold";
let purchaseAmount = 1500;
let discount;

if (membershipLevel === "Bronze") {
    if (purchaseAmount > 500) {
        discount = 5;
    } else {
        discount = 2;
    }
} else if (membershipLevel === "Silver") {
    if (purchaseAmount > 1000) {
        discount = 10;
    } else if (purchaseAmount > 500) {
        discount = 7;
    } else {
        discount = 5;
    }
} else if (membershipLevel === "Gold") {
    if (purchaseAmount > 2000) {
        discount = 20;
    } else if (purchaseAmount > 1000) {
        discount = 15;
    } else if (purchaseAmount > 500) {
        discount = 10;
    } else {
        discount = 7;
    }
} else if (membershipLevel === "Platinum") {
    if (purchaseAmount > 3000) {
        discount = 25;
    } else if (purchaseAmount > 2000) {
        discount = 20;
    } else if (purchaseAmount > 1000) {
        discount = 15;
    } else {
        discount = 10;
    }
} else {
    discount = 0; // No discount for non-members
}

console.log(`The discount is ${discount}%`);



// ..............

let destination = "international";
let weight = 5; // in kilograms
let deliverySpeed = "express"; // could be "standard" or "express"
let shippingCost;

if (destination === "domestic") {
    if (weight <= 2) {
        if (deliverySpeed === "standard") {
            shippingCost = 5;
        } else {
            shippingCost = 10;
        }
    } else if (weight <= 5) {
        if (deliverySpeed === "standard") {
            shippingCost = 10;
        } else {
            shippingCost = 15;
        }
    } else {
        if (deliverySpeed === "standard") {
            shippingCost = 15;
        } else {
            shippingCost = 20;
        }
    }
} else if (destination === "international") {
    if (weight <= 2) {
        if (deliverySpeed === "standard") {
            shippingCost = 20;
        } else {
            shippingCost = 30;
        }
    } else if (weight <= 5) {
        if (deliverySpeed === "standard") {
            shippingCost = 30;
        } else {
            shippingCost = 40;
        }
    } else {
        if (deliverySpeed === "standard") {
            shippingCost = 40;
        } else {
            shippingCost = 50;
        }
    }
} else {
    shippingCost = "Destination not supported";
}

console.log(`The shipping cost is $${shippingCost}`);



let role = "editor";
let permissions;

switch (role) {
    case "admin":
        permissions = {
            read: true,
            write: true,
            delete: true,
            manageUsers: true
        };
        break;
    case "editor":
        permissions = {
            read: true,
            write: true,
            delete: false,
            manageUsers: false
        };
        break;
    case "viewer":
        permissions = {
            read: true,
            write: false,
            delete: false,
            manageUsers: false
        };
        break;
    case "guest":
        permissions = {
            read: false,
            write: false,
            delete: false,
            manageUsers: false
        };
        break;
    default:
        permissions = {
            read: false,
            write: false,
            delete: false,
            manageUsers: false
        };
        console.log("Unknown role");
}

console.log(`Permissions for ${role}:`, permissions);


// falsy values 
// false,0,-0,BigInt 0n,"",null,undefined,NaN

// truthy values
// "0",'false'," ",[],{},function(){}



let val1;

val1 = 5 ?? 10
console.log(val1)

val1 = null ?? 12
console.log(val1)


val1 = undefined ?? 12
console.log(val1)

// ?? is nullies coalesceling operation

// condition ?num1: num2 is ternary operater