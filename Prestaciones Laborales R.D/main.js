// Pieza Calculo entre fechas
// by Edwin Martinez Lara 
// update at: 28/10/2018
// variables:
let dateInput,dateOut,change,pM,pQ,pS, comunDays, comunMonths;
let preConvertionNumberDay, preDecimalDay, preImputDays, preInputMonths, preConvertionNumberMonth, preMoreAddDays; 
let preConvertionNumberYear, preFor12, preIputYears, preTotalMonths; 
let regalia=new Object();
let applyDay,n,totalAll,x,vacInput,vacaPor,n2,circle2,preaviso01=true;
let cesantiaDays, cesantiaTotalMonhts, cesantiaMonth,cdays=14;
let totalAll4,regaliaApply,suelPro,proPrice, cesadayTotal,calpres,totalAll5;
const day21=21, day23=23, tiempoDias=360;
window.addEventListener("load",function() { 
document.getElementById("reset").addEventListener("click",function() {
// button for reset all

// removing class to date input
$("#dateInput").removeClass("errorDateInputEfects"); 
$("#dateInput").removeClass("correctInputDate"); 
// removing class to date out
$("#dateOut").removeClass("errorDateInputEfects"); 
$("#dateOut").removeClass("correctInputDate"); 
// price monto
$("#price").removeClass("errorDateInputEfects"); 
$("#price").removeClass("correctInputDate"); 



cleanAll=new Object();
cleanAll.dateInput=document.getElementById("dateInput").value="";
cleanAll.dateOut=document.getElementById("dateOut").value="";
cleanAll.price=document.getElementById("price").value="";
document.getElementById("dayValue").innerText="";
document.getElementById("dayValueVac").innerText="";
document.getElementById("monthValue").innerText="";
document.getElementById("monthValueVaca").innerText="";
document.getElementById("yearValue").innerText="";
document.getElementById("yearValueVaca").innerText="";
document.getElementById("dayValueCesantia").innerText="";
document.getElementById("monthValueCesantia").innerText="";
document.getElementById("yearValueCesantia").innerText="";
document.getElementById("priceValueVaca").innerText="";
document.getElementById("priceValueCesantia").innerText="";
document.getElementById("priceValue").innerText=""; 
document.getElementById("egual").innerText=""; 
document.getElementById("egualVaca").innerText=""; 
document.getElementById("egualCesantia").innerText=""; 
document.getElementById("tableDay").innerText="";
document.getElementById("tableDayVacaciones").innerText="";
document.getElementById("tableDayCesantia").innerText="";
document.getElementById("yearRegalia").innerText="";
document.getElementById("monthRegalia").innerText="";
document.getElementById("dayRegalia").innerText="";        
document.getElementById("priceRegalia").innerText=""; 
document.getElementById("applyRegalia").innerText="";        
document.getElementById("egualRegalia").innerText="";        
  // when clean all



});    
let dateObject= new Object();dateObject.button=document.getElementById("get");
dateObject.input=document.getElementById("dateInput");
dateObject.button.addEventListener("click", function calcular() {
//App Protect for error
conversationToNumber();dateError.error01(); paymentforDay();preaviso();
vacaciones();cesantia();regalia();writingOnpage();totalGeneral();
dateInputEfects(); dateOutEfects(); priceEfects();   validate();
totalPrestacionesRD();     })// button
// create a new function for the converation of date
function conversationToNumber() { dateInput=dateObject.input.value;dateObject.arrayInput=dateInput.split("");
zeroInput=dateObject.arrayInput[0];oneInput=dateObject.arrayInput[1];
twoInput=dateObject.arrayInput[2];threeInput=dateObject.arrayInput[3];
    concat=zeroInput+oneInput+twoInput+threeInput;toNumber= new Number(concat);
    dateObject.yearInput=toNumber;fiveInput=dateObject.arrayInput[5];
    sixInput=dateObject.arrayInput[6];concat2=fiveInput+sixInput;
    toNumber2= new Number(concat2);dateObject.monthInput=toNumber2;
    eightInput=dateObject.arrayInput[8];nineInput=dateObject.arrayInput[9];
    concat3=eightInput+nineInput;toNumber3= new Number(concat3);
    dateObject.dayInput=toNumber3;dateObject.out=document.getElementById("dateOut");
     dateOut=dateObject.out.value;dateObject.arrayOut=dateOut.split("");
    zeroOut=dateObject.arrayOut[0];oneOut=dateObject.arrayOut[1];
    twoOut=dateObject.arrayOut[2];threeOut=dateObject.arrayOut[3];
    concat4=zeroOut+oneOut+twoOut+threeOut;toNumber4= new Number(concat4);
    dateObject.yearOut=toNumber4;fiveOut=dateObject.arrayOut[5];
    sixOut=dateObject.arrayOut[6];concat5=fiveOut+sixOut;toNumber5= new Number(concat5);
    dateObject.monthOut=toNumber5;eightOut=dateObject.arrayOut[8];
    nineOut=dateObject.arrayOut[9];concat6= eightOut+nineOut;toNumber6= new Number(concat6);dateObject.dayOut=toNumber6;
    //console.log(dateObject);
    // part 2 calculate between dates
    /*ID del boton: get / ID fecha de entrada: dateInput
     ID fecha de salida: dateOut /   */
     calculateDay=(dateObject.dayOut-dateObject.dayInput);
     calculateMonth= (dateObject.monthOut-dateObject.monthInput);
     calculateYear= (dateObject.yearOut-dateObject.yearInput);
    if (calculateDay<0) {calculateDay=calculateDay+30; calculateMonth=calculateMonth-1};
    if (calculateMonth<0) {calculateMonth=calculateMonth+12; calculateYear=calculateYear-1;}
    if (calculateYear<0) {calculateDay="0";   calculateMonth="0"; calculateYear="0";};
    };// conversion a numero
    
    function writingOnpage() {
// App Protect for Error
if(  (calculateDay>=0)&&(calculateMonth>=0)&&(calculateYear>=0)    ) {
    document.getElementById("dayValue").innerText=calculateDay;
    document.getElementById("dayValueVac").innerText=calculateDay;
    document.getElementById("monthValue").innerText=calculateMonth;
    document.getElementById("monthValueVaca").innerText=calculateMonth;
    document.getElementById("yearValue").innerText=calculateYear;
    document.getElementById("yearValueVaca").innerText=calculateYear;
    document.getElementById("dayValueCesantia").innerText=calculateDay;
    document.getElementById("monthValueCesantia").innerText=calculateMonth;
    document.getElementById("yearValueCesantia").innerText=calculateYear;
    document.getElementById("yearRegalia").innerText="0";
    document.getElementById("monthRegalia").innerText=comunMonths;
    document.getElementById("dayRegalia").innerText=comunDays;  
};

 //Apply for X days
 document.getElementById("applyRegalia").innerText=regaliaApply+" "+"dias";
 if(  (calculateMonth==0)&&(calculateDay==0)&&(calculateYear==0)  ) { document.getElementById("applyRegalia").innerText="No";};
// fecha no seleccionada



};// writing on page

 // App protect in case of a error
 let dateError=new Object();
 dateError.error01= function() {
if (calculateYear<0)   { alert("error-01:"+" "+"La fecha de entrada no puede ser mayor a la de salida")};};


  // Calculate of the payment for day
// by Edwin Martinez Lara
// update: 28/10/2018
    accounting= new Object();
    accounting.pLfor30=(23.83);
     pM=accounting.pLfor30;
    accounting.pLfor15=(11.915);
     pQ=accounting.pLfor15;
    accounting.pLfor7=(5.9575);
     pS=accounting.pLfor7;
    let change=0, pagoDiario;
    accounting.for30=document.getElementById("for30");
    accounting.for30.addEventListener("click",function () {
    change=pM;console.log(change);})
    accounting.for15=document.getElementById("for15");
    accounting.for15.addEventListener("click",function() {
    change=pQ;console.log(pQ);})
    accounting.for7=document.getElementById("for7");

    accounting.for7.addEventListener("click",function() {
    change=pS;console.log(pS);})

    function paymentforDay() {
    // within of the event click
    accounting.price=document.getElementById("price");
    accounting.getNow=document.getElementById("getNow");
   // accounting.getNow.addEventListener("click",function() {
        // get the price for day
        anumero=accounting.price.value;
        anumero=new Number(anumero);
     if (change==pM) {console.log("per 30"); pagoDiario=(anumero/pM);};
     if (change==pQ) {console.log("per 15");pagoDiario=(anumero/pQ); };
     if (change==pS) {console.log("per 7"); pagoDiario=(anumero/pS); };
     if (change==0) {console.log("error 001 si no coloca nada en mensual, quincenal o semanla"); };
     if (anumero<=0) { console.log("error 002 alerta falta el sueldo");
     document.getElementById("priceValueVaca").innerText="";
    document.getElementById("priceValueCesantia").innerText="";
    document.getElementById("priceValue").innerText=""; };
     if (pagoDiario<=0) {console.log("error 003 valor incorrecto")}
     // randon now
     x=new Number(pagoDiario);
     redondeo=x.toFixed(2);
     if (pagoDiario>=1) {console.log(redondeo)
    document.getElementById("priceValueVaca").innerText=redondeo;
    document.getElementById("priceValueCesantia").innerText=redondeo;
    document.getElementById("priceValue").innerText=redondeo;  
  // sueldo no escrito o igual a cero
    if (anumero<=0) {             }
}
}// pago por dia
   
    

function preaviso() {
    
  // by Edwin Martinez lara
//update: 23/10/2018
// Prestaciones Laborales
// CALCULO - PREAVISO

preImputDays=calculateDay;
preConvertionNumberDay= new Number(preImputDays);
preDecimalDay= preConvertionNumberDay/30;
//console.log(preDecimalDay);
// months 
preInputMonths= calculateMonth;
preConvertionNumberMonth= new Number(preInputMonths);
// sum of days and months
preMoreAddDays=preConvertionNumberMonth+preDecimalDay;
//console.log(preMoreAddDays);
// from years to months
preIputYears= calculateYear;
preConvertionNumberYear= new Number(preIputYears);
preFor12= preConvertionNumberYear*12;
//console.log(preFor12);
// now total of motnhs 
preTotalMonths= preMoreAddDays+preFor12;
console.log(preTotalMonths+" "+"Total Months");

// rules for calculate the PREAVISO
if (preTotalMonths < 2.97) {console.log("sorry! does not apply");  document.getElementById("tableDay").innerText="No";applyDay=0; };
if( (preTotalMonths >=3)  && (preTotalMonths <= 5.96 )){
    console.log("7 days"); document.getElementById("tableDay").innerText="7 dias"; applyDay=7;  }
if (  (preTotalMonths >=6) && (preTotalMonths <= 11.96 ) ) {
      console.log("14 days"); document.getElementById("tableDay").innerText="14 dias"; applyDay=14; };
if (  (preTotalMonths >=12) && (preTotalMonths <= 563.96 ) ) {
    console.log("28 days");  document.getElementById("tableDay").innerText="28 dias"; applyDay=28;}
if (preTotalMonths >=564 ) { console.log("28 days" + " "+ "alert: You need a PENSION NOW")}
}//preaviso



// calculate of the Vacaciones
// by Edwin Martinez Lara
// update 24/10/2018


    function vacaciones() {

        
    vacInput=preTotalMonths;
    if (vacInput < 4.96) {console.log("We Sorry does not aplly");;document.getElementById("tableDayVacaciones").innerText="No"; vacaPor=0;  };
    if ( (vacInput >=5 ) && (vacInput <= 5.96 ))   {console.log("6 dias");document.getElementById("tableDayVacaciones").innerText="6 dias";vacaPor=6;    };
    if ( (vacInput >=6 ) && (vacInput <= 6.96 ))   {console.log("7 dias");document.getElementById("tableDayVacaciones").innerText="7 dias";vacaPor=7;        };
    if ( (vacInput >=7 ) && (vacInput <= 7.96 ))   {console.log("8 dias");document.getElementById("tableDayVacaciones").innerText="8 dias"; vacaPor=8;        };
    if ( (vacInput >=8 ) && (vacInput <= 8.96 ))   {console.log("9 dias");document.getElementById("tableDayVacaciones").innerText="9 dias"; vacaPor=9;         };
    if ( (vacInput >=9 ) && (vacInput <= 9.96 ))   {console.log("10 dias");document.getElementById("tableDayVacaciones").innerText="10 dias";vacaPor=10;         };
    if ( (vacInput >=10 ) && (vacInput <= 10.96 ))   {console.log("11 dias");document.getElementById("tableDayVacaciones").innerText="11 dias";vacaPor=11;       };
    if ( (vacInput >=11 ) && (vacInput <= 11.96 ))   {console.log("12 dias");document.getElementById("tableDayVacaciones").innerText="12 dias";vacaPor=12;        };
    if ( (vacInput >=12 ) && (vacInput <= 59.96 ))   {console.log("14 dias");document.getElementById("tableDayVacaciones").innerText="14 dias";vacaPor=14;        };
    if ( (vacInput >=60 ) && (vacInput <= 563.96 ))   {console.log("18 dias");document.getElementById("tableDayVacaciones").innerText="18 dias";vacaPor=18;        };
    if  (vacInput >=564 ) {console.log("Uff! you need a Pension already");document.getElementById("tableDayVacaciones").innerText="0";vacaPor=0;            };
        }//vacaciones

    
//Cesantia
// Table of the days
// by Edwin Martinez Lara
// update: 31/10/2018
function cesantia() {
    
    cesantiaTotalMonhts= ((calculateDay/30)+(calculateYear*12)+(calculateMonth));
//cesantiaMonth=prompt("writes only the months");
if (cesantiaTotalMonhts<=2.96 ) {console.log("does not apply Cesantia");document.getElementById("tableDayCesantia").innerText="No";cesadayTotal=0;    };    
if ((cesantiaTotalMonhts>=3) && (cesantiaTotalMonhts<=5.96)){ cesadayTotal=6;console.log(cesadayTotal+" "+"Cesantia"); document.getElementById("tableDayCesantia").innerText=cesadayTotal+" "+"dias"; };
if ((cesantiaTotalMonhts>=6) && (cesantiaTotalMonhts<= 11.96)){ cesadayTotal=13;console.log(cesadayTotal+" "+"Cesantia");document.getElementById("tableDayCesantia").innerText=cesadayTotal+" "+"dias";};
// calculate now per years, work with 21 days
// here take the year only and after the months for get the days and can sum to the months
if(  (cesantiaTotalMonhts>=12 ) &&(cesantiaTotalMonhts <=59.96)){
if (calculateMonth<=2) {console.log(day21+" "+ "day per year Cesantia" ); cesadayTotal=(day21*calculateYear); console.log(cesadayTotal+" "+"days Cesantia ");document.getElementById("tableDayCesantia").innerText=cesadayTotal+" "+"dias";  }; 
if ((calculateMonth>=3) && (calculateMonth<=12)){cesadayTotal= ((day21*calculateYear)+(calculateDay)); console.log(cesadayTotal+" "+"Cesantia");document.getElementById("tableDayCesantia").innerText=cesadayTotal+" "+"dias"; }  };
// calculate now per years, work with 23 days
if(  (cesantiaTotalMonhts>=60 ) &&(cesantiaTotalMonhts <=503.96)){
    if (calculateMonth<=2) {console.log(day23+" "+ "day per year Cesantia"); cesadayTotal=(day23*calculateYear); console.log(cesadayTotal+" "+"days Cesantia");document.getElementById("tableDayCesantia").innerText=cesadayTotal+" "+"dias";  }; 
    if ((calculateMonth>=3) && (calculateMonth<=12)){cesadayTotal= ((day23*calculateYear)+(calculateDay)); console.log(cesadayTotal+" "+"Cesantia Days"); document.getElementById("tableDayCesantia").innerText=cesadayTotal+" "+"dias";   }};
// AppProtect error 
if (cesantiaTotalMonhts>504) {console.log("Error verifique pension Cesantia");document.getElementById("tableDayCesantia").innerText=0+" "+"dias";};
// does not apply


}//Cesantia

// Regalia Pascual
// Prestaciones Laborales
// by Edwin Martinez Lara
// update: 02/11/2018
function regalia() {
if (calculateYear>=1) {
    // contar desde enero
    if ((dateObject.monthOut>=2)&&(dateObject.monthOut)<=12)  {regaliaApply=((dateObject.monthOut-1)*(30)+(dateObject.dayOut)); console.log(regaliaApply);
         comunMonths=(dateObject.monthOut-1); comunDays=(dateObject.dayOut);
        if ((dateObject.monthOut==12)&&(dateObject.dayOut>=6)) { regaliaApply=360;};}
    if (dateObject.monthOut==1) {regaliaApply=(dateObject.dayOut);comunMonths=(dateObject.monthOut-1);comunDays=(dateObject.dayOut);}};
      
if (calculateYear<1) {
regaliaApply= ((calculateMonth*30)+(calculateDay));
comunDays=calculateDay;comunMonths=calculateMonth; 
};




}// regalia



        function totalGeneral() {
            suelPro=(anumero/360);
            proPrice=suelPro.toFixed(2);
            document.getElementById("priceRegalia").innerText=proPrice;
            if (proPrice<=0) {document.getElementById("priceRegalia").innerText="";};
            totalAll4=(suelPro*regaliaApply)
            totalAll5=totalAll4;
            totalAll4=totalAll4.toFixed(2);
            totalAll=(x*applyDay);// preaviso
            totalAll2=(x*vacaPor);//vacaciones
            totalAll3=(x*cesadayTotal);//Cesantia
            n3=new Number(totalAll3);
            circle3=n3.toFixed(2);
            n2=new Number(totalAll2);
            circle2=n2.toFixed(2);
            n=new Number(totalAll);
            circle=n.toFixed(2);
            document.getElementById("egual").innerText=circle;
            document.getElementById("egualVaca").innerText=circle2; 
            document.getElementById("egualCesantia").innerText=circle3; 
            document.getElementById("egualRegalia").innerText=totalAll4; 
            // sueldos no escritos
            if (applyDay<=0) {document.getElementById("egual").innerText="0.00";};
            if (vacaPor<=0) {document.getElementById("egualVaca").innerText="0.00";};
            if (cesadayTotal<=0) {document.getElementById("egualCesantia").innerText="0.00";};

            }//totalGeneral
    
    
    
    
    
   // validate all the results
   function validate() { 
    if (anumero<0) {document.getElementById("applyRegalia").innerText="";};   
   if(  (calculateDay>=0)&&(calculateMonth>=0)&&(calculateYear>=0)&&(anumero>=1)&& (change>=1)) 
    { document.getElementById("controlResults").style.display="block";}
   // faltan datos
else{ alert("uhh Valla!! Esto no deveria pasar si completaste todos los campos.. que raro!");};

};

//efects and more for UI from CALPRES
// date of input
$("#dateInput").mouseover(function() {
 //console.log("entraste") ; 
$("#dateInput").addClass("enterInput");});
// out of the element
$("#dateInput").mouseout(function() {
   // console.log("Saliste") ; 
$("#dateInput").removeClass("enterInput");});
// date of out
$("#dateOut").mouseover(function() {
   // console.log("entraste") ; 
   $("#dateOut").addClass("enterInput");});
   // out of the element
   $("#dateOut").mouseout(function() {
      // console.log("Saliste") ; 
   $("#dateOut").removeClass("enterInput");});
   // price monto
   $("#price").mouseover(function() {
    //console.log("entraste") ; 
   $("#price").addClass("enterInput");});
   // out of the element
   $("#price").mouseout(function() {
      // console.log("Saliste") ; 
   $("#price").removeClass("enterInput");});
       
// Efects for error of data input
function dateInputEfects() {
    if (dateObject.dayInput>0) {
    console.log("cuando escribes la fecha de entrada"); 
    $("#dateInput").removeClass("errorDateInputEfects"); 
    $("#dateInput").addClass("correctInputDate");   }
else{console.log("no has introducido la fecha de entrada") ;
$("#dateInput").addClass("errorDateInputEfects");};
   
}//function Date Out  

// Efects for error of data out
function dateOutEfects() {
    if (dateObject.dayOut>0) {
    console.log("cuando escribes la fecha de entrada"); 
    $("#dateOut").removeClass("errorDateInputEfects"); 
    $("#dateOut").addClass("correctInputDate");   }
else{console.log("no has introducido la fecha de entrada") ;
$("#dateOut").addClass("errorDateInputEfects");};
   
}//function Date input   
   
// Efects for error of data out
function priceEfects() {
    if (anumero>0) {
    console.log("Has escrito un monto"); 
    $("#price").removeClass("errorDateInputEfects"); 
   $("#price").addClass("correctInputDate");   
}
else{console.log("nada en monto") ;
 $("#price").addClass("errorDateInputEfects");
};
   
}//function Date input   
   
    
// Total Prestaciones RD$
function totalPrestacionesRD() {
 console.log(totalAll+" "+"Preaviso");
 console.log(totalAll2+" "+"Vacaciones");
 console.log(totalAll3+" "+"Cesantia");
 console.log(totalAll5+" "+"Regalia");

 calpres=(totalAll+totalAll2+totalAll3+totalAll5);
 calpres=calpres.toFixed(2);
$("#generalAll").html(calpres);} // total prestaciones 
    
 
$(".x").click(function() {
$("#tr1").css("color","red");console.log("ofuso");
$(".x").addClass("y");$(".x").removeClass("x") 
});
$(".y").click(function() {
    $("#tr1").css("color","black");console.log("ofuso");
    $(".x").addClass("x");$(".y").removeClass("y") 
    });
    
    


    
    
    
    
    
    
       
    
 
    })// function global