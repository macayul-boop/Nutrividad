// Variable Crear Usuario
const ventanaCrearCliente  = document.getElementById("ventana-crear-usuario");
const btnCrearCliente  = document.getElementById("btn-crear-usuario");
const mensajeCliente  = document.getElementById("mensaje-usuario");
const formularioCliente  = document.getElementById("formulario-usuario");
// Variable ver Usuario
const btnVerCliente  = document.getElementById("btn-ver-usuario");
const btnOcultarCliente  = document.getElementById("btn-ocultar-usuario");
const contenedorVerCliente  = document.getElementById("contenedor-ver-usuario");
// Variable Editar Usuario
const btnEditarCliente  = document.getElementById("btn-editar-usuario");
const tituloFormularioCliente  = document.getElementById("titulo-formulario-usuario");
const btnConfirmarCliente = document.getElementById("btn-confirmar-usuario");
// variables  eliminar usuario
const clienteListado  = document.getElementById("usuario-listado");
const btnEliminarCliente  = document.getElementById("btn-eliminar-usuario");
let modoEdicionCliente = false;
// Boton Cancelar
const btnCancelarCliente = document.getElementById("btn-cancelar-usuario");


function limpiarFormularioCliente() {
    formularioCliente.reset();
    const validadorCliente =
        $("#formulario-usuario").data("validator");

    if (validadorCliente) {
        validadorCliente.resetForm();
    }
}

btnCrearCliente.addEventListener("click", () => {
    modoEdicionCliente = false;
    limpiarFormularioCliente();
    tituloFormularioCliente.textContent = "Crear cliente";
    btnConfirmarCliente.textContent = "Crear";
    ventanaCrearCliente.classList.remove("hidden");
});

btnEditarCliente.addEventListener("click", () => {
    modoEdicionCliente = true;
    limpiarFormularioCliente();
    tituloFormularioCliente.textContent = "Editar cliente";
    btnConfirmarCliente.textContent = "Guardar";
    ventanaCrearCliente.classList.remove("hidden");
});

btnCancelarCliente.addEventListener("click", () => {
    ventanaCrearCliente.classList.add("hidden");
    limpiarFormularioCliente();
    modoEdicionCliente = false;
    tituloFormularioCliente.textContent = "Crear cliente";
    btnConfirmarCliente.textContent = "Crear";
});

btnVerCliente.addEventListener("click", () => {
    contenedorVerCliente.classList.remove("hidden");
});

btnOcultarCliente.addEventListener("click", () => {
    contenedorVerCliente.classList.add("hidden");
});

btnEliminarCliente.addEventListener("click", () => {
    const confirmarEliminacion = confirm(
        "¿Está seguro de eliminar este cliente?" );
    if (!confirmarEliminacion) {
        return;
    }
    clienteListado.classList.add("hidden");
    contenedorVerCliente.classList.add("hidden");
    mensajeCliente.textContent =
        "Cliente eliminado correctamente";
    mensajeCliente.classList.remove("hidden");
    setTimeout(() => {
        mensajeCliente.classList.add("hidden");
    }, 3000);
});