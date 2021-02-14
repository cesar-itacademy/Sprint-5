// WEB ACUDITS
// Nivell 1

/* Exercici 1
Crear la web d'acudits, el funcionament dels quals és:

- En entrar no mostrarà cap acudit. Apareixerà el títol i el botó de següent acudit“

- En prémer el botó de “Següent acudit” es farà fetch a la API d'acudits i es mostrarà per consola l'acudit en qüestió.

Nota: En aquest exercici no és necessari maquetar la web, primer farem que funcioni per a passar a aplicar-li els estils.

Tip 1: usar promises o async/await per a esperar la resposta de la API

Tip 2: abans d'usar una API en el codi, és recomanable usar Postman o eines online per a provar la API, per exemple https://apitester.com/. A més de garantir que funciona, veuràs l'objecte que retorna, per a saber utilitzar-lo.
EXERCICI 1 I 2 */

const button = document.getElementById("button");

button.addEventListener("click", () => {
    fetch("https://icanhazdadjoke.com", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
    .then((response) => response.ok ? Promise.resolve(response) : Promise.reject(response))
    .then((response) => response.json())
    .then((dataJoke) => {
      console.log(dataJoke.joke); // Exercici 1
      const paragraph = document.getElementById("joke");
      paragraph.textContent = dataJoke.joke; // Exercici 2
    })
});
