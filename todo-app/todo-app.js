const todos = [{
    text: 'Crush some squash',
    completed: false
}, {
    text: 'Have a run',
    completed: true
}, {
    text: 'Jam some WoW',
    completed: true
}, {
    text: 'Shred some Parkway',
    completed: false
}, {
    text: 'Pwn JS',
    completed: true
}]

// const p = document.querySelectorAll('p')

// p.forEach(function(par) {
//     // let txt = par.textContent.toLowerCase()
//     if (par.textContent.toLowerCase().includes('the')) {
//         par.remove()
//     }
// })

// use filter - it will return an array of filtered items, then just specify length
const incompleteToDos = todos.filter(function (t) {
    return !t.completed
})
const newP = document.createElement('h2')
newP.textContent = `You have ${incompleteToDos.length} items left to complete!`
document.querySelector('body').appendChild(newP)

// add a paragraph for each toDo above
    // text of paragraph = text property
todos.forEach(function (t) {
    const p = document.createElement('p')
    p.textContent = t.text
    document.querySelector('body').appendChild(p)
})


// add a click listener on the button
document.querySelector('button').addEventListener('click', function (e) {
    console.log('Add new To Do item')
})