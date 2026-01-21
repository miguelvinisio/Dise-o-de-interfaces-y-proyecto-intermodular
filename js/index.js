const personaje = document.querySelector('.personaje');

let x = 100;
const velocidad = 5;
let moviendo = false;

document.addEventListener('keydown', (event) => {

    if (event.key === 'ArrowRight' || event.key === 'd' || event.key === 'D') {
        x += velocidad;
        personaje.style.left = x + "px";
        personaje.classList.remove("izquierda");
        iniciarAnimacion();
    }

    if (event.key === 'ArrowLeft' || event.key === 'a' || event.key === 'A') {
        x -= velocidad;
        personaje.style.left = x + "px";
        personaje.classList.add("izquierda");
        iniciarAnimacion();
    }
});

document.addEventListener("keyup", () => {
    detenerAnimacion();
});

function iniciarAnimacion() {
    personaje.style.animationPlayState = "running";
    moviendo = true;
}

function detenerAnimacion() {
    personaje.style.animationPlayState = "paused";
    moviendo = false;
}
