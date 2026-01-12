/*(2 punts) Escriu un programa que, donat un número llegit amb prompt, escrigui el missatge "El número és positiu" si el número és més gran que zero, "El número és negatiu" si és més petit que zero, o "El número és zero" si és igual a zero. Utilitza if-else.

let num = parseInt(prompt("Introdueix un número:"));

if (num > 0) {
    console.log("El número és positiu");
} else if (num < 0) {
    console.log("El número és negatiu");
} else {
    console.log("El número és zero");
}

(2 punts) Escriu un programa que, donat un número entre 1 i 7, escrigui a la consola el dia de la setmana corresponent (1 = dilluns, 2 = dimarts, etc.). Utilitza switch.

let numero = parseInt(prompt("Introdueix un número entre 1 i 7:"));
let dia;

switch (numero) {
  case 1:
    dia = "Dilluns";
    break;
  case 2:
    dia = "Dimarts";
    break;
  case 3:
    dia = "Dimecres";
    break;
  case 4:
    dia = "Dijous";
    break;
  case 5:
    dia = "Divendres";
    break;
  case 6:
    dia = "Dissabte";
    break;
  case 7:
    dia = "Diumenge";
    break;
  default:
    dia = "Número invàlid. Introdueix un valor entre 1 i 7.";
}
console.log(dia);

(2 punts) Escriu un programa que demani a l'usuari un número N i mostri a la consola tots els números de l'1 fins a N. Pots fer-ho utilitzant tant un bucle for com un bucle while.

//amb for
let N = parseInt(prompt("Introdueix un número N:"));

for (let i = 1; i <= N; i++) {
  console.log(i);
}

//amb while
let N = parseInt(prompt("Introdueix un número N:"));
let i = 1;

while (i <= N) {
  console.log(i);
  i++;
}*/

let N= parseInt(prompt("Introdueix el número N:"));
let i=1
while(N>=1){
	console.log("Número:" + i);
	i++;
	N--;
}

