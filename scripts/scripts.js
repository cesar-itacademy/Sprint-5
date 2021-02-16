// WEB ACUDITS
// Nivell 3

/* Exercici 4
Maquetar la web d'acudits i temps meteorològic conforme a la següent pantalla:
Exercici 5
Atès que els nostres usuaris s'han avorrit de veure sempre els mateixos acudits, buscar una altra API (o APIs) d'acudits i utilitzar-la per a alternar acudits de diferents fonts (bé alternant un de cada o de manera aleatòria).
*/

const button = document.getElementById("button");

// Funció que mostra el temps carrega desde l'inici
window.onload = function temps() {
  // API KEY no inclosa per no publicarla al Github
  const url =
    "https://api.openweathermap.org/data/2.5/weather?lang=ca&id=3128760&appid={NO API KEY}";
  fetch(url)
    .then((response) =>
      response.ok ? Promise.resolve(response) : Promise.reject(response)
    ) // Comprovam si la resposta ha estat OK
    .then((response) => response.json()) // Treiem les dades del promise com JSON
    .then((dataWeather) => {
      const weatherParagraph = document.getElementById("temps");
      const wIcon = document.getElementById("icon");
      const iconClass = "owf-" + dataWeather.weather[0].id;
      // Mostram el temps que fa a la ciutat de Barcelona
      wIcon.classList.add("owf", iconClass, "owf-3x");
      weatherParagraph.textContent = `Avui: ${dataWeather.weather[0].description}   `;
    });
  // Alerta que indica que la resposta del servidor API no ha estat satisfactoria
  .catch(response => alert(`API Key Metereologia no inclosa per securetat`))
  //.catch(response => alert(response))
};

// Funció que carrega un nou acudit al fer click al botó
button.addEventListener("click", () => {
  let randomJoke;
  let url;
  // Generam un nombre aleaotori per seleccionar API
  if (Math.random() > 0.5) {
    randomJoke = 1;
    url = "https://icanhazdadjoke.com";
  } else {
    randomJoke = 0;
    url = "https://official-joke-api.appspot.com/random_joke";
  }
  fetch(url, {
    // Sol.licitud d'API
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    // Comprovam si la resposta ha estat OK
    .then((response) =>
      response.ok ? Promise.resolve(response) : Promise.reject(response)
    )
    .then((response) => response.json()) // Treiem les dades del promise com JSON
    .then((dataJoke) => {
      // Mostram un nou acudit
      const paragraph = document.getElementById("joke");
      // Selecció del paràmetre de sortida segons API
      //paragraph.textContent = `${randomJoke ? dataJoke.joke : dataJoke.setup + dataJoke.punchline}`;
      randomJoke
        ? (paragraph.textContent = dataJoke.joke)
        : (paragraph.textContent = `${dataJoke.setup} - ${dataJoke.punchline} `);
    })
    // Alerta que indica que la resposta del servidor API no ha estat satisfactoria
    .catch((response) => alert(response));
});
