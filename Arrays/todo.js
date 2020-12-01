// CHALLENGE AREA
// 1. Convert array to array of objects -> text, completed
// 2. Create function to remove a todo by text value
// -----------------------------------------------------------------------------------------
const toDo = [{
    text: 'Eat Meat',
    completed: true
}, {
    text: 'Farm Invincible',
    completed: false
}, {
    text: 'Bone Down',
    completed: false
}, {
    text: 'Pluck a String',
    completed: false
}, {
    text: 'Dudu',
    completed: true
}]

// function takes the array, and a text value 
const deleteTodo = function (toDo, textSpace) {
    // function finds the index by calling findIndex
    // findIndex method has a function parameter which
    // takes in the "title" of the object item (in our case the text is literally "item")
    // it then returns true or false, and if true then the const index will be set to the index of the array 
    // where the text is found
    const index = toDo.findIndex(function (item) {
        // return index
        return item.text.toLowerCase() === textSpace.toLowerCase()
    })
    
    if (index > -1) {
        toDo.splice(index, 1)
    }    
}

// deleteTodo(toDo, 'pluck a string')
// console.log(toDo)

// console.log(`You have ${toDo.length} things to do!`)

// // forEach is lekker if you have data
// toDo.forEach(function (item, index) {
//     console.log(`${index + 1}. ${item}`)
// })

// for (count = 0; count < toDo.length; count++) {
//     console.log(`${count + 1}. ${toDo[count]}`)
// }
// -----------------------------------------------------------------------------------------

// CHALLENGE AREA (filter)
// our function is to return list items that have not been done (completed: false)

// function takes in the array of objects above
const getThingsToDo = function(toDo) {
    // filters the completed status and returns true if there are false ones
    return toDo.filter(function(done, index) {
        // return done.completed === false
        return !done.completed
    })
}

// console.log(getThingsToDo(toDo))

// CHALLENGE AREA (sort)

const sortToDoCompletes = function (toDo) {
    toDo.sort(function(a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

console.log(toDo)
sortToDoCompletes(toDo)
console.log(toDo)