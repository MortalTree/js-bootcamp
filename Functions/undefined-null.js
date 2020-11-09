// Undefined for variable
let name = 'Justin'


if (name === undefined) {
    console.log('No name provided')
} else {
    console.log(name)
}


// Undefned for function arguments
// Undefined as the function return default value
let square = function (num) {
    console.log(num)
}

let result = square()
console.log(result)

// Null as assigned value
let age = 36

//age = undefined
age = null

console.log(age)
