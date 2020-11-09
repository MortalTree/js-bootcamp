let temp = 65

// && means the "AND" operator
// || means the "OR" operator

if (temp >= 60 && temp <=90) {
    console.log('It nice out')
} else if (temp < 0 || temp > 120) {
    console.log('It kak out')
} else {
    console.log('It meh out')
}

// Challenge area

let isOneVegan = false
let isTwoVegan = true

// are both vegan - offer vegan dishes
// at least one guest vegan - offer both
// else offer anything on menu

if (isOneVegan && isTwoVegan) {
    console.log('Only offer vegan dishes')
} else if (isOneVegan || isTwoVegan) {
    console.log('Offer some vegan dishes')
} else {
    console.log('Meat time')
}