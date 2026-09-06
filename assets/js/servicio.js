// Variables crear y editar servicio

const ventanaServicio = document.getElementById("ventana-servicio");
const btnCrearServicio = document.getElementById("btn-crear-servicio");
const btnsEditarServicio = document.querySelectorAll(".btn-editar-servicio");
const btnCancelarServicio = document.getElementById("btn-cancelar-servicio");
const tituloFormularioServicio = document.getElementById("titulo-formulario-servicio");
const btnConfirmarServicio = document.getElementById("btn-confirmar-servicio");
const formularioServicio = document.getElementById("formulario-servicio");
let modoEdicionServicio = false;
// Variables eliminar servicio
const servicioListado = document.getElementById("servicio-listado");
const btnEliminarServicio = document.getElementById("btn-eliminar-servicio");
const mensajeServicio = document.getElementById("mensaje-servicio");


function limpiarFormularioServicio() {
    formularioServicio.reset();

    const validadorServicio =
        $("#formulario-servicio").data("validator");

    if (validadorServicio) {
        validadorServicio.resetForm();
    }
}
// Abrir ventana para crear

btnCrearServicio.addEventListener("click", () => {
    modoEdicionServicio = false;
    limpiarFormularioServicio();
    tituloFormularioServicio.textContent ="Crear servicio";
    btnConfirmarServicio.textContent = "Crear";
    ventanaServicio.classList.remove("hidden");
});
btnsEditarServicio.forEach((boton) => {
    boton.addEventListener("click", () => {
        modoEdicionServicio = true;
        limpiarFormularioServicio();
        tituloFormularioServicio.textContent ="Editar servicio";
        btnConfirmarServicio.textContent ="Guardar";

        ventanaServicio.classList.remove("hidden");
    });
});

// Cancelar

btnCancelarServicio.addEventListener("click", () => {
    ventanaServicio.classList.add("hidden");
    limpiarFormularioServicio();
    modoEdicionServicio = false;
});

// Eliminar el primer servicio

btnEliminarServicio.addEventListener("click", () => {
    const confirmarEliminacion = confirm("¿Está seguro de eliminar este servicio?");
    if (!confirmarEliminacion) {
        return;
    }
    servicioListado.classList.add("hidden");
    mensajeServicio.textContent = "Servicio eliminado correctamente";
    mensajeServicio.classList.remove("hidden");
    setTimeout(() => {
        mensajeServicio.classList.add("hidden");
    }, 3000);
});