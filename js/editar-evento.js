const findID = () => {

    const url = new URL(window.location.href);
    const id = url.searchParams.get('id');

    return id;

}
//Preenche os campos com os dados da API
const exibirDetalhesEvento = async () => {
    const dadosEvento = await fetch ('https://' + findID(), {
    method: "GET",
    mode: "cors",
    headers: {
        "Content-Type": "application/json"
    }
}).then((Response) => Response.json());

console.log(dadosEvento);

const inputNome = document.getElementById("nome");
const inputAtracoes = document.getElementById("atracoes");
const inputDescricao = document.getElementById("descricao");
const inputData = document.getElementById("data");
const inputLotacao = document.getElementById("lotacao");
const inputBanner = document.getElementById("banner");

inputNome.value = dadosEvento.name;
inputAtracoes.value = dadosEvento.attractions.join(',');
inputDescricao.value = dadosEvento.description;
inputBanner.value = dadosEvento.poster;
inputData.value = dadosEvento.scheduled;
inputLotacao.value = dadosEvento.number_tickets;


}

exibirDetalhesEvento();

const editEvento = document.querySelector('#editar-evento');

editEvento.addEventListener('submit', async (event) => {

    let nomeForm = document.getElementById('nome').value;
    let bannerForm = document.getElementById('banner').value;
    let atracaoForm = document.getElementById('atracoes').value;
    let descricaoForm = document.getElementById('descricao').value;
    let dataForm = document.getElementById('data').value;
    let lotacaoForm = document.getElementById('lotacao').value;

    event.preventDefault();

    const data = {
        'name' : nomeForm,
        'poster' : bannerForm,
        'attractions' : atracaoForm.split(','),
        'description' : descricaoForm,
        'scheduled' : dataForm,
        'number_tickets' : lotacaoForm
    }

    const resposta = await fetch('https://xp41-soundgarden-api.herokuapp.com/events/' + findID(), {
        method: "PUT",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(response => response)
    .then(result => { window.location.href = 'admin.html'})
    .catch(error => alert(`O evento ${nome} não foi editado!`))
    

    alert("Evento editado com sucesso!")