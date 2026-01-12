/*17.1.- Escriu, fent servir la instrucció while, un programa que escrigui a la consola 10 cops el text “Estem fent bucles”.

let i = 1;

while (i <= 10) {
  console.log("Estem fent bucles");
  i++;
}

17.2.- Escriu, fent servir la instrucció while, un programa que escrigui a la consola tots els nombres del 5 al 20.

let i = 5;

while (i <= 20) {
  console.log(i);
  i++;
}

17.3.- Escriu un programa, fent servir la instrucció while, que, donat un número N, escrigui a la consola tots els números de N a 1 (per tant, en ordre descendent). Observa el que passa si N < 1 

let N = parseInt(prompt("Introdueix un número N:"));
let i = N;

while (i >= 1) {
  console.log(i);
  i--;
}

17.4.- Escriu un programa que escrigui la seqüència de Fibonnacci des d’u fins a un número N donat.

La seqüencià de Fibonnacci consisteix en la suma dels dos valors anteriors tenint en compte que els dos primers són 1 i 1.

Així, els 7 primers números de Fibonnacci són:

1 1 2 3 5 8 13
Els dos primers són 1 i 1
El tercer és 1 + 1 → 2
El quart és 1 + 2 → 3
El cinquè és 2 + 3 → 5
El sisè és 3 + 5 → 8
El setè és 5 + 8 → 13

let N = parseInt(prompt("Introdueix un número N:"));
let a = 0;
let b = 1;

console.log("Seqüència de Fibonacci fins a " + N + ":");

while (a <= N) {
  console.log(a);
  let next = a + b; // següent número de la sèrie
  a = b;
  b = next;
}

17.5.- Escriu un programa que, donats dos números N i M, escrigui en la consola la llista de multiplicacions N*1, N*2, N*3, N*4,...,N*M Per evitar problemes per la mida del resultat (en cas que N o M siguin molt grans) l’escriptura de multiplicacions s’ha d’aturar si el resultat és més gran que 999999 (faig servir l’espai com a separadors de milers per tal que quedi més clar el nombre).

Per exemple, si els nombres introduits són 200000 i 5000 els resultat per consola hauria de ser:
200000, 400000, 600000, 800000, 1000000
I ja no s’escriuria res més doncs 1000000 és més gran que 999999 */

let N = parseInt(prompt("Introdueix el número N:"));
let M = parseInt(prompt("Introdueix el número M:"));
let i = 1;

console.log("Llista de multiplicacions:");

while (i <= M) {
  let resultat = N * i;
  
  if (resultat > 999999) {
    break; 
  }
    console.log(resultat); 
  i++;
}
