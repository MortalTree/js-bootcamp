const notes = [{
    title: 'Trip',
    body: 'I would like to go to Katberg'
}, {
    title: 'Habits',
    body: 'Swing it better'
}, {
    title: 'Gear',
    body: 'Get some zunos'
}]

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title === noteTitle
    })
}

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title === noteTitle.toLowerCase()        
//     })
//     return notes[index]
// }

const note = findNote(notes, 'Trip')
console.log(note)

// console.log(notes.length)
// console.log(notes)

// cannot use indexOf on an array of objects because it uses ===
// console.log(notes.indexOf({}))

// const index = notes.findIndex(function (note, index) {
//     return note.title === 'Habits'
// })

// console.log(index)