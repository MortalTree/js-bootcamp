//LEARNING TO RETURN OBJECTS FROM FUNCTIONS

let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'Mistborn - The Final Empire',
    author: 'Brandon Sanderson',
    pageCount: 1300
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let bookSummaryTwo = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)
console.log(bookSummaryTwo.pageCountSummary)


// Challenge Area

// pass in farenheit - return object with farenheit, celsius, and kelvin

let tempConv = function (farVal) {
    return {
        farenheit: farVal,
        celsius: (farVal - 32) * (5 / 9),
        kelvin: (farVal + 459.67) * (5 / 9)
    }
}

let temps = tempConv(80)

console.log(`${temps.farenheit} degrees Fahrenheit equals ${temps.celsius} degrees Celsius and ${temps.kelvin} degrees Kelvin`)
