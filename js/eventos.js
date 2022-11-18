const KEY_API = "b8b48819bb9d4ff6bde1bd485a4c0eea";
const section = document.querySelector("#full");
const listarEventos= async () => {
  const eventos = await fetch (SOUND_URL, {
      method: "GET",
      mode: "cors",
      headers: {
          'Content-Type': 'application/json'
      },
  }).then((resposta) => {
      return resposta.json();
  });

  const todosEventos = document.querySelector('#eventos');
  
  let cards = '';
  eventos.forEach(evento => {
      cards += `
      <article class="evento maxw card p-5 m-3">
      <h2>${evento.name} - ${evento.scheduled}</h2>
      <h4>${evento.attractions}</h4>
      <p>${evento.description}</p>
      <button type="button" class="card-link btn btn-primary" data-toggle="modal" data-target="#exampleModal" 
      data-whatever="${evento.name}" data-whatever2="${evento.attractions}" data-whatever3="${evento.scheduled}"
      data-whatever4="${evento._id}">reservar ingressos</button>
      </article>`
  });
  todosEventos.innerHTML = cards;
}

listarEventos();

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
    modalEmail: "email",
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