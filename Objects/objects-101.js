let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

// Challenge Area

// name, age, location
// Justin is 36 and lives in East London
// Increase age by 1 and print message again

let person = {
    name: 'Justin',
    age: 36,
    location: 'East London'
}

console.log(`${person.name} is ${person.age} years old and lives in ${person.location}`)

person.age += 1

console.log(`${person.name} is ${person.age} years old and lives in ${person.location}`)