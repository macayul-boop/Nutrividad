// Variables cancelar cita
const ventana_cancelar = document.getElementById("ventana-cancelar");
const btn_cancelar = document.getElementById("btn-cancelar");
const btn_cerrar_ventana = document.getElementById("btn-cerrar-modal");

// Variables cambiar cita
const ventana_editar = document.getElementById("ventana-editar");
const btn_editar = document.getElementById("btn-editar");
const btn_cerrar_ventana_editar = document.getElementById("btn-cerrar-modal-editar");

// Variables ver ficha
const btns_ver_ficha = document.querySelectorAll(".btn-ver-ficha");
const vista_ver_ficha = document.getElementById("ventana-ver");
const btn_cerrar_ficha = document.getElementById("btn-ocultar-ficha");

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

// Evento ver ficha paciente
btns_ver_ficha.forEach(b => {
    b.addEventListener("click", (e)=>{
        vista_ver_ficha.classList.remove("hidden")
    });
})

vista_ver_ficha.addEventListener("click", (e)=>{
    if (e.target === vista_ver_ficha) {
        vista_ver_ficha.classList.add('hidden');
    }
})

btn_cerrar_ficha.addEventListener("click", ()=>{
    vista_ver_ficha.classList.add("hidden")
})