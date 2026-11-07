const botaoMenu = document.querySelector("#botao-menu");
const listaMenu = document.querySelector("#lista-menu");

botaoMenu.addEventListener("click", function() {
    listaMenu.classList.toggle("menu-aberto");
});