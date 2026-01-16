// let disparo=document.getElementById("sprite");
// let recarga=document.getElementById("sprite2");

// let Lclick=document.addEventListener("click")
// Disparar(){
// }
// let Rclick=document.addEventListener("contextmenu");
// Recargar(){

// }
let disparo = document.getElementById("sprite");
let recarga = document.getElementById("sprite2");

// CLICK IZQUIERDO → disparar
document.addEventListener("click", () => {
    disparar();
});

// CLICK DERECHO → recargar
document.addEventListener("contextmenu", (e) => {
    e.preventDefault(); // evita el menú del navegador
    recargarArma();
});

function disparar() {
    disparo.classList.remove("disparar"); // reinicia animación
    void disparo.offsetWidth;            // truco para reiniciar
    disparo.classList.add("disparar");
}

function recargarArma() {
    recarga.classList.remove("recargar");
    void recarga.offsetWidth;
    recarga.classList.add("recargar");
}
