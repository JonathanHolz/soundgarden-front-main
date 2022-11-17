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
    
      eventos.articles.forEach((eventos) => {
        const cardEventos = `
        <section id="full" class="full">
        <div class="container d-flex justify-content-center align-items-center flex-wrap">
        <article class="evento card p-5 m-3">
        <h2>eventao- 05/03/2022</h2>
        <h4>Arctic Monkeys, The Kooks, Hiatus Kaiyote</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro aperiam sunt quo similique,
            dolorum consectetur inventore ipsam, officiis neque natus eius harum alias quidem. Possimus
            nobis in inventore tenetur asperiores.</p>
        <a href="#" class="btn btn-primary">reservar ingresso</a>
        </article>
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
                  >Ir par a noticia</a
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

    getEventos();