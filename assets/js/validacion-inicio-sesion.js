$(document).ready(function(){
    $("#formulario-inicio-sesion").validate({
        rules: {
            email:{
                required: true,
                email: true
            },
            password:{
                required: true,
                minlength: 6
            }
        },
        
        messages:{
            email:{
                required: "El email es obligatorio",
                email: "Ingresa un email valido"
            },
            password:{
                required: "La contraseña es obligatoria",
                minlength: "La contraseña debe tener al menos 6 caracteres"
            }
        },

        errorClass: "text-red-500 text-sm mt-0",

        submitHandler: function(){
            const correo = $('input[name="email"]').val().trim().toLowerCase();
            const password = $('input[name="password"]').val();
            const mensaje = $("#mensaje-inicio-sesion");

            mensaje.removeClass("hidden text-red-500 text-emerald-700");

            if(correo === "admin@nutrivida.cl" && password === "Admin123"){
                window.location.href = "../administrador/usuario.html";

            }else if(correo === "cliente@nutrivida.cl" && password === "Cliente123"){
                window.location.href = "./tus-reservas.html";

            }else if(correo === "nutricionista@nutrivida.cl" && password === "Nutri123"){
                window.location.href = "../nutricionista/inicio.html";

            }else if(correo === "secretario@nutrivida.cl" && password === "Secretario123"){
                mensaje.text("");
                mensaje.addClass("text-red-500");

            }else{
                mensaje.text("Correo o contraseña incorrectos");
                mensaje.addClass("text-red-500");
            }

            return false;
        }
    });
});