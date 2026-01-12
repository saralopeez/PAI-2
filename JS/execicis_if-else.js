//14.1.- Escriu un programa que, donat un número llegit amb prompt, escrigui el missatge “el número llegit és negatiu” si el número és més petit que zero i escrigui el missatge “el número llegit és positiu” en cas contrari.

//let num = parseInt(prompt("Introdueix un número"));

//if (num < 0) {
  //  console.log("El número llegit és negatiu");
//} else { 
  //  console.log("El número llegit és positiu");
//}


//14.2.- Escriu un programa que donat un número llegit amb prompt, escrigui el missatge “el número llegit és parell” si el número es parell i “el número llegit es senar” en cas contrari.

//let num = parseInt(prompt("Introdueix un número"));

//if (num % 2 === 0) {
  //  console.log("El número llegit és parell");
//} else  { 
  //  console.log("El número llegit és senar");
//}

//14.3.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola quin és el més gran. Només pots fer servir una instrucció if-else.

//let num1 = parseInt(prompt("Introdueix el primer número"));
//let num2 = parseInt(prompt("Introdueix el segon número"));

//if (num1 > num2) {
  //  console.log("El número més gran és:", num1);
//} else {
  //  console.log("El número més gran és:", num2);
//}

//14.4.- Escriu un programa que, donat tres números llegits amb prompt, escrigui a la consola quin es el més gran. Pista. Comprova si el primer número llegit és el més gran. Si no és així, comprova si el més gran és el segon. Si tampoc ho és, el més gran, sens dubte, serà el tercer.

//let num1 = parseInt(prompt("Introdueix el primer número"));
//let num2 = parseInt(prompt("Introdueix el segon número"));
//let num3 = parseInt(prompt("Introdueix el tercer número"));

//if (num1 > num2 && num1 > num3) {
  //  console.log("El número més gran és:", num1);
//} else if (num2 > num1 && num2 > num3) {
    //console.log("El número més gran és:", num2);
//} else {
  //  console.log("El número més gran és:", num3);
//}

//4.5.- Escriu un programa que, donats tres números llegits amb prompt, escrigui a la consola els tres números ordenats.

//let num1 = parseInt(prompt("Introdueix el primer número"));
//let num2 = parseInt(prompt("Introdueix el segon número"));
//let num3 = parseInt(prompt("Introdueix el tercer número"));
//let menor, mig, major;

//if (num1 < num2 && num1 < num3) {
  //menor = num1;
  //if (num2 < num3) {
    //mig = num2;
   // major = num3;
 // } else {
    //mig = num3;
    //major = num2;
  //}
//} else if (num2 < num1 && num2 < num3) {
  //menor = num2;
  //if (num1 < num3) {
    //mig = num1;
    //major = num3;
  //} else {
    //mig = num3;
    //major = num1;
  //}
//} else {
  //menor = num3;
  //if (num1 < num2) {
    //mig = num1;
    //major = num2;
  //} else {
    //mig = num2;
    //major = num1;
  //}
//}
//console.log("Números ordenats:", menor, mig, major);

//14.6.- En un control d’alcoholèmia necessiten un programa que els hi digui si una persona pot conduir o no. El programa demanarà dues dades: Si la persona té carnet de conduir i el valor que ha sortit a la prova d’alcoholèmia. El programa ha de respondre que sí pot conduir si té carnet de conduir i la prova d’alcoholèmia ha donat un valor inferior a 0.25

//let teCarnet = prompt("Tens carnet de conduir? (sí / no):");
//let alcohol = parseFloat(prompt("Introdueix el valor de la prova d’alcoholèmia:"));

//if (teCarnet === "sí" ) {
  //if (alcohol < 0.25) {
    //console.log("Pots conduir.");
  //} else {
    //console.log(" No pots conduir: alcoholèmia massa alta.");
  //}
//} else {
  //console.log(" No pots conduir: no tens carnet.");
//}

//13.7.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola el resultat de restar al nombre més gran el nombre més petit.

//let num1 = parseInt(prompt("Introdueix el primer número"));
//let num2 = parseInt(prompt("Introdueix el segon número"));

//if (num1>num2) {
  // resultat = num1-num2;
//} else {
  // resultat = num2-num1
//}
//console.log("La resta del nombre més gran el nombre més petit:", resultat);

//14.8.- Escriu un programa que simuli la compra a una web. L’usuari haurà d’introduir una quantitat (el que cal pagar) per teclat fent servir la instrucció prompt.

//En cas que la quantitat sigui 30€ o més, es mostrarà a la consola un missatge indicant que el cost total és de 30€ donat que el transport és gratis.
//En cas que la quantitat sigui inferior a 30€, es mostrarà un missatge dient el preu total que consistirà en l’introduït més 4.95€ en concepte de cost d’enviament.

//let quantitat= parseFloat(prompt("Introdueix la quantitat que cal pagar:"));

//if (quantitat >=30){
  //  console.log("El cost total és de 30€ (transport gratis).");
//} else {
  //  let total = quantitat + 4.95;
    //console.log("El cost total és de " + total + "€ (" + quantitat + "€ + 4.95€ d'enviament).");
//}

//14.9.- Un usuari va a una gelateria i per calcular el cost del seu gelat té un ordinador on posa dues dades:
//Si vol un conus (c) o una terrina (t). El conus té un cost base de 3.45 i la terrina de 3.95
//Quin d’aquests sabors vol:
//Vainilla o Xocolata. No cal afegir res
//Turró, Menta o Oreo. Caldrà afegir 0.5 al preu final.
//Crema, Gerds o Ametlles. Caldrà afegir 1 al preu final.

//Si l’usuari posa alguna dada malament, el missatge que es posarà a la consola serà “Error dades mal introduïdes”. Si totes les dades són correctes, escriurà el preu final.

//let tipus = prompt("Vols un conus (c) o una terrina (t)?");
//let sabor = prompt("Quin sabor vols? \n1. Vainilla o Xocolata \n2. Turró, Menta o Oreo \n3. Crema, Gerds o Ametlles");
//let preuBase;

//if (tipus === "c") {
  //preuBase = 3.45;
//} else if (tipus === "t") {
  //preuBase = 3.95;
//} else {
  //console.log("Tipus de gelat incorrecte.");
//}

//let suplement = 0;

//if (sabor === "1") { //en vez de numero se podria poner el sabor
 // suplement = 0;
//} else if (sabor === "2") {
  //suplement = 0.5;
//} else if (sabor === "3") {
 // suplement = 1;
//} else {
  //console.log("Sabor incorrecte.");
//}

//let preuFinal = preuBase + suplement;
//console.log("El preu final del teu gelat és: " + preuFinal + " €");

