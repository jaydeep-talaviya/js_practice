function multiplyby5 (num){
    return num**2
}

multiplyby5.my_custom_num = 4

console.log(multiplyby5(5))
console.log(multiplyby5.my_custom_num)

console.log(multiplyby5.prototype);


function createUser(username,age){
    this.username = username
    this.age = age
}

createUser.prototype.increase = function(){
    this.age ++
}

createUser.prototype.printMe = function(){
    console.log(`my name is ${this.username}, i am ${this.age}`);
}

const user1 = new createUser("jay",24)
const user2 = new createUser("hiren",24)


console.log(user1.printMe())
user1.increase()
console.log(user1.printMe())

console.log(user2.printMe())
user2.increase()
user2.increase()
console.log(user2.printMe())
