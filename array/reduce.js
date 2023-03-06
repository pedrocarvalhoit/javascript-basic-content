
//Total avarage

const classJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const classJava = [6, 5, 8, 9, 5, 6];
const classPython = [7, 3.5, 8, 9.5];

function classAvarage(selectedClass){
    const notesSum = selectedClass.reduce((acc, notes) => acc + notes, 0)//This 0 is the initial value of acumulator
    
    const avarage = notesSum/ selectedClass.length;
    console.log(`Class selected has total avarage: ${avarage}`);
};

classAvarage(classJS);
classAvarage(classJava);
classAvarage(classPython);

