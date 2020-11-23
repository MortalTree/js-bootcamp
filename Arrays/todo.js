const toDo = [{
    text: 'Eat Meat',
    completed: 'Y'
}, {
    text: 'Farm Invincible',
    completed: 'N'
}, {
    text: 'Bone Down',
    completed: 'Y'
}, {
    text: 'Pluck a String',
    completed: 'Y'
}, {
    text: 'Dudu',
    completed: 'Y'
}]

// function takes the array, and a text value 
const deleteTodo = function (toDo, textSpace) {
    // function finds the index by calling findIndex
    // findIndex method has a function parameter which
    // takes in the "title" of the object item (in our case the text is literally "item")
    // it then returns true or false, and if true then the const index will be set to the index of the array 
    // where the text is found
    const index = toDo.findIndex(function (item, indice) {
        return item.text.toLowerCase() === textSpace.toLowerCase()
    })
    // return index
    toDo.splice(index, 1)
}

deleteTodo(toDo, 'pluck a string')
console.log(toDo)

// // delete 3rd item
// toDo.splice(2, 1)

// // add new item on the end
// toDo.push('Dream')

// // remove the first item 
// toDo.shift()

// console.log(`You have ${toDo.length} things to do!`)

// // forEach is lekker if you have data
// toDo.forEach(function (item, index) {
//     console.log(`${index + 1}. ${item}`)
// })

// for (count = 0; count < toDo.length; count++) {
//     console.log(`${count + 1}. ${toDo[count]}`)
// }



// CHALLENGE AREA
// 1. Convert array to array of objects -> text, completed
// 2. Create function to remove a todo by text value

