let url = "https://jsonplaceholder.typicode.com/users";
$("#btn-dom").on("click", () => {
    $.get(url, function(respuesta, estado) {
        if (estado === "success") {
            let misDatos = respuesta;
            misDatos.forEach(element => {
                $("#resultados").append(`  <p class="nombre">${element.name}</p>
                <p class="usuario">${element.username}</p>
                <p class="email">${element.email}</p>`)
            });
        }
    });
})