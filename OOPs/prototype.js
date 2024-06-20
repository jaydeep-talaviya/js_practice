// let myName = "jay     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.jay = function(){
    console.log(`jay is present in all objects`);
}

Array.prototype.heyjay = function(){
    console.log(`jay says hello`);
}

heroPower.jay()
myHeros.jay()
myHeros.heyjay()
// heroPower.heyjay()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

console.log("TeachingSupport",TeachingSupport)

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

console.log("TASupport",TASupport,TASupport.isAvailable)

Teacher.__proto__ = User
console.log("Teacher",Teacher,Teacher.name,Teacher.email)

// // modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"jay".trueLength()
"iceTea".trueLength()