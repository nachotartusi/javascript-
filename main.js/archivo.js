// declaro funciones 

function saludo() {
    opcion = prompt("Bienvendio a TuConsultorio " + nombre + ". Por favor, eliga que desea hacer: 1. Ver Promociones 2. Comprar 3. Salir");
};

function mostrarPromo() {
    alert("Promo1 : 50% descuento en su primera visita. Promo2 : 4 visitas al precio de 3. Promo3 : Cuponera de 10 visitas por $8000");
}

function comprar() {
    promo = prompt("Las visitas tienen un costo de $1000. Si desea utilizar una promocion por favor indique el nombre de la misma, de lo contrario digite 0"); 
    agendar2();
}
function comprar2 () {

}

function agendar2() {
    promo = promo.toUpperCase();
    let aux = 3;
    if (promo === "PROMO1") {
        total = total + precio / 2;

        aux = prompt ("Valor total: $" + total + " Si desea realizar otra compra presione 1, de lo contrario presione 0");
    }
    else if (promo === "PROMO2") {
        total = total + precio * 3;

        aux = prompt ("Valor total: $" + total + " Si desea realizar otra compra presione 1, de lo contrario presione 0");
    }
    else if (promo === "PROMO3") {
        total = total + precio * 8;

        aux = prompt("Valor total: " + total + " Si desea realizar otra compra presione 1, de lo contrario presione 0");
    }
    else if (promo === '0') {
        total = total + precio ;
        aux = prompt("Valor total: " + total + " Si desea terminar la compra presione 1");
    }
    else {
        alert("promocion elegida no valida");
        comprar();
    }
    if (aux != 1) {
        comprar();
    }
    else if (aux == 1) {
        alert (" Gracias por su compra, el costo total es de $" + total + ". Lo esperamos");
    }

}


// main
let nombre = prompt("Ingese su nombre");
nombre = nombre.toUpperCase();
let opcion = 0;
let promo = 1;
let total = 0;
const precio = 1000;
while (opcion !=3) {
    saludo();
    if (opcion == 1) {
        mostrarPromo();
    
    }
    if (opcion == 2) {
        comprar();
        break;
    }     
}

