/*19.1.- Crea una funció que rebi un nombre i retorni aquest nombre elevat al quadrat.

let nombre=2;
let quadrat=elevaQuadrat(nombre);
console.log(quadrat);

function elevaQuadrat(input) {
  let sortida;
  sortida=Math.pow(input,2);
  return sortida;
}

19.2.- Crea una funció que rebi un nombre i retorni aquest nombre elevat al cub.

let numero = 4;
console.log(cub(numero)); 

function cub(n) {
    let resultat;
    resultat = n * n * n;
    return resultat;
}

19.3.- Crea una funció que rebi dos nombres i retorni el primer nombre elevat al segon.

let a = 3;
let b = 4;
console.log(potencia(a, b));

function potencia(base, exponent) {
    let resultat = 1;
    for (let i = 0; i < exponent; i++) {
        resultat = resultat * base;
    }
    return resultat;
}

19.4.- Crea una funció que donat un valor en milles retorni la seva equivalència en metros.
1 milla = 1852 metros.

let nombre=2;
let milles=millesAmetres(nombre);
console.log(milles);

function millesAmetres(input) {
  let sortida;
  const CONVERSIO=1852;
  sortida=input*CONVERSIO;
  return sortida;
}

19.5.- Crea una funció que, donat un nombre del 0 al 10 retorni una cadena de caràcters amb el nom del nombre donat.

let nombre=0;
let nom=nombreAnom(nombre);
console.log(nom);

function nombreAnom(input) {
  let text;
  switch (input) {
    case 1 :
      text = "U";
      break;
    case 2 :
      text = "Dos";
      break;
    case 3 :
      text = "Tres";
      break;
    case 4 :
      text = "Quatre";
      break;
    case 5 :
      text = "Cinc";
      break;
    case 6 :
      text = "Sis";
      break;
    case 7 :
      text = "Set";
      break;
    case 8 :
      text = "Vuit";
      break; 
    case 9 :
      text = "Nou";
      break;
    case 10 :
      text = "Deu";
      break; 
    default:
      text = "Zero";
  } 
  return text;
}

19.6.- Crea una funció que, rebut un nombre de segons retorni una cadena de caràcters on
es digui quantes hores minuts i segons són.

let segons=(3601);

let text=segonsAtext(segons);
console.log(text);

function segonsAtext(segons) {
  let text;
  let min=Math.floor(segons/60);
  segons=segons%60;
  
  let hores=Math.floor(min/60);
  min = min%60;
  
 text=hores + " h. " + min + " min.  "+ segons + " seg."
  return text;
}

19.7.- Crea una funció que, donades les hores treballades en una setmana i el salari brut
per hora, calculi el seu salari. Si les hores treballades són més de 40, aquestes hores
sobreres, es pagaran un 50% més cares que una hora normal.

let horesTreballades=41;
let preuHora=100;
let salari=calculaSalari(horesTreballades, preuHora);
console.log(salari);

function calculaSalari(horesTreballades,preuHora) {
  const MAX_HORES=40;
  const INCREMENT=1.5;
  let horesExtra=horesTreballades-MAX_HORES;
  let sou;
  
  if (horesExtra<=0){
      sou=horesTreballades*preuHora;
  }else{
      sou=(horesTreballades-horesExtra)*preuHora+horesExtra*preuHora*INCREMENT;
  }
  return sou;
}

19.8.- Fer una funció que, donat un any, retorni si és de traspàs o no. Un any és de traspàs
si és divisible per 4 i no per 100, però sí si és divisible per 400. El valor retornat per la funció
haurà de ser un valor booleà.
Anys de traspàs
1904, 1908, 1912, 1916, 1920, 1924, 1928, 1932, 1936, 1940, 1944, 1948, 1952, 1956,
1960, 1964, 1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996, 2000
1900 no és de traspàs perquè és divisible per 100 però no per 400.


let any=1996;
let resultat=anyTraspas(any);
console.log(resultat);

function anyTraspas(any) {
  let esTraspas = false;
  if (any % 4 === 0) {
    esTraspas = true;
    if (any % 100 === 0 && any % 400 !== 0){
      esTraspas = false;
	}
  }
  return esTraspas;
}

19.9.- La funció Math.random() de JavaScript retorna un valor dins del rang [0,1) (0 inclòs, 1
no inclòs). La funció Math.floor(valor) ens retorna valor eliminant els decimals. Fent servir
aquestes funcions, crear una funció que donats dos valors min i max ens calculi un nombre
aleatori entre min i max, ambdòs inclosos.

let num = aleatori(5, 10);
console.log(num);

function aleatori(min, max) {
    let resultat;

    resultat = Math.floor(Math.random() * (max - min + 1)) + min;

    return resultat;
}

19.10.- Crea una funció en la que donat un text, indiqui si és o no un palíndrom.
Exemples de palíndroms:
- "amad a la dama"
- "anna"
- "azuza"
- "3003"
- "1001001"

function esPalindrom(text) {
    let textNet = "";
    let esPalindrom = true;

    for (let i = 0; i < text.length; i++) {
        if (text[i] != " ") {
            textNet = textNet + text[i];
        }
    }

    for (let i = 0; i < textNet.length / 2; i++) {
        if (textNet[i] != textNet[textNet.length - 1 - i]) {
            esPalindrom = false;
        }
    }
    return esPalindrom;
}

console.log(esPalindrom("amad a la dama"));
console.log(esPalindrom("anna"));
console.log(esPalindrom("azuza"));
console.log(esPalindrom("3003"));
console.log(esPalindrom("1001001"));
console.log(esPalindrom("hola"));

19.11.- Crea una funció que rebi una cadena de caràcters i retorni aquesta cadena codificada segons les següents regles:
● Es posaran les paraules en l’ordre invers
● Els caràcters que conformen les paraules també s’han d’invertir.
● Les vocals que apareguin s’han de canviar pel seu número equivalent (a=1, e=2, i=3, o=4 i u=5)

Per exemple, donada la frase “The cat is in the roof.”

Es retornarà això:
.f44r 2ht n3 s3 t1c 2hT

let arr="The cat is in the roof.";
let codi=codificaCadena(arr);
console.log(codi.toString());

function codificaCadena(arr) {
  let arrAux=[];
  let j=arr.length-1;

  for (let i=0;i<arr.length;i++){
    if (arr[i]=="a"){
      arrAux[j]=1;
    }else{
      if (arr[i]=="e"){
            arrAux[j]=2;
      }else{
        if (arr[i]=="i"){
          arrAux[j]=3;
        }else{
          if (arr[i]=="o"){
            arrAux[j]=4;
          }else{
            if (arr[i]=="u"){
            arrAux[j]=5;
            }else{
              arrAux[j]=arr[i];
            }
          }
        }
      }
    }
    j=j-1;
  }
  return arrAux;
}

19.12.- Crea una funció que rep els tres paràmetres següents: 2 nombres i un dels següents
valors "+", "-", "*", "/", "%", "pot" i retorni el resultat de l'operació realitzada. Fes servir la instrucció switch.

let nombre1=5;
let nombre2=2;
let simbol="pot";
let resultat=opera(nombre1, nombre2, simbol);
console.log(resultat);

function opera(nombre1, nombre2, simbol) {
  let resultat;
  switch (simbol) {
    case "+" :
      resultat = nombre1 + nombre2;
      break;
    case "-" :
      resultat = nombre1 - nombre2;
      break;
    case "*" :
      resultat = nombre1 * nombre2;
      break;
    case "/" :
      resultat = nombre1 / nombre2;
      break;
    case "%" :
      resultat = nombre1 % nombre2;
      break;
    case "pot" :
      resultat = Math.pow(nombre1,nombre2);
      break;
    default:
      resultat = 0;
  }
  return resultat;
}

19.13.- Crea una funció que rebi un nombre i retorni cert si aquest nombre és primer o fals
en cas contrari. Per saber si un nombre és primer cal mirar si és divisible per algun dels
nombres més petits que ell (menys l’u). Per exemple. Per saber si 11 és primer, miro si el
residu de dividir 11 entre 2, 3, 4, 5, 6, 7, 8, 9 o 10 és 0. Si és 0 en algun cas, no és primer.
(Nota: En realitat només cal provar si és divisible els n/2 nombres més petits que ell).

let num=6;
let resultat=esPrimer(num);
console.log(resultat);

function esPrimer(num){
	let resultat;
	let found=false;
	let i=2;
	while (i<num && !found){
		if (num%i==0){ 
			found=true;
		}
		i++;
	}

	if (found){
		resultat=false;
	}else{
		resultat=true;
	}
	return  resultat;
}

19.14.- Crea una funció que donat un nombre N, retorni en una taula tots els nombres
primers des d'1 fins a N. Fes servir la funció que has creat a l’exercici 19.13 per saber si el
número és primer.


let nombre=25;
let resultat=omplaTaulaPrimers(nombre);
console.log(resultat);

function omplaTaulaPrimers(nombre){
	let taula=[];
	let index=0;
	let i=1;
	while (i<nombre){
		if (esPrimer(i)){
			taula[index]=i;
			index++;
		} 		
		i++;
	}
	return  taula;
}

function esPrimer(num){
	let resultat;
	let found=false;
	let i=2;
	while (i<num && !found){
		if (num%i==0){ 
			found=true;
		}
		i++;
	}

	if (found){
		resultat=false;
	}else{
		resultat=true;
	}
	return  resultat;
}

19.15.- Crea una funció que, donada una taula amb nombres, retorni quants primers hi ha dins la taula (fes servir 
la funció de l’exercici 19.13 per decidir si un número és o no primer).

let taula=[1,2,3,4,5,6,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]; 
let resultat=quantsPrimers(taula);//crida a la funció
console.log(resultat);

function quantsPrimers(taula){
	let cont=0;
	let i=0;
	while (i<taula.length){
		if (esPrimer(i)){
			cont++;
		} 		
		i++;
	}
	return  cont;
}

function esPrimer(num){
	let resultat; 
	let found=false;
	let i=2;
	while (i<num && !found){
		if (num%i==0){ 
			found=true;
		}
		i++;
	}

	if (found){
		resultat=false;
	}else{
		resultat=true;
	}
	return  resultat;
}

19.16.- Crea una funció que, donada una cadena de caràcters tipus "abcdefghijklmn." acabada sempre en punt, retorni 
quantes a hi ha a la cadena (podem decidir que la cadena s’acaba quan arribem al punt o fer servir la propietat .length)

let cadena="abcdefghijklmn."; 
let resultat=comptaLesAs(cadena);
console.log(resultat);

function comptaLesAs(cadena){
	let cont=0;
	let i=0;
	while (i<cadena.length){
		if (cadena[i]=="a"){
			cont++;
		} 		
		i++;
	}
	return  cont;
}

19.17.- Crea una funció que, donada una cadena de caràcters amb una frase on les paraules estan separades només per un 
espai en blanc i acaba en un punt, comptar quantes paraules té la frase (en la pràctica és comptar el nombre d’espais 
en blanc més 1. Comprova-ho).

let arr="The cat is in the roof."; 
let resultat=comptaParaules(arr);
console.log(resultat);

function comptaParaules(cadena){
	let cont=0;
	let i=0;
	while (i<cadena.length){
		if (cadena[i]==" "){
			cont++;
		} 		
		i++;
	}
	cont++
	return  cont;
}

19.18.- Donada una cadena de caràcters on les paraules estan separades només per un espai en blanc i acabada en un punt, 
comptar quantes paraules de la frase tenen la ce trencada (ç).

let arr="La puça és al jaç de la plaça.";
let resultat=comptaParaulesLletra(arr);
console.log(resultat);
 
function comptaParaulesLletra(arr){
    let i=0;
    let contParaules=0;
	let contParaulesC=0;
    let text;
    for  (i=0;i<arr.length;i++){
        if (arr[i]!=" " && arr[i]!="."){
			if (arr[i]=="ç"){
				contParaulesC++;
			}
		}else{
			contParaules++;
		}
    }
    text= "La fase té "+ contParaules + " paraules i " + contParaulesC + " porten ç."
    return  text;
}

19.19.- Donada una taula amb números entre 0 i 99, retorni una altra taula de 100 posicions, on hi hagi guardat a cada 
posició el número de vegades que apareix un determinat número.
Exemple (amb números entre 0 i 9): Ens donen la taula [2,3,4,5,3,2,3,4,5,6,8,6,5,2,3,4,5,6,0]
Ens hauria de tornar la taula[1,0,3,4,3,4,3,0,1,0,0]

let taula=[1,3,3,3,5,6,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,7]; 
let resultat=creaTaulaVegades(taula);
console.log(resultat);

function creaTaulaVegades(taula){
	let novaTaula=[];
	let i=0;
	while (i<taula.length){
		novaTaula[i]=comptaCaracter(taula, i)
		i++;
	}
	return  novaTaula;
}

function comptaCaracter(taula, numero){
	let cont=0;
	let i=0;
	while (i<taula.length){
		if (taula[i]==numero){
			cont++;
		} 		
		i++;
	}
	return  cont;
}

19.20.- Donada una cadena de caràcters on les paraules estan separades només per un espai en blanc i acaba en un punt, 
comptar quantes paraules de 5 lletres hi ha.

let arr="Obviusly the glass and the spoon are on the shelf.";
let resultat=comptaParaulesCincLletres(arr);
console.log(resultat);
 
function comptaParaulesCincLletres(arr){
    let i;
    let contParaules=0;
	let contParaules5=0;
	let cont=0;
    let text;
    for (i=0;i<arr.length;i++){
		if (arr[i]!=" " && arr[i]!="."){
			cont++
		}else{
			if (cont==5){
				contParaules5++
			}
			contParaules++;
			cont=0;
		}
    }
    text= "La fase té "+ contParaules + " paraules i " + contParaules5 + " tenen 5 lletres"
    return  text;
}

19.21.- Donada una cadena de caràcters on les paraules estan separades per espais en blanc (un o més) i acabada en punt 
i un número N retorni quantes paraules hi ha amb N caràcters.

let arr="Obviusly       the glass and the spoon are on the shelf.";
let num=5;
let resultat=comptaParaulesNLletres(arr, num);
console.log(resultat);
 
function comptaParaulesNLletres(arr,n){
    let i;
    let contParaules=0;
	let contParaules5=0;
	let cont=0;
    let text;
    for (i=0;i<arr.length;i++){
		if (arr[i]!=" " && arr[i]!="."){
			cont++
		}else{
			if (arr[i]==" " && arr[i+1]==" " ){
				do{
					i++;
				} while (arr[i]==" ");
			}

			if (cont==n){
				contParaules5++
			}
			contParaules++;
			cont=0;
		}
    }
    text= "La fase té "+ contParaules + " paraules i " + contParaules5 + " tenen "+ n + " lletres"
    return  text;
}

19.22.- Donada una cadena de caràcters on les paraules estan separades per espais en blanc (un o més), comes, punts 
i comes i dos punts i acabada en punt, retorni el nombre de paraules que hi ha.

let frase = "Hola, això és un text de prova: senzill i clar.";
console.log(comptarParaules(frase)); 

function comptarParaules(text) {
    let comptador = 0;
    let dinsParaula = false;

    for (let i = 0; i < text.length; i++) {

        if (
            text[i] != " " &&
            text[i] != "," &&
            text[i] != ";" &&
            text[i] != ":" &&
            text[i] != "."
        ) {
            if (dinsParaula == false) {
                comptador++;
                dinsParaula = true;
            }
        } else {
            dinsParaula = false;
        }
    }
    return comptador;
}

Paràmetres
20.1.- Crea una funció suma que pugui rebre 1, 2, 3, 4, ... nombres. I que sempre torni la suma dels mateixos.

console.log(suma(5));
console.log(suma(2, 3));
console.log(suma(1, 2, 3, 4));
console.log(suma(10, 20, 30, 40));

function suma(...nombres) {
    let resultat = 0;

    for (let i = 0; i < nombres.length; i++) {
        resultat = resultat + nombres[i];
    }

    return resultat;
}

20.2.- Crea una funció que calculi un nombre aleatori entre 0 i un valor donat. Fer-ho de tal manera que si 
no s’especifica el paràmetre prengui 100 per defecte.

console.log(aleatori());
console.log(aleatori(50));

function aleatori(max = 100) {
    let resultat;

    resultat = Math.floor(Math.random() * (max + 1));

    return resultat;
}

20.3.- Crea una funció que rebi una taula com a paràmetre i la modifiqui per tal que tots els valors emmagatzemats
 a ella es multipliquin per 10. Aquesta funció no ha de retornar res.

let dades = [2, 5, 8, 1];
multiplicaPerDeu(dades);
console.log(dades);

function multiplicaPerDeu(taula) {
    for (let i = 0; i < taula.length; i++) {
        taula[i] = taula[i] * 10;
    }
}

20.4.- Crea una funció que rebi un objecte, del tipus que sigui i retorni una còpia d’aquest objecte (per fer-ho 
caldrà copiar tots els noms dels atributs de l’objecte).*/

let persona = {
    nom: "Anna",
    edat: 25,
    ciutat: "Barcelona"
};
let personaCopia = copiaObjecte(persona);
console.log(personaCopia);

function copiaObjecte(obj) {
    let copia = {};

    for (let propietat in obj) {
        copia[propietat] = obj[propietat];
    }
    return copia;
}
