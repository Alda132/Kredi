function kredi(money,paymantMonths){
var interestRate=0.045;
console.log("Interesi eshte : ",interestRate )
console.log("Shuma e kerkuar per kredi :", money , "leke");
console.log ("Kredia kerkohet per : ", paymantMonths ,"muaj")
var interes = money*interestRate;
var shumaTotale =money+interes; 
console.log("Shuma totale qe do paguaje eshte : ", shumaTotale);
console.log("Shuma totale e interesit pasi te jete shlyer e gjithe kredia do jete : ", interes);

}
kredi(2000000,4);

function krediMujore(money,paymantMonths){
var interesMujor=0.045/12;
for (var i=0;i<paymantMonths;i++){
 var interesi=money*interesMujor;
 var pagesaTotale=money+interesi;
 var pagesaMujore= pagesaTotale/paymantMonths;
 console.log("Pagesa per muajin " ,i+1 ,"eshte ",pagesaMujore);
}
}

krediMujore(2000000,5);
console.log("Ushtrimi 1 me variablin is previous client");
function krediMujoreIsPreviousClient(money,paymantMonths,isPreviousClient){
  var interesMujor=0.045/12;
if (isPreviousClient===true){

  for (var i=0;i<paymantMonths-1;i++){
    var interesi=money*interesMujor;
    var pagesaTotale=money+interesi;
    var pagesaMujore= pagesaTotale/paymantMonths;
    console.log("Pagesa per muajin " ,i+1 ,"eshte ",pagesaMujore);
  }

}else { 

  for (var i=0;i<paymantMonths;i++){
   var interesi=money*interesMujor;
   var pagesaTotale=money+interesi;
   var pagesaMujore= pagesaTotale/paymantMonths;
   console.log("Pagesa per muajin " ,i+1 ,"eshte ",pagesaMujore);
  }
  }
  }
  krediMujoreIsPreviousClient(2000000,5,true);







console.log("Ushtrimi 2");

function krediMujore1(money,paymantMonths){   //https://stackoverflow.com/questions/65667251/auto-loan-calculator-formulas
  var interesMujor=0.045/12;
  var interesi=money*interesMujor;
  var pagesaTotale=money+interesi;
  var kesti1= pagesaTotale/paymantMonths;
  console.log("Pagesa e pare mujore eshte : ", kesti1 );
for (var i=1 ;i<paymantMonths;i++){
var  a = pagesaTotale-kesti1;
var b =paymantMonths-i;
var kesti2 =a /b;
pagesaTotale=a;
kesti1=kesti2;
console.log("Vlera a qe eshte shuma  gjithsej per tu paguar :", a );
console.log("Pagessaaaa e kestit ",i +1 ,"eshte:",kesti2 );

}
//console.log("Vlera a :", a );
//console.log("Pagessaaaa :",kesti2 );
//console.log("pagesa totale pas pageses se kestit te dyte :", pagesaTotale);
//console.log("kesti1:", kesti1 );
console.log(`Pagesa e kestit te peste eshte  ${kesti2} dhe shuma qe ka mbetur per tu paguar pas kestit te fundit eshte ${pagesaTotale}`);
}

krediMujore1(2000000,5);


console.log("Ushtrimi 2 me variablin e shtuar is previous client ");

function krediMujore1IsPreviousClient(money,paymantMonths,isPreviousClient){   
  var interesMujor=0.045/12;
  var interesi=money*interesMujor;
  var pagesaTotale=money+interesi;
  var kesti1= pagesaTotale/paymantMonths;
  console.log("Pagesa e pare mujore eshte : ", kesti1 );
  
 if (isPreviousClient===true){

  for (var i=1 ;i<paymantMonths-1;i++){
    var  a = pagesaTotale-kesti1;
    var b =paymantMonths-i;
    var kesti2 =a /b;
    pagesaTotale=a;
    kesti1=kesti2;
    console.log("Vlera a qe eshte shuma  gjithsej per tu paguar :", a );
    console.log("Pagessaaaa e kestit ",i ,"eshte:",kesti2 );
    
    }
    //console.log("Vlera a :", a );
    //console.log("Pagessaaaa :",kesti2 );
    //console.log("pagesa totale pas pageses se kestit te dyte :", pagesaTotale);
    //console.log("kesti1:", kesti1 );
    console.log(`Pagesa e kestit te peste eshte  ${kesti2}`);

  }else { 
  
for (var i=1 ;i<paymantMonths;i++){
var  a = pagesaTotale-kesti1;
var b =paymantMonths-i;
var kesti2 =a /b;
pagesaTotale=a;
kesti1=kesti2;
console.log("Vlera a qe eshte shuma  gjithsej per tu paguar :", a );
console.log("Pagessaaaa e kestit ",i +1 ,"eshte:",kesti2 );

}
//console.log("Vlera a :", a );
//console.log("Pagessaaaa :",kesti2 );
//console.log("pagesa totale pas pageses se kestit te dyte :", pagesaTotale);
//console.log("kesti1:", kesti1 );
console.log(`Pagesa e kestit te peste eshte  ${kesti2}`);
  }
}

krediMujore1IsPreviousClient(2000000,5,true);
