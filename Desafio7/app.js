const btn = document.getElementById("btn-new");
const input = document.getElementById("input-text");
const output = document.getElementById("output-text");

btn.onclick = () => {
    let elemento = document.createElement("h3");
    elemento.textContent = "Cree un nuevo H2";
    elemento.className = "btn btn--normal";
    btn.parentElement.appendChild(elemento);
}
input.oninput = () => {
    output.textContent = input.value;
}