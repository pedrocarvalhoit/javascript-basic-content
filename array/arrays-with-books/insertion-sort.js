const books = require("./books-list");

function insertionSort(list) {

    for (let actual = 0; actual < list.length; actual++) {
      let analysis = actual;
      while (analysis > 0 && list[analysis].price < list[analysis - 1].price) {
        let itemanalysis = list[analysis];
        let previousItem = list[analysis - 1];
      
        list[analysis] = previousItem
        list[analysis - 1] = itemanalysis
  
        analysis--
      }
    }
    console.log(list);
  }
  
  insertionSort(books);
