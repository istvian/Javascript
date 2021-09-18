alert("Desafio 2 \nComparación de puntajes");
let output = document.getElementById("output");
let name_1 = prompt("Ingresa nick de jugador 1");
let score_1 = Number(prompt(`Ingresa el puntaje de ${name_1}`));
let name_2 = prompt("Ingresa nick de jugador 2");
let score_2 = Number(prompt(`Ingresa el puntaje de ${name_2}`));
let message = "";

if (score_1 > score_2) {
    message = `${name_1} gano con ${score_1} puntos vs ${name_2} con ${score_2} puntos`;
} else if (score_1 < score_2) {
    message = `${name_2} gano con ${score_2} puntos vs ${name_1} con ${score_1} puntos`;
} else if (score_1 == score_2) {
    message = `${name_1} y ${name_2} empataron con ${score_1} puntos`;
} else {
    message = "Ocurrio un error";
}
alert(message);
output.innerHTML = message;