const boton = document.querySelector(".btn");
const resultado = document.querySelector(".resultado");
boton.addEventListener("click", () => {
    const grados = document.getElementById("grados").value;
    const numero = parseFloat(grados);
    // Comprobar si el valor ingresado es un número
    // Si no es un número, mostrar un mensaje de error
    let result = 0;
    if (!isNaN(numero)) {
        // Convertir de Celsius a Fahrenheit
        result = (grados * 9) / 5 + 32;
        // Mostrar el resultado en el elemento con la clase "resultado"
        resultado.textContent = `El resultado es: ${result}°F`;
        resultado.classList.remove("error");
        resultado.classList.add("success");
    } else {
        resultado.textContent = "Por favor, ingresa un número válido.";
        resultado.classList.remove("success");
        resultado.classList.add("error");
    }
    setTimeout(() => {
        if (isNaN(numero)) {
            resultado.textContent = ""; // Limpiar el mensaje de error después de 3 segundos
        }
    }, 3000);
    document.getElementById("grados").value = ""; // Limpiar el resultado después de 3 segundos
});