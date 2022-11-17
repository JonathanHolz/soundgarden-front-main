const KEY_API = "b8b48819bb9d4ff6bde1bd485a4c0eea";
const section = document.querySelector("#full");
async function getEventos() {
    const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=br`,
        {
          headers: {
            Authorization: KEY_API,
          },
        }
      );
    
      const eventos = await response.json();
    
      notices.articles.forEach((eventos) => {
        const cardEventos = `
        <article class="col-6">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="${eventos.urlToImage}"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">
                  ${eventos.title}
                </h5>
                <p class="card-text">
                ${eventos.description}
                </p>
                <a
                  href=" ${eventos.url}"
                  class="btn btn-primary"
                  >Ir para noticia</a
                >
              </div>
            </div>
          </div>
        </div>
      </article>
        `;
    
        section.innerHTML += cardEventos;
      });
    }