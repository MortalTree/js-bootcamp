// var firstName = 'Justin'
// firstName = 'Kirk'

// you can re-declare a variable with var - not ideal
// var firstName = 'Lakweesha'

// console.log(firstName)


if (10 === 10) {
    var firstName = 'Lakweesha'
}

// this will throw an error if LET is used above
console.log(firstName)

// VAR IS FUNCTION SCOPED SO THIS WILL NOT WORK
// The IF statement will work because it is not 
// a function

function varra () {
    var hambana = 'Jaaa'
}
console.log(hambana)