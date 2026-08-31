
const btn_cerrar_nav = document.getElementById("btn-cerrar-menu");
const btn_abrir_nav = document.getElementById("btn-abrir-nav");
const menu = document.querySelector(".sidebar");

btn_abrir_nav.addEventListener('click', ()=> {
    menu.classList.toggle("left-[-300px]")
});

btn_cerrar_nav.addEventListener('click', ()=> {
    menu.classList.toggle("left-[-300px]")
});
