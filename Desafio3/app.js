 alert("Desafio N°3 - CREAR UN ALGORITMO UTILIZANDO UN CICLO \nSecuencia de Fibonacci");
 var previo = 0;
 var actual = 1;
 var resultado;
 let output = document.getElementById("output");
 try {
     var iteraciones = Number(prompt("¿Cuantas iteraciones deseas? (Recomiendo que no sean muchas xD)"));
     for (let i = 0; i < iteraciones; i++) {
         resultado = previo + actual;
         console.log(`${previo}+${actual}=${resultado}`);
         output.innerText += `${previo}+${actual}=${resultado}\n`;
         previo = actual;
         actual = resultado;
     }
 } catch {
     alert("Ocurrio un error");
 }