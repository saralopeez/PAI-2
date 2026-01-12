// PASO 2: entrar al campo nombre
function entrarNom(camp) {
    camp.value = "";
    camp.style.color = "black";
}

// PASO 3: salir del campo nombre
function sortirNom(camp) {
    console.log(camp.value);
}

// PASO 4 y 5: activar / desactivar textarea
function controlarComentaris(checkbox) {
    document.forms.form1.comentaris.disabled = !checkbox.checked;
}

// PASO 6: botón enviar
function enviarForm() {
    var nom = document.forms.form1.nom;
    var comentaris = document.forms.form1.comentaris;
    var afegir = document.forms.form1.afegir;
    var boto = document.forms.form1.enviar;

    // Caso 1: nombre vacío o sin modificar
    if (nom.value === "" || nom.value === "Escriu el teu nom") {
        nom.value = "Escriu un nom";
        nom.style.color = "red";
        return;
    }

    // Caso 2: nombre escrito y checkbox NO marcado
    if (!afegir.checked) {
        comentaris.value = "";
        for (var i = 0; i < 10; i++) {
            comentaris.value += nom.value + "\n";
        }
    }

    // Caso 3: desactivar botón
    boto.disabled = true;
}
