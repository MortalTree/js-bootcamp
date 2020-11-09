// Global scope (convertFarToCel, tempOne, tempTwo)
  // Local scope (farVal, celVal)
    // Local scope (isFreezing)

let convertFarToCel = function (farVal) {
    let celVal = (farVal - 32) * (5/9)

    if (celVal <= 0) {
        let isFreezing = true
    }

    return celVal
}

let temp1 = convertFarToCel(32)
let temp2 = convertFarToCel(68)
let temp3 = convertFarToCel(90)

console.log(temp1)
console.log(temp2)
console.log(temp3)