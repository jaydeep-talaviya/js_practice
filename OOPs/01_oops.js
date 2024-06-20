// Object-Oriented Programming (OOP) in JavaScript involves using objects and classes to structure and 
// manage code. 
// JavaScript supports OOP concepts such as encapsulation, inheritance, and polymorphism.


// Classes and Instances
// A class is a blueprint for creating objects (instances) with predefined properties and methods. 
// In JavaScript, you can define a class using the class keyword.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Creating an instance of the Person class
const person1 = new Person('Jay', 25);
person1.greet(); // Output: Hello, my name is John Doe and I am 30 years old.


// Inheritance
// Inheritance allows a class to inherit properties and methods from another class. 
// In JavaScript, you use the extends keyword to create a subclass.


class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age); // Call the parent class constructor
        this.jobTitle = jobTitle;
    }

    work() {
        console.log(`${this.name} is working as a ${this.jobTitle}.`);
    }
}

// Creating an instance of the Employee class
const employee1 = new Employee('Jay', 24, 'Software Engineer');
employee1.greet(); // Output: Hello, my name is Jane Doe and I am 28 years old.
employee1.work(); // Output: Jane Doe is working as a Software Engineer.


// Encapsulation
// Encapsulation means restricting direct access to some of an object's components and using getters and setters to access and modify those components.
class User {
    constructor(username, password) {
        this.username = username;
        let _password = password; // Private variable

        this.getPassword = function() {
            return _password;
        };

        this.setPassword = function(newPassword) {
            _password = newPassword;
        };
    }
}

// Creating an instance of the User class
const user1 = new User('user123', 'pass123');
console.log(user1.username); // Output: user123
console.log(user1.getPassword()); // Output: pass123

user1.setPassword('newPass456');
console.log(user1.getPassword()); // Output: newPass456


// Polymorphism
// Polymorphism allows objects of different classes to be treated as objects of a common superclass. This is typically achieved through method overriding.

class Animal {
    speak() {
        console.log('Animal is making a sound.');
    }
}

class Dog extends Animal {
    speak() {
        console.log('Dog is barking.');
    }
}

class Cat extends Animal {
    speak() {
        console.log('Cat is meowing.');
    }
}

const animals = [new Dog(), new Cat()];

animals.forEach((animal) => {
    animal.speak(); // Output: Dog is barking. Cat is meowing.
});
