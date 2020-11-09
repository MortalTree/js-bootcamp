// Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

//Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    console.log(name)
    console.log(score)
    // return 'Name: ' + name + ' - Score: ' + score
    return `Name: ${name} - Score: ${score}`
}

// Only first arg
//let scoreText = getScoreText('Jayston') 

// Only second arg
let scoreText = getScoreText(undefined, 90) 
console.log(scoreText)

//Challenge Area
// A 25% tip on R40 would be R10
let getTip = function(total, tipPerc = .2) {
    // return total * tipPerc
    let dispTip = tipPerc * 100
    let tipVal = total * tipPerc

    return `A ${dispTip}% tip on R${total} would be R${tipVal}`
}

let theTip = getTip(100, .15)

console.log(theTip)

// using Back Tick and $ followed by curly braces
// allows you to inject variables into strings
let name = 'Justin'
let age = 36
console.log(`Hey, my name is ${name}! I am ${age} years old.`)

