//Need to initialize before use
const form = 'triangle';
const heigth =5;
const length02 =7;

if(form === 'rectangle'){
    const area = heigth*length02;

}if(form === 'triangle'){
    const area = (heigth * length02) / 2;

}else{
    const area = null;
}

console.log(area);
console.log(typeof area)