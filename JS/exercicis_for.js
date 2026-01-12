/*16.1.- Escriu, fent servir la instrucció for, un programa que escrigui a la consola 10 cops el text “Estem fent bucles”.

let i;

for (let i = 1; i <= 10; i++) {
  console.log("Estem fent bucles");
}

16.2.- Escriu, fent servir la instrucció for, un programa que escrigui a la consola tots els nombres del 5 al 20.

let i;

for (let i = 5; i <= 20; i++) {
  console.log(i);
}

16.3.- Escriu un programa que, donat un nombre N, escrigui a la consola la suma de tots els nombres entre 1 i N.

let N = parseInt(prompt("Introdueix un número N:"));
let suma = 0;

for (let i = 1; i <= N; i++) {
  suma += i;
}
console.log("La suma dels nombres de 1 a " + N + " és: " + suma);

16.4.- Escriu un programa que, donat un nombre N, escrigui a la consola el factorial d’aquest nombre. El factorial és la multiplicació de tots els números entre 1 i N.

let N = parseInt(prompt("Introdueix un número N per calcular el factorial:"));
let factorial = 1;

for (let i = 1; i <= N; i++) {
  factorial *= i;
}
console.log("El factorial de " + N + " és: " + factorial);

16.5.- Escriu un programa que, donat dos números N i M (on N sempre serà menor que M) calculi la suma de tots els números entre N i M (ambdós inclosos).

let N = parseInt(prompt("Introdueix el primer número (N):"));
let M = parseInt(prompt("Introdueix el segon número (M, més gran que N):"));
let suma = 0;

for (let i = N; i <= M; i++) {
  suma += i;
}
console.log("La suma dels nombres entre " + N + " i " + M + " és: " + suma);

16.6.- Escriu un programa que, donat un número N, calculi la suma de tots els números parells entre 2 i N.

let N = parseInt(prompt("Introdueix el primer número:"));
let suma = 0;

for (let i = 2; i <= N; i += 2) {
  suma += i;
}
console.log("La suma dels nombres parells entre 2 i " + N + " és: " + suma);

16.7.- Escriu un programa que, donat un número N, escrigui a la consola la taula de multiplicar de N.

let N = parseInt(prompt("Introdueix un número per veure la seva taula de multiplicar:"));

console.log("Taula de multiplicar del " + N + ":");

for (let i = 1; i <= 10; i++) {
  console.log(N + " x " + i + " = " + (N * i));
}

16.8.- Escriu un programa que, donat un número N, escrigui a la consola tots els números de N a 1 (per tant, en ordre descendent). Observa el que passa si N < 1 

let N = parseInt(prompt("Introdueix un número N:"));

console.log("Números de " + N + " fins a 1:");

for (let i = N; i >= 1; i--) {
  console.log(i);
}

16.9.- Escriu un programa que donat un número N, escrigui N asteriscos (*) 

let N = parseInt(prompt("Introdueix un número N:"));
let resultat = "";

for (let i = 1; i <= N; i++) {
  resultat += "*";
}

console.log(resultat);

16.10.- Escriu un programa que donat un número N, escrigui el següent dibuix (cas que el número introduït sigui 5).
*
**
***
****
***** 

let N = parseInt(prompt("Introdueix un número N:"));

for (let i = 1; i <= N; i++) {
  let linea = "";
  for (let j = 1; j <= i; j++) {
    linea += "*";
  }
  console.log(linea);
}

16.11.- Escriu un programa que donat dos números N i M, crei i sumi una sèrie com la següent:
Si N ← 2 i M ← 5
Sortida per consola: 2 22 222 2222 22222
La suma de la sèrie és:24690 

let N = parseInt(prompt("Introdueix el primer número (N):"));
let M = parseInt(prompt("Introdueix el segon número (M):"));
let serie = "";
let suma = 0;
let resultat = "";

for (let i = 1; i <= M; i++) {
  serie += N;               // Afegim el número N a la sèrie
  resultat += serie + " ";  // L’afegim al text final amb un espai
  suma += parseInt(serie);  // El convertim a número i el sumem
}

console.log(resultat.trim()); // Mostra la sèrie tota en una línia
console.log("La suma de la sèrie és: " + suma);*/

let N = parseInt(prompt("Introdueix un número N:"));
let linea = "";

for (let i = 1; i <= N; i++) {
  linea += "*";         // añadimos un asterisco más
  console.log(linea);   // mostramos la línea actual
}
