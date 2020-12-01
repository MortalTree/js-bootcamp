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

// sorting objects is more complicated than alphabetical sorting so we do need to write a function for it.
const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

sortNotes(notes)
console.log(notes)

// const note = findNote(notes, 'Trip')
// console.log(note)

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

// console.log(findNotes(notes, 'would'))