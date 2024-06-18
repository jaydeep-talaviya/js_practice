// function


function print_anything(name){
    console.log(name)
}



print_anything('j')
print_anything('a')
print_anything('y')

function add(a,b){
    console.log(a+b)
}

add(3,4)

// rest or spred args


function get_numbers(...nums){

    return nums
}

console.log(get_numbers(1,2,3))



function get_numbers2(first_num,...nums){
    console.log(first_num)
    return nums
}

console.log(get_numbers2(1,2,3))


function get_userInfo(user){
    console.log(`my name is ${user.name}, i am ${user.age}`);
}

get_userInfo({
    name:'jay',
    age:24
})