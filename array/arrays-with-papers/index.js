const {edGalho, edFolha} = require("./arrays");

function joinLists(list1, list2){
    let finalList = [];
    let actualPositionList1 = 0;
    let actualPositionList2 = 0;
    let actual = 0;

    while (actualPositionList1 < list1.length && actualPositionList2 < list2.length){
        let actualProductList1 = list1[actualPositionList1];
        let actualProductList2 = list2[actualPositionList2];
        
        if (actualProductList1.preco < actualProductList2.preco) {
            finalList[actual] = actualProductList1;
            actualPositionList1++;
          } else {
            finalList[actual] = actualProductList2;
            actualPositionList2++;
          }
      
          actual++;
    }

    while (actualPositionList1 < list1.length) {
        finalList[actual] = list1[actualPositionList1];
        actualPositionList1++;
        actual++;
      }
    
      while (actualPositionList2 < list2.length) {
        finalList[actual] = list2[actualPositionList2];
        actualPositionList2++;
        actual++;
      }

    return finalList;
}

console.log(joinLists(edGalho, edFolha));

