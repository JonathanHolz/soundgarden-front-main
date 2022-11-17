//Modal
function abrirmodal() {
    const modalAbre = document.querySelector('.modal');
    modalAbre.classList.add('visivel');
}
function fechamodal() {
    const modalFecha = document.querySelector('.modal');
    modalFecha.classList.remove('visivel');
}
function enviamodal() {
    const modalEnvia = document.querySelector('.modal');
    const modalNome = document.querySelector('.nome');
    const modalEmail = document.querySelector('.email');
    if (modalNome.value.length >= 3) if (modalEmail.value.length >= 9) {
    alert("Enviado com sucesso!");
}   else {
    alert ('Está faltando Caracteres');
    } if (modalNome.value.length == 0) if (modalEmail.value.length == 0) {
    alert("Você não preencheu o campo");
}
}
//Proximos Eventos