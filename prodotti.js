// ===== PRODOTTI =====

function mostraProdotti(lista){

    prodottiVisualizzati = lista;

    const contenuto =
    document.getElementById("contenuto");

    contenuto.innerHTML = lista.map(p => `

        <div style="
            background:white;
            padding:15px;
            margin:10px 0;
            border-radius:10px;
            box-shadow:0 2px 5px rgba(0,0,0,.15);
        ">

            <p><strong>Codice:</strong> ${p.codice}</p>

            <p><strong>Prodotto:</strong> ${p.descrizione}</p>

            <p><strong>Scadenza:</strong> ${p.scadenza}</p>

            <p><strong>Giorni:</strong> ${p.giorni}</p>

            <button onclick="modificaScadenza('${p.codice}')">
                ✏️ Modifica Scadenza
            </button>

            <button onclick="mostraStorico('${p.codice}')">
                📜 Storico
            </button>

            <button onclick="mettiInOfferta('${p.codice}')">
                🏷️ Offerta
            </button>

        </div>

    `).join("");

}
