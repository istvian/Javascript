//#region Variables
let dias = document.getElementById("dias");
let base = document.getElementById("base");
let salud = document.getElementById("salud");
let afp = document.getElementById("afp");
let r_salud = document.getElementById("resultado_salud");
let r_afp = document.getElementById("resultado_afp");
let descuentos = document.getElementById("descuentos");
let liquido = document.getElementById("resultado_liquido");
let bruto = document.getElementById("resultado_bruto");
//#endregion

const suma = (a, b) => { return a + b };
const resta = (a, b, c) => { return a - b - c };
const porcentaje = (valor, porcentaje) => { return parseInt(((valor / 100) * porcentaje)) };
dias.oninput = calcular;
base.oninput = calcular;
salud.oninput = calcular;
afp.oninput = calcular;
// Para que calcule al inicio
calcular();

// Funcion que llama a las otras funciones
function calcular() {
    if (dias.value <= 0 || base.value <= 0 || salud.value <= 0 || afp.value <= 0) {
        alert("El número debe ser mayor a 0")
    } else {
        let _bruto = parseInt((parseInt(base.value) / 30) * dias.value);
        bruto.innerText = `Sueldo = ${_bruto}`;
        let _salud = porcentaje(_bruto, parseInt(salud.value));
        r_salud.innerText = `Salud = $${_salud}`;
        let _afp = porcentaje(_bruto, parseInt(afp.value));
        r_afp.innerText = `AFP = $${_afp}`
        descuentos.innerText = `Descuentos = - $ ${parseInt(suma(_salud, _afp))}`;
        liquido.innerText = `Sueldo Liquido = $ ${parseInt(resta(_bruto, _salud, _afp))}`;
    }
}
// OCUPO PARSE INT PARA MOSTRAR SOLO NUMEROS ENTEROS SIN DECIMALES.