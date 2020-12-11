// DOM - Document Object Model

const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const filters = {
    searchText: ''
}

// takes all notes and functions, figures out which note matches the search text
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    
    // clear the div
    document.querySelector('#notes').innerHTML = ''

    // add the new filtered div
    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

// call it here to make sure all notes show initially
renderNotes(notes, filters)

// add click listener
document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'The button was clicked'    
})

document.querySelector('#remove-all').addEventListener('click', function () {
    document.querySelectorAll('.note').forEach(function(note) {
        note.remove()
    })
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})






// PRACTICE NOTES
// add a new element
// const newP = document.createElement('p')
// newP.textContent = 'This is a new element from JS!'
// document.querySelector('body').appendChild(newP)

// Query and remove 
// const p = document.querySelector('p')
// p.remove()

// Query ALL and remove or replace 
// const ps = document.querySelectorAll('p')
// ps.forEach(function (paragraph) {
//     paragraph.textContent = '******'    
//     // paragraph.remove()
// })