//1 parameter
const arrowPresentation = name => `My name is: ${name}.`;

//2 or more must have ()
const arrowAgain = (program, goal) => `You need the program ${program}, to achive the goal ${goal}`;

console.log(arrowPresentation("Pedro"));
console.log(arrowAgain("Strength Traning", "2 kg muscle mass"));

const smallNumbersSum = (num1, num2) => {
    if(num1 >= 10 || num2 >= 10){
        return "Just numbers under 10 please"
    }else{
        return num1 + num2
    }
}
console.log(smallNumbersSum(2, 5));