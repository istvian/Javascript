let number = 0;
$("#btn-dom").on("click", () => {
    console.log("click");
    number++;
    if (number > 1) {
        $("#output").html(`${number} Clicks`);
    } else {
        $("#output").html(`${number} Click`);
    }
});