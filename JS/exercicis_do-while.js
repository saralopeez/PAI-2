/*18.1.- Escriu, fent servir la instrucció do-while, un programa que escrigui a la consola 10 cops el text “Estem fent bucles”.

let i = 1;

do {
  console.log("Estem fent bucles");
  i++;
} while (i <= 10);

18.2.- Escriu, fent servir la instrucció for, un programa que escrigui a la consola tots els nombres del 5 al 20.

for (let i = 5; i <= 20; i++) {
  console.log(i);
}

18.3.- Escriure un programa, fent servir la instrucció do-while, que, donat un número N, escrigui a la consola tots els números de N a 1 (per tant, en ordre descendent). Observa el que passa si N < 1.

let N = parseInt(prompt("Introdueix un número N:"));
let i = N;

do {
  if (i >= 1) {
    console.log(i);
  }
  i--;
} while (i >= 1);

18.4.- Escriu un programa que, donat un nombre N, ens digui si és primer. Un número és primer si només és divisible per 1 i per ell mateix (això implica que caldrà comprovar si hi ha algun número entre 1 i N que sigui divisor de N).

let N = parseInt(prompt("Introdueix un número N:"));

if (N < 2) {
  console.log(N + " no és un número primer.");
} else {
  let i = 2;
  let esPrimer = true;

  do {
    if (N % i === 0) {
      esPrimer = false;
      break;
    }
    i++;
  } while (i < N);

  if (esPrimer) {
    console.log(N + " és un número primer.");
  } else {
    console.log(N + " no és un número primer.");
  }
}

18.5.- Escriu, fent servir la instrucció do-while, un programa que demani (fent servir la instrucció prompt), 10 números, i ens digui quin és el més gran.*/

let comptador = 1;
let maxim = parseFloat(prompt("Introdueix el número " + comptador + ":"));
comptador++;

do {
  let num = parseFloat(prompt("Introdueix el número " + comptador + ":"));
  if (num > maxim) {
    maxim = num;
  }
  comptador++;
} while (comptador <= 10);

console.log("El número més gran és: " + maxim);
