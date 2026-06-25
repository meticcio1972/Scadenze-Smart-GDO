// ===============================
// PRODOTTI.JS
// Visualizzazione prodotti
// ===============================

function mostraProdotti(lista) {

    prodottiVisualizzati = lista;

    const contenuto = document.getElementById("contenuto");

    if (lista.length === 0) {

        contenuto.innerHTML = `
            <div style="
                background:white;
                padding:20px;
                border-radius:12px;
                text-align:center;
                font-size:18px;
            ">
                Nessun prodotto trovato
            </div>
        `;

        return;
    }

    contenuto.innerHTML = lista.map(p => `

        <div class="prodotto">

            <p><strong>Codice:</strong> ${p.codice}</p>

            <p><strong>Prodotto:</strong> ${p.descrizione}</p>

            <p><strong>Scadenza:</strong> ${p.scadenza}</p>

            <p><strong>Giorni:</strong> ${p.giorni}</p>

            <button onclick="modificaScadenza('${p.codice}')">
                ✏️ Modifica
            </button>

            <button onclick="mostraStorico('${p.codice}')">
                📜 Storico
            </button>

            <button onclick="mettiInOfferta('${p.codice}')">
                🏷 Offerta
            </button>

        </div>

    `).join("");

}
