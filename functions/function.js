//Text
function print(text){
    console.log(text)
}
print("Hi i am jiujitsu blackbelt");

//Sum
function sum(num1, num2){
    return(num1 + num2)
}
console.log(sum(22, 22));


//Round
function round(number){
    return Math.round(number);
}

//One function inside other function
print(sum(25, 25));
print(round(2.654));

//Text
function textTest(name, age){
    return `My name ir ${name} and i have ${age} years old`;
}
console.log(textTest("Pedro", 30));

//This whey i defined the default values in method, but i can chance defining new values
function textTest(name = "Andre", age = 60){
    return `My name ir ${name} and i have ${age} years old`;
}
console.log(textTest("Pedro"));
