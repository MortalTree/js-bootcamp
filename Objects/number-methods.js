// let num = 103.941

// console.log(num.toFixed(2))

// round
// console.log(Math.round(num))
// round up
// console.log(Math.floor(num))
// round down
// console.log(Math.ceil(num))

// generate a random number between min and max
// let min = 0
// let max = 100
// let randomNum = Math.floor(Math.random() * (max - min + 1))

// console.log(randomNum)

// Challenge Area

// function to take in guess
// generate random in range
// return true or false

function makeGuess(n) {
    let x = Math.floor(Math.random() * (5 - 1 + 1))
    if (x === n) {
        console.log('Correct! You guessed ' + n + '. Answer is ' + x);
    } else {
        console.log('Incorrect! You guessed ' + n + '. Answer is ' + x);
    }
}

makeGuess(3)