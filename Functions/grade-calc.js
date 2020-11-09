// pass in student score, total possible score
// generate letter grade -> you got a C (75%)
// 90 - 100 A, 80 - 89 B, 70 - 79 C, 60 - 69 D, 0 - 59 F

let gradeCalc = function (score, max) {
    let perc = (score / max) * 100
    let letter = ''

    if (perc > 90) {
        letter = 'A'
    } else if (perc >= 80) {
        letter = 'B'
    } else if (perc >= 70) {
        letter = 'C'
    } else if (perc >= 60) {
        letter = 'D'
    } else {
        letter = 'F'
    }
    
    return `You got a ${letter} (${perc}%!)`
}

// call function with args
let theNews = gradeCalc(8, 50)

// print the string
console.log(theNews)

