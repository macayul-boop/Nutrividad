// Variables cancelar cita
const ventana_cancelar = document.getElementById("ventana-cancelar");
const btn_cancelar = document.getElementById("btn-cancelar");
const btn_cerrar_ventana = document.getElementById("btn-cerrar-modal");

// Variables cambiar cita
const ventana_editar = document.getElementById("ventana-editar");
const btn_editar = document.getElementById("btn-editar");
const btn_cerrar_ventana_editar = document.getElementById("btn-cerrar-modal-editar");

// Eventos cancelar
btn_cancelar.addEventListener('click', () =>  {
    ventana_cancelar.classList.toggle("hidden");
});

btn_cerrar_ventana.addEventListener('click', () =>  {
    ventana_cancelar.classList.toggle("hidden");
});

ventana_cancelar.addEventListener('click', (e) => {
    if (e.target === ventana_cancelar) {
        ventana_cancelar.classList.add('hidden');
    }
});

// Eventos editar
btn_editar.addEventListener('click', () =>  {
    ventana_editar.classList.toggle("hidden");
});

btn_cerrar_ventana_editar.addEventListener('click', () =>  {
    ventana_editar.classList.toggle("hidden");
});

ventana_cancelar.addEventListener('click', (e) => {
    if (e.target === ventana_editar) {
        ventana_editar.classList.add('hidden');
    }
});

