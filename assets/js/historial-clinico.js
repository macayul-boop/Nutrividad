// Variable
const btnEditar = document.getElementById("btn-editar");
const btnCancelar = document.getElementById("btn-cancelar");
const btnGuardar = document.getElementById("btn-guardar");
const planNutricional = document.getElementById("plan-nutricional");

let contenidoPlanNutricional;

document.addEventListener('click', (e)=>{

    // Evento boton editar
    if(e.target === btnEditar){
        planNutricional.contentEditable = "true";
        planNutricional.focus()
        btnEditar.classList.toggle("hidden")
        btnCancelar.classList.toggle("hidden")
        btnGuardar.classList.toggle("hidden")
        contenidoPlanNutricional = planNutricional.textContent
    }

    // Evento boton cancelar
    if(e.target === btnCancelar){
        planNutricional.contentEditable = "false";
        planNutricional.textContent = contenidoPlanNutricional
        btnEditar.classList.toggle("hidden")
        btnCancelar.classList.toggle("hidden")
        btnGuardar.classList.toggle("hidden")
    }

    // Evento boton guardar
    if(e.target === btnGuardar){
        planNutricional.contentEditable = "false";
        btnEditar.classList.toggle("hidden")
        btnCancelar.classList.toggle("hidden")
        btnGuardar.classList.toggle("hidden")
    }
})
