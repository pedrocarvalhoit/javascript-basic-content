const prices = [25,15,30,50,45,10];

let cheaper = 0;

for (let actual = 0; actual < prices.length; actual++) {
    if (prices[actual] < prices[cheaper]) {
        cheaper = actual
    }
}

console.log(prices[cheaper]);