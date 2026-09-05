$(document).ready(function () {
    $("#formulario-servicio").validate({
        rules: {
            nombre: {
                required: true
            },
            categoria: {
                required: true
            },
            modalidad: {
                required: true
            },
            precio: {
                required: true,
                min: 0
            },
            duracion: {
                required: true,
                min: 1
            }
        },
        messages: {
            nombre: {
                required: "El nombre del servicio es obligatorio"
            },
            categoria: {
                required: "Debes seleccionar una categoría"
            },
            modalidad: {
                required: "Debes seleccionar una modalidad"
            },
            precio: {
                required: "El precio es obligatorio",
                min:"El precio no puede ser negativo"
            },
            duracion: {
                required: "La duración es obligatoria",
                min: "La duración debe ser mayor a 0"
            }
        },
        errorClass: "text-red-500 text-sm mt-1",
        errorPlacement: function (error, element) {
            if (element.attr("name") === "categoria") {
                error.appendTo("#grupo-categoria");
            } else if (
                element.attr("name") === "modalidad"
            ) {
                error.appendTo("#grupo-modalidad");
            } else {
                error.insertAfter(element);
            }
        },

        submitHandler: function () {
            ventanaServicio.classList.add("hidden");
            if (modoEdicionServicio) {
                mensajeServicio.textContent = "Servicio editado correctamente";
            } else {
                mensajeServicio.textContent = "Servicio creado correctamente";
            }
            mensajeServicio.classList.remove("hidden");
            limpiarFormularioServicio();
            modoEdicionServicio = false;
            tituloFormularioServicio.textContent = "Crear servicio";
            btnConfirmarServicio.textContent = "Crear";
            setTimeout(() => {
                mensajeServicio.classList.add("hidden");
            }, 3000);
            return false;
        }
    });
});