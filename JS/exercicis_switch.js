//15.1.- Fent servir la instrucció switch escriu un programa que donat amb prompt un número de mes, entre 1 i 12, escrigui per pantalla el nom del mes que correspon.

//let mes = parseInt(prompt("Introdueix un número de mes (1 al 12): "));
//let text;

//switch (mes) {
  //case 1:
    //text = "Gener";
    //break;
  //case 2:
    //text = "Febrer";
    //break;
  //case 3:
   // text = "Març";
    //break;
  //case 4:
    //text = "Abril";
    //break;
  //case 5:
    //text = "Maig";
    //break;
  //case 6:
    //text = "Juny";
    //break;
  //case 7:
    //text = "Juliol";
    //break;
  //case 8:
    //text = "Agost";
    //break;
  //case 9:
    //text = "Setembre";
    //break;
  //case 10:
    //text = "Octubre";
    //break;
  //case 11:
    //text = "Novembre";
    //break;
  //case 12:
    //text = "Desembre";
    //break;
  //default:
    //text = "Número de mes invàlid. Si us plau, introdueix un valor entre 1 i 12.";
//}
//console.log(text);

/*15.2.- Un usuari va a una gelateria i per calcular el cost del seu gelat té un ordinador on
posa dues dades:
Si vol un conus (c) o una terrina (t). El conus té un cost base de 3.45 i la terrina de 3.95
Quin d’aquests sabors vol:
Vainilla o Xocolata. No cal afegir res
Turró, Menta o Oreo. Caldrà afegir 0.5 al preu final.
Crema, Gerds o Ametlles. Caldrà afegir 1 al preu final.

Si l’usuari posa alguna dada malament, el missatge que es posarà a la consola serà “Error dades mal introduïdes”. Si totes les dades són correctes, escriurà el preu final. 

let tipus = prompt("Vols un conus (c) o una terrina (t)?");
let sabor = prompt("Quin sabor vols? \n1. Vainilla o Xocolata \n2. Turró, Menta o Oreo \n3. Crema, Gerds o Ametlles");
let preuBase;
let suplement;

switch (tipus) {
  case "c":
    preuBase = 3.45;
    break;
  case "t":
    preuBase = 3.95;
    break;
  default:
    preuBase = null;
}

switch (sabor) {
  case "1":
    suplement = 0;
    break;
  case "2":
    suplement = 0.5;
    break;
  case "3":
    suplement = 1;
    break;
  default:
    suplement = null; 
}

if (preuBase === null || suplement === null) {
  console.log("Error: dades mal introduïdes.");
} else {
  let preuFinal = preuBase + suplement;
  console.log("El preu final del teu gelat és: " + preuFinal + " €");
}

15.3.- Escriu un programa, que donat una lletra que representa un dia de la setmana (l - dilluns, m - dimarts, x - dimecres, j - dijous, …) escrigui a la consola si el dia és laborable o festiu. Són laborables de dilluns a divendres. Fes servir la instrucció switch.

let dia = prompt("Introdueix una lletra del dia de la setmana (l, m, x, j, v, s, d):");

switch (dia) {
  case "l": 
  case "m": 
  case "x": 
  case "j": 
  case "v": 
    console.log("És un dia laborable.");
    break;
  case "s": 
  case "d": 
    console.log("És un dia festiu.");
    break;
  default:
    console.log("Error: lletra incorrecta. Introdueix una de les següents: l, m, x, j, v, s, d.");
}*/
