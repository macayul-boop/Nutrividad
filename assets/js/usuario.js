// Variable Crear Usuario
const ventanaCrearUsuario = document.getElementById("ventana-crear-usuario");
const ventanaNutricionista = document.getElementById("ventana-nutricionista");
const btnCrearUsuario = document.getElementById("btn-crear-usuario");
const btnOptionNutricionista = document.getElementById("opcion-nutricionista");

document.addEventListener('click', (e) =>{

    if(e.target === btnCrearUsuario){
        ventanaCrearUsuario.classList.remove("hidden")
    }

    if(e.target === btnOptionNutricionista){
        console.log("dfsdf")
        ventanaNutricionista.classList.remove("hidden")
    }

    

});