$(document).ready(function (){
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
                required: "El número de teléfono es obligatorio",
                minlength: "El formato es inválido",
                maxlength: "El formato es inválido"
            },
            email: {
                required: "El coreo es obligatorio",
                email: "Ingresa un correo válido"
            },
            contraseña: {
                required: "La contraseña es obligatoria",
                minlength: "Debe tener al menos 6 caracteres"
            }
        },

        errorClass: "text-red-500 text-sm mt-1",

        submitHandler: function () {
            ventanaCrearCliente.classList.add("hidden");

            if (modoEdicionCliente) {
                mensajeCliente.textContent =
                    "Cliente editado correctamente";
            } else {
                mensajeCliente.textContent =
                    "Clientee creado correctamente";
            }
            mensajeCliente.classList.remove("hidden");

            limpiarFormularioCliente();

            modoEdicionCliente = false;

            setTimeout(() => {
                mensajeCliente.classList.add("hidden");
            }, 3000);

            return false;
        }
    });
});