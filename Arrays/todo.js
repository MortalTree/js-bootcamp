const toDo = ['Eat Meat', 'Farm Invincible', 'Bone Down', 'Pluck a String', 'Dudu']

// delete 3rd item
toDo.splice(2, 1)

// add new item on the end
toDo.push('Dream')

// remove the first item 
toDo.shift()

console.log(`You have ${toDo.length} things to do!`)

// forEach is lekker if you have data
toDo.forEach(function (item, index) {
    console.log(`${index + 1}. ${item}`)
})

for (count = 0; count < toDo.length; count++) {
    console.log(`${count + 1}. ${toDo[count]}`)
}