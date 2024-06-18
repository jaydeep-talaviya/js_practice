// objects literals

const JsUser = {
    name:"Jaydeep",
    age:24,
    location:"Gir somnath",
    isLoggedIn:true,
    email:"jaydeep@gmail.com"
}
console.log(JsUser)
console.log(JsUser.name)
console.log(JsUser['name'])

JsUser.email = 'talaviya@gmail.com'

console.log(JsUser)

JsUser.myfunc = function(){
    return "this is my function"
}
console.log(JsUser)
console.log(JsUser.myfunc())


JsUser.myfunc2 = function(){
    return `my name is ${this.name}`
}
console.log(JsUser.myfunc2())


//  .................................

const tinderUser = {}

tinderUser.id=1
tinderUser.name = 'jaydeep'
tinderUser.email = 'jaydeeptalaviya8@gmail.com'
tinderUser.isLoggedIn = false

console.log(tinderUser)

console.log(tinderUser.hasOwnProperty('email'))

const regularUser = {
    email:'jaydeeptalaviya8@gmail.com',
    fullname: {
        userfullname: {
            firstname:'jay',
            lastname:'talaviya'
        }
    }
}
console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname);


const obj1 = {a:"1",b:"2"}
const obj2 = {c:"3",d:"4"}

const obj3 = {obj1,obj2}

console.log(obj3);

const obj4 = Object.assign({},obj1,obj2)
console.log(obj4)

console.log({...obj1,...obj2})


const users = [
    {id:1,name:'jay'},
    {id:2,name:'hiren'},
    {id:3,name:'prince'}
]

// desctructor

const {name} = tinderUser

console.log(name)