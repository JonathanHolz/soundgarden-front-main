const dados = {
    name: "Evento teste 2",
    poster: "link da imagem",
    attractions: [ "Cantor 1" ],
    description: "Evento incrivel",
    scheduled: "2022-03-24T00:57:37.761Z",
    number_tickets: 10,
    _id: "623e7e7de6e2db10816075c0",
    created_at: "2022-03-26T02:46:21.918Z",
    updated_at: "2022-03-26T02:46:21.918Z",
    __v: 0
    }
fetch("https://xp41-soundgarden-api.herokuapp.com/events", {
    method: "post",
    headers: {
        'Content-Type':'aplication/json'
    },
    body: JSON.stringify(dados),
});
location.replace