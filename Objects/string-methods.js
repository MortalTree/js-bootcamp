// Documentation for string methods: 
// 

let name = ' Justin Davis '

console.log(name.length)
console.log(name.toUpperCase())

let password = 'abc123pfdfd098'
console.log(password.includes('password')) // boolean

console.log(name.trim())

// Challenge Area

// isValidPassword boolean
// length > 8 
// doesn't contain 'password'

let isValidPassword = function (strink) {
    return strink.length > 8 && !strink.includes('password')
}

console.log(isValidPassword('huak'))
console.log(isValidPassword('123456789*&*'))
console.log(isValidPassword('12345678password9'))