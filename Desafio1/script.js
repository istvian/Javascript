let output = document.getElementById("output");
alert("Ingresa los datos requeridos");
let nombre = prompt("Por favor ingrese su Nombre");
console.log(`El nombre es ${nombre}`)
let año = parseInt(prompt(`${nombre} ingresa tu año de nacimiento`));
let edad = 2021 - año;
console.log(`La edad es ${edad}`)
let mensaje = `Nombre: ${nombre} Edad: ${edad} años. Año de nacimiento: ${año}`;
console.log(mensaje);
alert(mensaje);
output.innerHTML = `Nombre: ${nombre}<br>Edad: ${edad} años.<br>Año de nacimiento: ${año}`;