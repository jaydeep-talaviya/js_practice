const a=1
let b=2
var c=3

console.log(a)
console.log(b)
console.log(c)


if (true){
    const d=1
    let e=2
    var f = 3
}

//console.log(d) // throw error ReferenceError: d is not defined
// console.log(e) //ReferenceError: e is not defined
console.log(f)


let counter = 10

if (true){
    let counter = 100
    console.log('inner scope',counter);
}
console.log('outer',counter);


// ......................


function one(){

    const username = 'jay'
    function two(){
        const website = 'https://jaytalaviya.in'
        console.log(username)
    }
    // console.log(website) throw error website not declared
    two()
}

one()



// another syntax
const addTwo = function(a,b){
    return a+b
}

const result = addTwo(3,4)
console.log(result);


// arrow function 

const chai = () => {
    console.log(">>>",this)
}

chai()

const chai2 = (user) => {
    console.log(">>>",user)
}


user = {
    username:'jay',
    age:25
}
chai2(user)


const addTwoArr = (num1,num2) => (num1 +  num2) 

console.log(addTwoArr(4,5));


// immediately invoked function execution

function IIfe() {
    console.log("invoked")
};              
// IIfe()

// Note: please add ";" else you will get error 

((name)=>{
    console.log("invoked again",name)
})('hiren');