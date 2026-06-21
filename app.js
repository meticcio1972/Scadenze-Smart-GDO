let prodotti = [];
let filtroAttivo = "tutti";

function renderLista(lista) {
  const contenitore = document.getElementById("listaProdotti");

  if (!lista.length) {
    contenitore.innerHTML = "<p>Nessun prodotto trovato</p>";
    return;
  }

  contenitore.innerHTML = lista.map(p => `
    <div class="cardProdotto">
      <h3>${p.descrizione}</h3>
      <p><strong>Codice:</strong> ${p.codice}</p>
      <p><strong>Scadenza:</strong> ${p.data}</p>
      <p><strong>Pezzi:</strong> ${p.pezzi}</p>
      <p><strong>Offerta:</strong> ${p.offerta}</p>
      <p><strong>Giorni:</strong> ${p.giorni}</p>
    </div>
  `).join("");
}
