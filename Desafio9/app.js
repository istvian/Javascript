let isShow = true;
$("#btn-dom").on("click", () => {
    if (isShow == true) {
        $("#robot").fadeOut(1000);
        $("#btn-dom").text("Mostrar Robot");
        isShow = !isShow;
    } else {
        $("#robot").fadeIn(1000);
        $("#btn-dom").text("Ocultar Robot");
        isShow = !isShow;
    }
});