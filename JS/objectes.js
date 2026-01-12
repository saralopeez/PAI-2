/*1. Un primer és fer un llistat de les empreses que tenen deutes pendents.

class Empresa {
    constructor(nom, adreca) {
        this.nom = nom;
        this.adreca = adreca;
        this.deute = 0;
    }

    incrementaDeute(n) {
        this.deute += n;
    }

    totPagat() {
        this.deute = 0;
    }
}

function empresesAmbDeute(empreses) {
    let resultat = [];

    for (let i = 0; i < empreses.length; i++) {
        if (empreses[i].deute > 0) {
            resultat.push(empreses[i]);
        }
    }

    return resultat;
}

let taulaEmpreses = [
    new Empresa("Empresa A", "Carrer Major 1"),
    new Empresa("Empresa B", "Carrer Nou 5"),
    new Empresa("Empresa C", "Avinguda Central 10")
];

taulaEmpreses[0].incrementaDeute(100);
taulaEmpreses[2].incrementaDeute(250);

let empresesDeutors = empresesAmbDeute(taulaEmpreses);
console.log(empresesDeutors);

//Amb write:

class Empresa {
    constructor(nom, adreca) {
        this.nom = nom;
        this.adreca = adreca;
        this.deute = 0;
    }

    incrementaDeute(n) {
        this.deute += n;
    }

    totPagat() {
        this.deute = 0;
    }
}

function empresesAmbDeute(empreses) {
    let resultat = [];

    for (let i = 0; i < empreses.length; i++) {
        if (empreses[i].deute > 0) {
            resultat.push(empreses[i]);
        }
    }

    return resultat;
}

// Dades
let taulaEmpreses = [
    new Empresa("Empresa A", "Carrer Major 1"),
    new Empresa("Empresa B", "Carrer Nou 5"),
    new Empresa("Empresa C", "Avinguda Central 10")
];

taulaEmpreses[0].incrementaDeute(100);
taulaEmpreses[2].incrementaDeute(250);

// Programa principal
let empresesDeutors = empresesAmbDeute(taulaEmpreses);

// Sortida amb document.write
document.write("<h3>Empreses amb deute pendent</h3>");

for (let i = 0; i < empresesDeutors.length; i++) {
    document.write(
        empresesDeutors[i].nom +
        " - Deute: " +
        empresesDeutors[i].deute +
        "<br>"
    );
}

2. Un segon és fer un llistat dels paquets pendents de ser lliurats. Aquest llistat ha d’incloure nom de 
l’empresa origen, nom de l’empresa final i cost que té l’enviament del paquet. 

// Classe Empresa
class Empresa {
    constructor(nom, adreca) {
        this.nom = nom;
        this.adreca = adreca;
        this.deute = 0;
    }

    incrementaDeute(n) {
        this.deute += n;
    }

    totPagat() {
        this.deute = 0;
    }
}

// Dades d'empreses
let taulaEmpreses = [
    new Empresa("Empresa A", "Carrer Major 1"),
    new Empresa("Empresa B", "Carrer Nou 5"),
    new Empresa("Empresa C", "Avinguda Central 10")
];

// Classe Paquet
class Paquet {
    constructor(origen, destinacio, cost) {
        this.origen = origen;
        this.destinacio = destinacio;
        this.cost = cost;
        this.lliurat = false;
    }

    lliuramentFet() {
        this.origen.incrementaDeute(this.cost);
        this.lliurat = true;
    }
}

// Dades de paquets
let taulaPaquets = [
    new Paquet(taulaEmpreses[0], taulaEmpreses[1], 30),
    new Paquet(taulaEmpreses[1], taulaEmpreses[2], 50),
    new Paquet(taulaEmpreses[2], taulaEmpreses[0], 20)
];

// Simulem que un paquet ja ha estat lliurat
taulaPaquets[1].lliuramentFet();

// Llistat de paquets pendents
for (let i = 0; i < taulaPaquets.length; i++) {
    if (taulaPaquets[i].lliurat === false) {
        console.log(
            "Origen: " + taulaPaquets[i].origen.nom +
            " | Destinació: " + taulaPaquets[i].destinacio.nom +
            " | Cost: " + taulaPaquets[i].cost
        );
    }
}

//Con docuemt write:*/

// Classe Empresa
class Empresa {
    constructor(nom, adreca) {
        this.nom = nom;
        this.adreca = adreca;
        this.deute = 0;
    }

    incrementaDeute(n) {
        this.deute += n;
    }

    totPagat() {
        this.deute = 0;
    }
}

// Dades d'empreses
let taulaEmpreses = [
    new Empresa("Empresa A", "Carrer Major 1"),
    new Empresa("Empresa B", "Carrer Nou 5"),
    new Empresa("Empresa C", "Avinguda Central 10")
];

// Classe Paquet
class Paquet {
    constructor(origen, destinacio, cost) {
        this.origen = origen;
        this.destinacio = destinacio;
        this.cost = cost;
        this.lliurat = false;
    }

    lliuramentFet() {
        this.origen.incrementaDeute(this.cost);
        this.lliurat = true;
    }
}

// Dades de paquets
let taulaPaquets = [
    new Paquet(taulaEmpreses[0], taulaEmpreses[1], 30),
    new Paquet(taulaEmpreses[1], taulaEmpreses[2], 50),
    new Paquet(taulaEmpreses[2], taulaEmpreses[0], 20)
];

// Simulem que un paquet ja ha estat lliurat
taulaPaquets[1].lliuramentFet();

// Llistat de paquets pendents (SORTIDA)
document.write("<h3>Paquets pendents de lliurar</h3>");

for (let i = 0; i < taulaPaquets.length; i++) {
    if (taulaPaquets[i].lliurat == false) {
        document.write(
            "Origen: " + taulaPaquets[i].origen.nom +
            " | Destinació: " + taulaPaquets[i].destinacio.nom +
            " | Cost: " + taulaPaquets[i].cost +
            "<br>"
        );
    }
}


