// Variable Crear Usuario
const ventanaCrearUsuario = document.getElementById("ventana-crear-usuario");
const ventanaNutricionista = document.getElementById("ventana-nutricionista");
const btnCrearUsuario = document.getElementById("btn-crear-usuario");
const btnAgregarDia = document.getElementById("btn-agregar-dia");
const contenedorDias = document.getElementById("contenedor-dias");
const opcionesRol = document.querySelectorAll('input[name="rol"]');
const mensajeUsuario = document.getElementById("mensaje-usuario");
const formularioUsuario = document.getElementById("formulario-usuario");

function limpiarFormularioUsuario() {
    const formularioUsuario =
        document.getElementById("formulario-usuario");

    formularioUsuario.reset();

    ventanaNutricionista.classList.add("hidden");

    contenedorDias.innerHTML = "";

    const validadorUsuario =
        $("#formulario-usuario").data("validator");

    if (validadorUsuario) {
        validadorUsuario.resetForm();
    }
}
document.addEventListener('click', (e) =>{

    if(e.target === btnCrearUsuario){
        ventanaCrearUsuario.classList.remove("hidden")
    }

    if (e.target.closest("#btn-agregar-dia")){
        let articulos = contenedorDias.querySelectorAll('article');
        let total = articulos.length;
        if(total < 7){
            const nuevoHTML = `
                <article class="horario-item flex flex-wrap gap-1.5 items-center border-t  border-gray-200 mt-2.5 pt-2.5">
                        <div>
                            <p class="text-base">Dia</p>
                            <select name="dias[]" class="border border-gray-300 px-2 py-1">
                                <option value="Lunes">Lunes</option>
                                <option value="Martes">Martes</option>
                                <option value="Miercoles">Miercoles</option>
                                <option value="Jueves">Jueves</option>
                                <option value="Viernes">Viernes</option>
                                <option value="Sabado">Sabado</option>
                                <option value="Domingo">Domingo</option>
                            </select>
                        </div>
                        <div>
                            <p>Hora Inicio</p>
                            <input type="time" class="border border-gray-300 px-2 py-1">
                        </div>
                        <div>
                            <p>Hora Termino</p>
                            <input type="time" class="border border-gray-300 px-2 py-1">
                        </div>
                        <div class="flex items-center justify-center w-20">
                            <button type="button" class="btn-eliminar-horario mt-3" aria-label="Eliminar horario">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-red-400">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </button>
                        </div>
                    </article>`;

            contenedorDias.insertAdjacentHTML('beforeend', nuevoHTML);
        }
    }
    const btnEliminarHorario =
        e.target.closest(".btn-eliminar-horario");

    if (btnEliminarHorario) {
        const horario =
            btnEliminarHorario.closest(".horario-item");

        horario.remove();
    }

    if (e.target.closest("#btn-cancelar-usuario")) {
        ventanaCrearUsuario.classList.add("hidden");

        limpiarFormularioUsuario();
    }
});
opcionesRol.forEach((opcion) => {
    opcion.addEventListener("change", () => {
        const esNutricionista =
            opcion.value === "nutricionista" &&
            opcion.checked;

        ventanaNutricionista.classList.toggle(
            "hidden",
            !esNutricionista
        );
    });
});