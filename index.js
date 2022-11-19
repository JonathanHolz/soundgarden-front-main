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
    const novaReserva = {
      modalNome: "nome",
      modalEmail: "email@email.com",
      number_tickets: 1,
      event_id: "623bc253d2891ac70ab1cce4",
    };
    var requestOptions = {
      method: "POST",
      body: JSON.stringify(novaReserva),
      redirect: "follow",
    };
    alert("Enviado com sucesso!");
}   else {
    alert ('Está faltando Caracteres');
    } if (modalNome.value.length == 0) if (modalEmail.value.length == 0) {
    alert("Você não preencheu o campo");
}
}

  
  fetch("https://xp41-soundgarden-api.herokuapp.com/bookings/:id", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

//Proximos Eventos
const SOUND_URL = 'https://xp41-soundgarden-api.herokuapp.com/events';

const exibirEventos = async () => {
    const resposta = await fetch(SOUND_URL);
    const data = await resposta.json();
    const listagem = data.slice(0,3);

    const cardEvent = document.querySelector('#primeiros');
    let htmlEventos = ""
    listagem.forEach((event) => {

        htmlEventos += `
        <article class="evento card p-5 m-3">
        <h2>${event.name} - ${event.scheduled}</h2>
        <h4>${event.attractions}</h4>
        <p>${event.description}</p>
        <button type="button" class="card-link btn btn-primary" data-toggle="modal" data-target="#exampleModal"
        data-whatever="${event.name}" data-whatever2="${event.attractions}" data-whatever3="${event.scheduled}"
        data-whatever4="${event._id}">reservar ingressos</button>
        </article>`
        
});
   cardEvent.innerHTML = htmlEventos
};

exibirEventos()