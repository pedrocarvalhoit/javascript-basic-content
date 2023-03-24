const books = require("./ordered-array");

function search(array, from, to, searchValue){
    const midle = Math.floor((from, to) / 2);
    const actual = array[midle];

    if(from > to){
        return -1;
    }

    if(searchValue === actual.preco){
        return midle;
    }

    if(searchValue < actual.preco){
        return search(array, from, midle -1, searchValue);
    }

    if(searchValue > actual.preco){
        return search(array, midle + 1, to, searchValue);
    }
}

console.log(search(books, 0, books.length -1, 20));