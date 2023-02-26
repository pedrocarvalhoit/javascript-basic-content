///let form = 'rectangle';
//Need to be declared before use
let form = 'triangle';
let heigth =5;
let length02 =7;
let area;

if(form === 'rectangle'){
    area = heigth*length02;

}if(form === 'triangle'){
    area = (heigth * length02) / 2;

}else{
    area = null;
}

console.log(area);
console.log(typeof area);