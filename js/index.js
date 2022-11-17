function abrirmodal() {
    const modalel = document.querySelector('.modal');
    modalel.classList.add('visivel');
}
function fechamodal() {
    const modalel = document.querySelector('.modal');
    modalel.classList.remove('visivel');
}
function enviamodal() {
    const modalel = document.querySelector('.modal');
    alert("Enviado com sucesso!");
}