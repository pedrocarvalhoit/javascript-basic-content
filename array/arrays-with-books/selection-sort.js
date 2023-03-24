const books = require('./books-list');
const cheaperBook = require('./cheaper-book');

for (let actual = 0; actual < books.length - 1; actual++) {
    let smaller = cheaperBook(books, actual)
  
    let actualBook = books[actual];
    console.log('Actual position', actual)
    console.log('Actual book', books[actual])
    let cheaperBookPrice = books[smaller];
    console.log('Chepear book price', books[smaller])
  
    books[actual] = cheaperBookPrice
    books[smaller] = actualBook
  }
  
  console.log(books)
  console.log("---------------")

//With sort method
function sortByPrice(list){
    const sortedBooks = [...list];
    sortedBooks.sort((a, b) => a.price - b.price);
    return sortedBooks;    
}

console.log(sortByPrice(books));