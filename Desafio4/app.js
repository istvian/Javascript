let ancho = document.getElementById("ancho");
let largo = document.getElementById("largo");
let cantidad = document.getElementById("cantidad");
let salida = document.getElementById("output");
let costo = 2500;
calcular();
ancho.oninput = calcular;
largo.oninput = calcular;
cantidad.oninput = calcular;

function calcular() {
    if (ancho.value == 0 || largo.value == 0 || cantidad.value == 0) {
        alert("Ingresa un número que no sea 0");
    } else {
        salida.innerText = `${(Number(ancho.value) * Number(largo.value))}m2 = $${((Number(ancho.value) * Number(largo.value)) * Number(cantidad.value))*costo}`;
    }
}