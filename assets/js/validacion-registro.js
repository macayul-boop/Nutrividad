$(document).ready(function(){
    $("#formulario").validate({
        rules: {
            nombre:{
                required: true
            },
            apellidos:{
                required: true
            },
            rut:{
                required: true,
                maxlength: 9
            },
            telefono:{
                required: true,
                maxlength: 12,
                minlength: 12
            },
            email:{
                required: true,
                email: true
            },
            password:{
                required: true,
                minlength: 6
            },
            confirmacionPassword:{
                required: true,
                equalTo: "#password"
            }
        },
        
        messages:{
            nombre:{
                required: "El nombre es obligatorio"
            },
            apellidos:{
                required: "Los apellidos son obligatorios"
            },
            rut:{
                required: "El rut es obligatorio",
                maxlength: "El rut ingresado es invalido (12345678k)"
            },
            telefono:{
                required: "El numero de telefono es obligatorio",
                maxlength: "El formato es invalido",
                minlength: "El formato es invalido"
            },
            email:{
                required: "El email es obligatorio",
                email: "Ingresa un email valido"
            },
            password:{
                required: "La contraseña es obligatoria",
                minlength: "La contraseña debe tener al menos 6 caracteres"
            },
            confirmacionPassword:{
                required: "La confirmacion de la contraseña es obligatoria",
                equalTo: "Las contraseñas no coinciden"
            }
        },

        errorClass: "text-red-500 text-sm mt-0"
    });


});