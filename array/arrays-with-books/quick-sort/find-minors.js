const books = require("./arrays");

//Find books with price under the pivot
function findMinors(pivot, array){
    let minors;

    for (let actual = 0; actual < array.length; actual++) {
        let actualProduct = array[actual];
        if(actualProduct.preco < pivot.preco){
            minors++
        }
    }

    positionChanger(array, array.indexOf(pivot), minors)
    return array;
}

function positionChanger(array, from, to){
    const elem1 = array[from];
    const elem2 = array[to];

    array[to] = elem1;
    array[from] = elem2;
}

console.log(findMinors(books[2], books));