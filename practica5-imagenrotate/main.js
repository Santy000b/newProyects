const imagen = document.querySelector(".imagen");

let grados = 0;

imagen.addEventListener("click", () => {
    grados += 360;
    imagen.style.transform = `rotate(${grados}deg)`;
})