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

// add an event listener
document.querySelector('button').addEventListener('click', function (e) {
    // console.log('Did this work?')
    // console.log(e)
    // e.target.textContent = 'The button was clicked'
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