
// Variables cambiar cita como secretaria
const ventana_crear_secretaria_reserva = document.getElementById("ventana-crear-secretaria-reserva");
const btn_crear_secretaria_reserva = document.getElementById("btn-crear-secretaria-reserva");
const btn_cerrar_ventana_crear_secretaria_reserva = document.getElementById("btn-cerrar-modal-crear-secretaria-reserva");



// Variables cancelar cita como secretaria
const ventana_cancelar_secretaria_reserva = document.getElementById("ventana-cancelar-secretaria-reserva");
const btn_cancelar_secretaria_reserva = document.getElementById("btn-cancelar-secretaria-reserva");
const btn_cerrar_ventana_secretaria_reserva = document.getElementById("btn-cerrar-modal-secretaria-reserva");

// Variables cambiar cita como secretaria
const ventana_editar_secretaria_reserva = document.getElementById("ventana-editar-secretaria-reserva");
const btn_editar_secretaria_reserva = document.getElementById("btn-editar-secretaria-reserva");
const btn_cerrar_ventana_editar_secretaria_reserva = document.getElementById("btn-cerrar-modal-editar-secretaria-reserva");


// --- Eventos Cancelar ---
if (btn_cancelar_secretaria_reserva) {
    btn_cancelar_secretaria_reserva.addEventListener('click', () => {
        ventana_cancelar_secretaria_reserva?.classList.toggle("hidden");
    });
}
if (btn_cerrar_ventana_secretaria_reserva) {
    btn_cerrar_ventana_secretaria_reserva.addEventListener('click', () => {
        ventana_cancelar_secretaria_reserva?.classList.add("hidden");
    });
}
ventana_cancelar_secretaria_reserva?.addEventListener('click', (e) => {
    if (e.target === ventana_cancelar_secretaria_reserva) {
        ventana_cancelar_secretaria_reserva.classList.add('hidden');
    }
});


/// --- Eventos Editar ---
if (btn_editar_secretaria_reserva) {
    btn_editar_secretaria_reserva.addEventListener('click', () => {
        ventana_editar_secretaria_reserva?.classList.toggle("hidden");
    });
}
if (btn_cerrar_ventana_editar_secretaria_reserva) {
    btn_cerrar_ventana_editar_secretaria_reserva.addEventListener('click', () => {
        ventana_editar_secretaria_reserva?.classList.add("hidden");
    });
}
ventana_editar_secretaria_reserva?.addEventListener('click', (e) => {
    if (e.target === ventana_editar_secretaria_reserva) {
        ventana_editar_secretaria_reserva.classList.add('hidden');
    }
});


// --- Eventos Crear ---
if (btn_crear_secretaria_reserva) {
    btn_crear_secretaria_reserva.addEventListener('click', (e) => {
        e.preventDefault(); // Evita recargas si el botón disparador está en un form
        ventana_crear_secretaria_reserva?.classList.remove("hidden");
    });
}

if (btn_cerrar_ventana_crear_secretaria_reserva) {
    btn_cerrar_ventana_crear_secretaria_reserva.addEventListener('click', (e) => {
        e.preventDefault();
        ventana_crear_secretaria_reserva?.classList.add("hidden");
    });
}

ventana_crear_secretaria_reserva?.addEventListener('click', (e) => {
    if (e.target === ventana_crear_secretaria_reserva) {
        ventana_crear_secretaria_reserva.classList.add('hidden');
    }
});









const contenedorReservas = document.getElementById("ventana-editar-reserva-secretaria");

contenedorReservas.addEventListener("click", (e) => {
    // Si presiona editar
    const btnEditar = e.target.closest(".btn-editar");
    if (btnEditar) {
        const idReserva = btnEditar.dataset.id;
        ventana_editar_secretaria_reserva.classList.remove("hidden");
    }

    // Si presiona cancelar
    const btnCancelar = e.target.closest(".btn-cancelar");
    if (btnCancelar) {
        const idReserva = btnCancelar.dataset.id;
        ventana_cancelar_secretaria_reserva.classList.remove("hidden");
    }
});