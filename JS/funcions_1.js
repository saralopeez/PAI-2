/*Exercici 3.1
 Escriu un script que contingui una funció a la qual se li passa com a paràmetre un nombre enter i retorna com a resultat 
 una cadena de text que indica si el número és parell o imparell. Mostra per pantalla el resultat retornat per la funció.

 function parellSenar(nombre) {
  let resultat = "";
  if (nombre % 2 === 0) {
    // Si el residu de dividir per 2 és 0, el nombre és parell
    resultat = "El nombre és parell";
  } else {
    resultat = "El nombre és senar";
  }
  return resultat;
}

Exercici 3.2
Escriu un script que comprovi si un any donat és de traspàs. Un any és de traspàs si és múltiple de 4, excloent 
els que siguin múltiples de 100, però no els que siguin múltiples de 400. Per exemple, l'any 1900 no va ser de traspàs, 
el 2000 sí i el 2100 no ho és. 

function anyTraspas(any) {
  let esTraspas = false;
  if (any % 4 === 0) {  // És múltiple de 4
    esTraspas = true;
    if (any % 100 === 0 && any % 400 !== 0) // És múltiple de 100 però no de 400
      esTraspas = false;
  }
  return esTraspas;
}

Exercici 3.3
Feu un script que inclogui una funció que, donat un enter N, retorni ∑ (1 / n2 ) per a 0 < n ≤ N.

function sumatori(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += 1 / (i * i);
  }
  return sum;
}

Exercici 3.4
Feu una funció que calculi la nota final d'un alumne. L'script ha de rebre per teclat el següent:  
Nota final d’avaluació continuada, Nota de pràctiques i Nota d’examen, i es mostrarà per pantalla la nota 
final en base a les formules donades.

El càlcul de la nota final serà diferent depenent de si l’estudiant ha seguit o no l’avaluació continuada, 
i de la nota d’aquesta:

Si la nota d’avaluació continuada és més gran o igual que 5, la nota final la calcularem com: 

NOTA_FINAL = 0,2 * NOTA_AC + 0,4 * NOTA_PRACT + 0,4 * NOTA_EXAMEN 

Si la nota d’avaluació continuada és menor que 5, la nota final la calcularem com: 

>NOTA_FINAL = 0,4 * NOTA_PRACT + 0,6 * NOTA_EXAMEN 

On NOTA_FINAL és la nota final de l’assignatura que hem de calcular, NOTA_AC és la nota d’avaluació continuada, 
NOTA_PRACT és la nota de pràctiques, i NOTA_EXAMEN és la nota de l’examen. 

La funció ha de retornar una cadena que contingui el valor numèric de la nota final obtinguda per l’alumne, 
seguit de la nota però en format lletra, fent servir la següent taula de conversió: 

Si la nota final és menor que 5 tindrà una D. 
Si la nota final és major o igual que 5 i menor que 6,5 tindrà una C.
Si la nota final és major o igual que 6,5 i menor que 8 tindrà una B. 
Si la nota final és major o igual que 8 i menor que 10 tindrà una A.
>I si la nota final és un 10 tindrà una H. 
Important: Totes tres notes seran valors numèrics, i podem suposar que sempre tindrem els tres valors i seran més grans 
o iguals que 0. 


function notaFinal(notaAC, notaPr, notaEx) {
  let notaFi = 0,
    notaFiLletra = "";
  if (notaAC <= 5) {
    notaFi = 0.2 * notaAC + 0.4 * notaPr + 0.4 * notaEx;
  } else {
    notaFi = 0.4 * notaPr + 0.6 * notaEx;
  }
  if (notaFi < 5) {
    notaFiLletra = "D";
  } else if (notaFi < 6.5) {
    // La nota no és més petita que 5 (estem al else) i és més petita que 6.5
    notaFiLletra = "C";
  } else if (notaFi < 8) {
    notaFiLletra = "B";
  } else if (notaFi < 10) {
    notaFiLletra = "A";
  } else {
    notaFiLletra = "MH";
  }
  return notaFiLletra;
}

Exercici 3.5
Hem organitzat un concurs a Twitter que consisteix en fer relats curs (màxim 280 caràcters) amb el màxim número 
de paraules de 5 caràcters. Per poder donar el premi, el que volem fer és classificar tots  els tuits segons el 
nombre de paraules de 5 caràcters que tenen i, per tant, necessitem una funció que, donada una frase, ens retorni 
el número de paraules de 5 caràcters que té.

Per fer aquesta funció haurem de tenir en compte que: 

Totes les frases acaben en un punt (.) y totes comencen sempre per una paraula. 
Una paraula acaba quan apareix una coma (,) o un espai en blanc. 
Les frases només poden tenir lletres, comes, espais en blanc y el punt final. No tindrem en compte que pugui aparèixer 
cap altre caràcter. 
Per conèixer la llargària de la frase (quants caràcters té) podem fer servir la propietat length del Strings de 
JavaScript (consulteu https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Str ing/length 
  per saber com fer-la servir) 

  function concurs(relat) {
  let paraulesDe5Lletres = 0;
  let lletres = 0; // número de lletres de la paraula actual
  let i = 0; // posició en la cadena de caràcters
  // Per saber quan he d'acabar, tinc en compte que la cadena acaba en punt.
  while (relat[i] !== ".") {
    if (relat[i] === " ") {
      // si trobem un espai, estem canviant de paraula
      if (lletres === 5) {
        // La paraula tenia 5 lletres
        paraulesDe5Lletres++;
      }
      lletres = 0; // Com que estem canviant de paraula, tornem el comptador de lletres a 0
    } else if (relat[i] !== ",") {
      // si no és un espai, ni una coma, comptem com una lletra més
      lletres++;
    }
    i++;
  }
  if (lletres === 5) {
    // per comptabilitzar també la paraula final acabada en .
    paraulesDe5Lletres++;
  }
  return paraulesDe5Lletres;
}

Exercici 3.6
A partir de l’experiència del concurs anterior hem decidir fer un concurs semblant cada setmana. 
Però cada setmana volem comptar paraules amb diferents números de lletres. Així aquesta setmana seran paraules 
de 7 lletres, la setmana vinent de 4 i l’altre de 3. Què cal modificar a la funció per a que puguem fer servir 
la mateixa funció totes les setmanes? 

function concurs(relat,nLletres) {
  let paraulesDe5Lletres = 0;
  let lletres = 0; // número de lletres de la paraula actual
  let i = 0; // posició en la cadena de caràcters
  // Per saber quan he d'acabar, tinc en compte que la cadena acaba en punt.
  while (relat[i] !== ".") {
    if (relat[i] === " ") {
      // si trobem un espai, estem canviant de paraula
      if (lletres === nLletres) {
        // La paraula tenia 5 lletres
        paraulesDe5Lletres++;
      }
      lletres = 0; // Com que estem canviant de paraula, tornem el comptador de lletres a 0
    } else if (relat[i] !== ",") {
      // si no és un espai, ni una coma, comptem com una lletra més
      lletres++;
    }
    i++;
  }
  if (lletres === nLletres) {
    // per comptabilitzar també la paraula final acabada en .
    paraulesDe5Lletres++;
  }
  return paraulesDe5Lletres;
}

Exercici 3.7 
Un conegut que ha vist els nostres concursos ens ha preguntat com ho fem per comptar les paraules d’un 
determinat número de lletres. Un cop l’hem explicat ens ha demanat si li podíem fer una funció que, donada una frase, 
ens retorni a una taula quantes paraules hi ha amb 1, 2, 3, 4, 5, 6 o 7 lletres.*/

function comptarParaules(frase) {

    let comptadors = [0, 0, 0, 0, 0, 0, 0];
    let paraules = frase.split(" "); // Separem la frase en paraules

    for (let i = 0; i < paraules.length; i++) {
        let longitud = paraules[i].length;
        if (longitud >= 1 && longitud <= 7) { // Només comptem paraules d'1 a 7 lletres
            comptadors[longitud - 1]++;
        }
    }
    return comptadors;
}

