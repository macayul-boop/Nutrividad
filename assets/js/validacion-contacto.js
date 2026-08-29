$(document).ready(function() {

    $("#formulario").validate({
        rules: {
            nombre: {
                required: true
            },

            email: {
                required: true,
                email: true
            },

            mensaje:{
                required: true,
                minlength: 6
            }
        },

        messages: {
            nombre: {
                required: "El nombre es obligatorio"
            },

            email: {
                required: "El email es obligatorio",
                email: "Ingresa un email válido"
            },

            mensaje: {
                required: "El mensaje es obligatorio",
                minlength: "El mensaje debe tener al menos 6 caracteres"
            }
        },

        errorClass: "text-red-500 text-sm mt-0"
    });

});