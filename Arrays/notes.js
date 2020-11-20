const notes = [{}, {
    title: 'Trip',
    body: 'I would like to go to Katberg'
}, {
    title: 'Habits',
    body: 'Swing it better'
}, {
    title: 'Gear',
    body: 'Get some zunos'
}]

// // pop removes last item from the end and returns it
// console.log(notes.pop())
// // push adds an item to the end
// notes.push('Note 4')

// // shift removes from the front
// console.log(notes.shift())
// // unshift adds an item to the front
// notes.unshift('Real first note!')

// // start at index 1 and remove 1 item
// notes.splice(1, 1)

// // start at index 1 and add an item
// notes.splice(1, 0, 'New Note 2')

// // start at index 1, delete 1, add new item
// notes.splice(1, 1, 'New Note wacho')

// notes.forEach(function(a, b) {
//     console.log(a)
//     console.log(b)
// })

console.log(notes.length)
console.log(notes)

console.log(notes.indexOf({}))