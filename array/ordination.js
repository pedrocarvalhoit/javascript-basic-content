const books = require('./books-list')

const prices = [25,15,30,50,45,10];

let cheaper = 0;

for (let actual = 0; actual < books.length; actual++) {
    if (books[actual].price < books[cheaper].price) {
        cheaper = actual
    }
}

console.log(books[cheaper].price);