const myVariable = undefined;
if (!myVariable) {
  console.error("Undefined variable, pay attention");
}
  
const result = 10/0;
if(result === Infinity){
    console.error("We don't accept divisions by zero")
}

try{

    const notDefined = notDefinedValue;
}catch (error){
    console.error("Error has ocurred, chek please ", error);
}