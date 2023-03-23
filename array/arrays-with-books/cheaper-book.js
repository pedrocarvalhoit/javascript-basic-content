const books = require('./books-list')

function cheaperBook(arrProducts, inicialPosition){
    let cheaper = inicialPosition;

    for (let actual = inicialPosition; actual < arrProducts.length; actual++) {
        if (arrProducts[actual].price < arrProducts[cheaper].price) {
            cheaper = actual
        }
    }
    return arrProducts[cheaper];
};
module.exports = cheaperBook;


console.log(cheaperBook(books, 1));