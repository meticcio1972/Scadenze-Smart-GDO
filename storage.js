
// ===============================
// STORAGE.JS
// Gestione dati dell'app
// ===============================

// Archivio prodotti
var prodotti =
JSON.parse(localStorage.getItem("prodotti")) || [];

// Lista visualizzata
var prodottiVisualizzati = [...prodotti];

// Storico modifiche
var storicoModifiche =
JSON.parse(localStorage.getItem("storicoModifiche")) || {};

// Scadenze modificate
var scadenzeModificate =
JSON.parse(localStorage.getItem("scadenzeModificate")) || {};

// Offerte
var offerte =
JSON.parse(localStorage.getItem("offerte")) || [];

// ===============================
// Salvataggi
// ===============================

function salvaProdotti() {
    localStorage.setItem(
        "prodotti",
        JSON.stringify(prodotti)
    );
}

function salvaStorico() {
    localStorage.setItem(
        "storicoModifiche",
        JSON.stringify(storicoModifiche)
    );
}

function salvaScadenze() {
    localStorage.setItem(
        "scadenzeModificate",
        JSON.stringify(scadenzeModificate)
    );
}

function salvaOfferte() {
    localStorage.setItem(
        "offerte",
        JSON.stringify(offerte)
    );
}
