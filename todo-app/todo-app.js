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

// - CHALLENGE
// 1. set up a div container for todos
// 2. set up a filters object (searchText) and wire up a filter input to change it
const filters = {searchText: ''}

// - CHALLENGE
// 3. create a renderTodos function to render and rerender the latest filtered data
const renderTodos = function(todos, filters) {

    // use the array method FILTER to populate a new array with object text values that match the search text 
    const filteredTodos = todos.filter(function(t) {
        return t.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const incompleteToDos = filteredTodos.filter(function (t) {
        return !t.completed
    })
//by now we have 3 arrays. Original (todos), MatchingInput(filteredToDos), NotDone(incompleteToDos)

    // clear the div
    document.querySelector('#todos-div').innerHTML = ''

    // loop through the filtered todos and populate the div with them
    filteredTodos.forEach(function(td) {
        const toAdd = document.createElement('p')
        toAdd.textContent = td.text
        document.querySelector('#todos-div').appendChild(toAdd)
    })

    const newP = document.createElement('h2')
    newP.textContent = `You have ${incompleteToDos.length} items left to complete!`
    document.querySelector('#todos-div').appendChild(newP)
}

// -CHALLENGE
renderTodos(todos, filters)

// input listener on the input -CHALLENGE
document.querySelector('#search-text').addEventListener('input', function(e) {
    // this updates the filter object with whatever is in the text input, as each key gets pressed
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})


// CHALLENGE 
// 2. set up a submit handler 
document.querySelector('#submit-form').addEventListener('submit', function (e) {
    // cancel the default action
    e.preventDefault()

    // 3. add a new item to the todos array with text data, (completed: false)
    todos.push({text: e.target.elements.action.value, completed: false})

    // 4. Rerender the app    
    renderTodos(todos, filters)
    
    // 5. Clear input field value
    e.target.elements.action.value = ''
})







// add a click listener on the button
// document.querySelector('#the-button').addEventListener('click', function (e) {
//     console.log('Add new To Do item')
// })





// const p = document.querySelectorAll('p')

// p.forEach(function(par) {
//     // let txt = par.textContent.toLowerCase()
//     if (par.textContent.toLowerCase().includes('the')) {
//         par.remove()
//     }
// })