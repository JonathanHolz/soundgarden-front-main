const url = 'https://xp41-soundgarden-api.herokuapp.com/events/:id' + findID()

const evento = document.querySelector("#excluir-evento")

const findID = () => {

    const url = new URL(window.location.href);
    const id = url.searchParams.get('id');

    return id;

}

function deleteEventos(id) {
    fetch(`${url}/${id}`, {
        method : 'DELETE',
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(response => response.json())
        .then(data => evento.textContent = data)
        .catch(error => console.error(error));
}
deleteEventos();
