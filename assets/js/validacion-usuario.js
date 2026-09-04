$(document).ready(function(){
    $("#formulario-usuario").validate({
        rules: {
            rut: {
                required: true,
                minlength: 8,
                maxlength: 9
            },
            nombre: {
                required: true
            },
            apellidos: {
                required: true
            },
            telefono: {
                required: true,
                minlength: 12,
                maxlength: 12
            },
            email: {
                required: true,
                email: true
            },
            contraseña: {
                required: true,
                minlength: 6
            },
            rol: {
                required: true
            }
        },

        messages: {
            rut: {
                required: "El RUT es obligatorio",
                minlength: "El RUT ingresado es inválido",
                maxlength: "El RUT ingresado es inválido"
            },
            nombre: {
                required: "El nombre es obligatorio"
            },
            apellidos: {
                required: "Los apellidos son obligatorios"
            },
            telefono: {
                required: "El numero de telefono es obligatorio",
                minlength: "El formato es invalido",
                maxlength: "El formato es invalido"
            },
            email: {
                required: "El correo es obligatorio",
                email: "Ingresa un correo válido"
            },
            contraseña: {
                required: "La contraseña es obligatoria",
                minlength: "Debe tener al menos 6 caracteres"
            },
            rol: {
                required: "Debes seleccionar un rol"
            }
        },

        errorClass: "text-red-500 text-sm mt-1",

        errorPlacement: function (error, element) {
            if (element.attr("name") === "rol") {
                error.appendTo("#grupo-rol");
            } else {
                error.insertAfter(element);
            }
        },

        submitHandler: function () {
            ventanaCrearUsuario.classList.add("hidden");

            if (modoEdicionUsuario){
                mensajeUsuario.textContent = "Usuario editado correctamente";
            } else {
                mensajeUsuario.textContent = "Usuario creado correctamente";
            }

            mensajeUsuario.classList.remove("hidden");

            limpiarFormularioUsuario();
            modoEdicionUsuario = false;
            setTimeout(() => {
                mensajeUsuario.classList.add("hidden");
            }, 3000);

            return false;
        }
    });
});