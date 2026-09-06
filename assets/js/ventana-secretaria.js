// Variables cancelar cita como secretaria
const ventana_cancelar_secretaria = document.getElementById("ventana-cancelar-secretaria");
const btn_cancelar_secretaria = document.getElementById("btn-cancelar-secretaria");
const btn_cerrar_ventana_secretaria = document.getElementById("btn-cerrar-modal-secretaria");

// Variables cambiar cita como secretaria
const ventana_editar_secretaria = document.getElementById("ventana-editar-secretaria");
const btn_editar_secretaria = document.getElementById("btn-editar-secretaria");
const btn_cerrar_ventana_editar_secretaria = document.getElementById("btn-cerrar-modal-editar-secretaria");




// Eventos cancelar
btn_cancelar_secretaria.addEventListener('click', () =>  {
    ventana_cancelar_secretaria.classList.toggle("hidden");
});

btn_cerrar_ventana_secretaria.addEventListener('click', () =>  {
    ventana_cancelar_secretaria.classList.toggle("hidden");
});

ventana_cancelar_secretaria.addEventListener('click', (e) => {
    if (e.target === ventana_cancelar_secretaria) {
        ventana_cancelar_secretaria.classList.add('hidden');
    }
});

// Eventos editar
btn_editar_secretaria.addEventListener('click', () =>  {
    ventana_editar_secretaria.classList.toggle("hidden");
});

btn_cerrar_ventana_editar_secretaria.addEventListener('click', () =>  {
    ventana_editar_secretaria.classList.toggle("hidden");
});

ventana_cancelar_secretaria.addEventListener('click', (e) => {
    if (e.target === ventana_editar_secretaria) {
        ventana_editar_secretaria.classList.add('hidden');
    }
});