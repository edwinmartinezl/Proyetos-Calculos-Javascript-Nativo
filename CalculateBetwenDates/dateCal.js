// Pieza Calculo entre fechas
// by Edwin Martinez Lara 
// update at: 28/10/2018

window.addEventListener("load",function() { 


let dateObject= new Object();


dateObject.button=document.getElementById("get");
dateObject.input=document.getElementById("dateInput");


dateObject.button.addEventListener("click",function() {let dateInput=dateObject.input.value;

dateObject.arrayInput=dateInput.split("");
console.log(dateObject.arrayInput)


zeroInput=dateObject.arrayInput[0];oneInput=dateObject.arrayInput[1];

twoInput=dateObject.arrayInput[2];threeInput=dateObject.arrayInput[3];





concat=zeroInput+oneInput+twoInput+threeInput;   toNumber= new Number(concat);


dateObject.yearInput=toNumber;
///////////////////////////////////////////////////////////////////////////
fiveInput=dateObject.arrayInput[5];
sixInput=dateObject.arrayInput[6];
concat2=fiveInput+sixInput;

toNumber2= new Number(concat2);
dateObject.monthInput=toNumber2;
///////////////////////////////////////////////////////////////////////

eightInput=dateObject.arrayInput[8];nineInput=dateObject.arrayInput[9];

concat3=eightInput+nineInput;
toNumber3= new Number(concat3);


dateObject.dayInput=toNumber3;

dateObject.out=document.getElementById("dateOut");

let dateOut=dateObject.out.value;

dateObject.arrayOut=dateOut.split("");


zeroOut=dateObject.arrayOut[0];
oneOut=dateObject.arrayOut[1];


twoOut=dateObject.arrayOut[2];
threeOut=dateObject.arrayOut[3];

concat4=zeroOut+oneOut+twoOut+threeOut;
toNumber4= new Number(concat4);


dateObject.yearOut=toNumber4;


fiveOut=dateObject.arrayOut[5];
sixOut=dateObject.arrayOut[6];
concat5=fiveOut+sixOut;
toNumber5= new Number(concat5);

dateObject.monthOut=toNumber5;

eightOut=dateObject.arrayOut[8];
nineOut=dateObject.arrayOut[9];concat6= eightOut+nineOut;toNumber6= new Number(concat6);dateObject.dayOut=toNumber6;



// part 2 calculate between dates
/*ID del boton: get / ID fecha de entrada: dateInput
 ID fecha de salida: dateOut /   */
 
 calculateDay=(dateObject.dayOut-dateObject.dayInput);


 calculateMonth= (dateObject.monthOut-dateObject.monthInput);


 calculateYear= (dateObject.yearOut-dateObject.yearInput);

if (calculateDay<0) {calculateDay=calculateDay+30; calculateMonth=calculateMonth-1  };
if (calculateMonth<0) {calculateMonth=calculateMonth+12; calculateYear=calculateYear-1;}
if (calculateYear<0) {calculateDay="Error"; calculateMonth="Error";calculateYear="Error"; }
console.log(calculateDay+" "+"days");
console.log(calculateMonth+" "+"months");
console.log(calculateYear+" "+"Years");































   

})// button
})// function global