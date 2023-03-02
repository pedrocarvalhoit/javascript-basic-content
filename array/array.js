const average = (num1, num2, num3, num4) => (num1 + num2 + num3 + num4)/4;
console.log(average(5,10,5,10));

const values = [5, 10, 5, 10];
const averageWithArray = (values[0] + values[1] + values[2] + values[3])/ average.length;
console.log(averageWithArray);

//Insert
values.push(13);
console.log(values);

//Remove
values.pop();
console.log(values);

//Filter
const filter = values.filter(values => values > 5);
console.log("Filtered Array: " + filter);