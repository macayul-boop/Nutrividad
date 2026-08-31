// Variable plan nutricional
const btnEditar = document.getElementById("btn-editar");
const btnCancelar = document.getElementById("btn-cancelar");
const btnGuardar = document.getElementById("btn-guardar");
const planNutricional = document.getElementById("plan-nutricional");
let contenidoPlanNutricional;

// Variable crear informe
const btnCrearInforme = document.getElementById("btn-crear-informe");
const btnCancelarInforme = document.getElementById("btn-cancelar-informe");
const btnGuardarInforme = document.getElementById("btn-guardar-informe");

const contenedorCrearInforme = document.getElementById("contenedor-crear-informe");
const inputPesoCrear = document.getElementById("inputPesoCrear");
const inputTallaCrear = document.getElementById("inputTallaCrear");
const inputCinturaCrear = document.getElementById("inputCinturaCrear");
const textAreaCrear = document.getElementById("extraCrear");

// Variable ver informe
const btnsVerInforme = document.querySelectorAll(".btn-ver-informe ");
const btnOcultarInforme = document.getElementById("btn-ocultar");
const contenedorVerInforme = document.getElementById("contenedor-ver-informe");

document.addEventListener('click', (e)=>{

    // Evento boton editar plan alimentacion
    if(e.target === btnEditar){
        planNutricional.contentEditable = "true";
        planNutricional.focus()
        btnEditar.classList.toggle("hidden")
        btnCancelar.classList.toggle("hidden")
        btnGuardar.classList.toggle("hidden")
        contenidoPlanNutricional = planNutricional.textContent
    }

    // Evento boton cancelar plan alimentacion
    if(e.target === btnCancelar){
        planNutricional.contentEditable = "false";
        planNutricional.textContent = contenidoPlanNutricional
        btnEditar.classList.toggle("hidden")
        btnCancelar.classList.toggle("hidden")
        btnGuardar.classList.toggle("hidden")
    }

    // Evento boton guardar plan alimentacion
    if(e.target === btnGuardar){
        planNutricional.contentEditable = "false";
        btnEditar.classList.toggle("hidden")
        btnCancelar.classList.toggle("hidden")
        btnGuardar.classList.toggle("hidden")
    }



    // Evento boton crear informe
    if(e.target === btnCrearInforme){
        contenedorCrearInforme.classList.remove("hidden")
    }

    // Evento boton cancelar informe
    if(e.target === btnCancelarInforme){
        contenedorCrearInforme.classList.add("hidden")
        inputPesoCrear.value = "";
        inputTallaCrear.value = "";
        inputCinturaCrear.value = "";
        textAreaCrear.value = "";
    }

    // Evento boton Guardar informe
    if(e.target === btnGuardarInforme){
        contenedorCrearInforme.classList.add("hidden")
        inputPesoCrear.value = "";
        inputTallaCrear.value = "";
        inputCinturaCrear.value = "";
        textAreaCrear.value = "";
    }

    // Evento para ocultar el informe
    if(e.target === btnOcultarInforme){
        contenedorVerInforme.classList.add("hidden")
    }

})

btnsVerInforme.forEach(b => {
    b.addEventListener('click', (e) =>{
        contenedorVerInforme.classList.remove("hidden")
    })
})


