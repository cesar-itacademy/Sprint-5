// WEB ACUDITS
// Nivell 2

/* Exercici 3
Ben fet! Ja tens una web d'acudits operativa. Ja que està web està pensada per a mostrar acudits als usuaris a primera hora del matí perquè comencin bé el dia, afegirem informació meteorològica ja que els pot ser d'utilitat. 

Consumir una API d'informació meteorològica i mostrar-ho en la web. Aquesta API ha de dir-se en l'obertura, no mitjançant un botó.

Nota: Encara no és necessari maquetar la web, amb mostrar una paraula que indiqui el temps és suficient. */

const button = document.getElementById("button");

// Funció que mostra el temps carrega desde l'inici 
 window.onload = function temps() {
   // API KEY no inclosa per no publicarla al Github
   const url = "https://api.openweathermap.org/data/2.5/weather?lang=ca&id=3128760&appid={API}";
   fetch(url)
     .then((response) => response.ok ? Promise.resolve(response) : Promise.reject(response)) // Comprovam si la resposta ha estat OK
     .then((response) => response.json()) // Treiem les dades del promise com JSON
     .then((dataWeather) => {
       const weatherParagraph = document.getElementById("temps");
       // Mostram el temps que fa a la ciutat de Barcelona 
       weatherParagraph.textContent = `${(dataWeather.weather[0].description).toUpperCase()} A ${(dataWeather.name).toUpperCase()}`;
     })
     // Alerta que indica que la resposta del servidor API no ha estat satisfactoria
     .catch(response => alert(`API Key no inclosa per securetat`))
     // .catch(response => alert(response)) 
 };


// Funció que carrega un nou acudit al fer click al botó
 button.addEventListener("click", () => {
   const url = "https://icanhazdadjoke.co";
    fetch(url, {
       method: "GET",
       headers: {
         Accept: "application/json"
       }
     })
      .then((response) => response.ok ? Promise.resolve(response) : Promise.reject(response))// Comprovam si la resposta ha estat OK
      .then((response) => response.json())// Treiem les dades del promise com JSON
      .then((dataJoke) => {
        // Mostram un nou acudit 
        const paragraph = document.getElementById("joke");
        paragraph.textContent = dataJoke.joke;
      })
      // Alerta que indica que la resposta del servidor API no ha estat satisfactoria
      .catch(response => alert(response)) 
 });
