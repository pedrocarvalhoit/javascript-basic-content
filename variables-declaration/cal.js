lPer100km = 4.9
lPrice = 1.85
TotalDistance = 3000

const gasTotal = (TotalDistance, lPer100km, lPrice) => ((TotalDistance/100) * lPer100km) * lPrice;

console.log(gasTotal(100, 4.9, 2));

//diesel
console.log("Cost with Diesel: " + gasTotal(2300, 5.1, 1.49))

//gasolina
console.log("Cost with gasolina: " + gasTotal(2300, 5.8, 1.6))