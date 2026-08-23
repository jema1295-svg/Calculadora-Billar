// ==========================================
// CALCULADORA DE BILLAR - 60 PUNTOS FIRMES
// ==========================================

// Elementos de la página

const malasInput = document.getElementById("malas");

const botonMas = document.getElementById("mas");
const botonMenos = document.getElementById("menos");

const botonRival = document.getElementById("botonRival");
const botonPropias = document.getElementById("botonPropias");

const resultado = document.getElementById("resultado");
const explicacion = document.getElementById("explicacion");


// ==========================================
// MODALIDAD ACTUAL
// ==========================================

// true  = las malas son del rival
// false = las malas son nuestras

let malasDelRival = true;


// ==========================================
// CALCULAR
// ==========================================

function calcular() {

    let malas = parseInt(malasInput.value);

    // Evitar valores negativos

    if (isNaN(malas) || malas < 0) {
        malas = 0;
        malasInput.value = 0;
    }


    // ------------------------------------------
    // MALAS DEL RIVAL
    // ------------------------------------------

    if (malasDelRival) {

        /*
            Los puntos totales son 120.

            Si el rival tiene X malas:

            120 - X

            representa los puntos efectivos.

            Para ganar necesitamos superar
            la mitad:

            floor((120 - X) / 2) + 1
        */

        let puntos = Math.floor((120 - malas) / 2) + 1;

        resultado.textContent = puntos;

        explicacion.textContent =
            `El rival tiene ${malas} malas. ` +
            `Usted necesita ${puntos} puntos en bolas para ganar.`;

    }


    // ------------------------------------------
    // MIS MALAS
    // ------------------------------------------

    else {

        /*
            Si las malas son nuestras:

            60 + malas

            es la cantidad de puntos en bolas
            que necesitamos hacer para terminar
            con 60 puntos firmes.
        */

        let puntos = 60 + malas;

        resultado.textContent = puntos;

        explicacion.textContent =
            `Usted tiene ${malas} malas. ` +
            `Necesita hacer ${puntos} puntos en bolas ` +
            `para quedar con 60 puntos firmes.`;

    }

}


// ==========================================
// BOTÓN +
// ==========================================

botonMas.addEventListener("click", function () {

    let valor = parseInt(malasInput.value) || 0;

    valor++;

    malasInput.value = valor;

    calcular();

});


// ==========================================
// BOTÓN -
// ==========================================

botonMenos.addEventListener("click", function () {

    let valor = parseInt(malasInput.value) || 0;

    if (valor > 0) {
        valor--;
    }

    malasInput.value = valor;

    calcular();

});


// ==========================================
// ESCRIBIR DIRECTAMENTE
// ==========================================

malasInput.addEventListener("input", calcular);


// ==========================================
// MALAS DEL RIVAL
// ==========================================

botonRival.addEventListener("click", function () {

    malasDelRival = true;

    botonRival.classList.add("activa");
    botonPropias.classList.remove("activa");

    calcular();

});


// ==========================================
// MIS MALAS
// ==========================================

botonPropias.addEventListener("click", function () {

    malasDelRival = false;

    botonPropias.classList.add("activa");
    botonRival.classList.remove("activa");

    calcular();

});


// ==========================================
// INICIAR
// ==========================================

calcular();