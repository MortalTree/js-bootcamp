// Function - input, code, output

let greetUser = function () {
    console.log('Welcome User!')
}

greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let valueTwo = square(10)

console.log(value)
console.log(valueTwo)

// Challenge Area

    let convertFarToCel = function (farVal) {
        let celVal = (farVal - 32) * (5/9)
        return celVal
    }

    let temp1 = convertFarToCel(32)
    let temp2 = convertFarToCel(68)
    let temp3 = convertFarToCel(90)

    console.log(temp1)
    console.log(temp2)
    console.log(temp3)