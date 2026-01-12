// U: Número total d'enllaços
function u() {
    document.getElementById("resultats").innerHTML =
        "Número total d'enllaços: " + document.links.length;
}

// Dos: Adreça del primer enllaç
function dos() {
    document.getElementById("resultats").innerHTML =
        "Primer enllaç: " + document.links[0].href;
}

// Tres: Adreça del darrer enllaç
function tres() {
    document.getElementById("resultats").innerHTML =
        "Darrer enllaç: " +
        document.links[document.links.length - 1].href;
}

// Quatre: Número d'enllaços que apunten a http://www.uab.cat
function quatre() {
    let comptador = 0;

    for (let i = 0; i < document.links.length; i++) {
        if (
            document.links[i].href === "http://www.uab.cat" ||
            document.links[i].href === "http://www.uab.cat/"
        ) {
            comptador++;
        }
    }

    document.getElementById("resultats").innerHTML =
        "Enllaços a http://www.uab.cat: " + comptador;
}

// Cinc: Número de paràgrafs de la pàgina
function cinc() {
    let parrafs = document.getElementsByTagName("p");

    document.getElementById("resultats").innerHTML =
        "Número de paràgrafs: " + parrafs.length;
}

// Sis: Número d'enllaços del paràgraf amb id='aquest'
function sis() {
    let parraf = document.getElementById("aquest");
    let enllacos = parraf.getElementsByTagName("a");

    document.getElementById("resultats").innerHTML =
        "Enllaços del paràgraf 'aquest': " + enllacos.length;
}
