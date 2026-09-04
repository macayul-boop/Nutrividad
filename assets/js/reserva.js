// Variables crear reserva

const ventanaCrearReserva = document.getElementById("ventana-crear-reserva");
const btnCrearReserva = document.getElementById("btn-crear-reserva");
const btnCerrarCrearReserva = document.getElementById("btn-cerrar-crear-reserva");
const btnConfirmarCrearReserva = document.getElementById("btn-confirmar-crear-reserva");

// Variables editar reserva
const ventanaEditarReserva = document.getElementById("ventana-editar-reserva");
const btnsEditarReserva = document.querySelectorAll(".btn-editar-reserva");
const btnCerrarEditarReserva = document.getElementById("btn-cerrar-editar-reserva");
const btnConfirmarEditarReserva = document.getElementById("btn-confirmar-editar-reserva");

// Variable eliminar reserva
const reservaListado = document.getElementById("reserva-listado");

const btnEliminarReserva = document.getElementById("btn-eliminar-reserva");

const mensajeReserva = document.getElementById("mensaje-reserva");

// Abrir ventana crear
btnCrearReserva.addEventListener("click", () => {
    ventanaCrearReserva.classList.remove("hidden");
});
// Cerrar ventana crear
btnCerrarCrearReserva.addEventListener("click", () => {
    ventanaCrearReserva.classList.add("hidden");
});
// Simular creación de reserva
btnConfirmarCrearReserva.addEventListener("click", () => {
    ventanaCrearReserva.classList.add("hidden");
});
// Abrir ventana editar

btnsEditarReserva.forEach((boton) => {
    boton.addEventListener("click", () => {
        ventanaEditarReserva.classList.remove("hidden");
    });
});

// Cerrar ventana editar

btnCerrarEditarReserva.addEventListener("click", () => {
    ventanaEditarReserva.classList.add("hidden");
});
// Simular edición de reserva
btnConfirmarEditarReserva.addEventListener("click", () => {
    ventanaEditarReserva.classList.add("hidden");
});

// Cerrar crear al presionar el fondo oscuro
ventanaCrearReserva.addEventListener("click", (e) => {
    if (e.target === ventanaCrearReserva) {
        ventanaCrearReserva.classList.add("hidden");
    }
});
// Cerrar editar al presionar el fondo oscuro
ventanaEditarReserva.addEventListener("click", (e) => {
    if (e.target === ventanaEditarReserva) {
        ventanaEditarReserva.classList.add("hidden");
    }
});

// Eliminar reserva

btnEliminarReserva.addEventListener("click", () => {
    const confirmarEliminacion = confirm(
        "¿Está seguro de eliminar esta reserva?"
    );

    if (!confirmarEliminacion) {
        return;
    }

    reservaListado.classList.add("hidden");

    mensajeReserva.textContent =
        "Reserva eliminada correctamente";

    mensajeReserva.classList.remove("hidden");

    setTimeout(() => {
        mensajeReserva.classList.add("hidden");
    }, 3000);
});
