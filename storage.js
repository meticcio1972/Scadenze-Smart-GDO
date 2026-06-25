
// ===== STORAGE =====

var prodotti =
JSON.parse(localStorage.getItem("prodotti")) || [];

var prodottiVisualizzati = [];

var storicoModifiche =
JSON.parse(localStorage.getItem("storicoModifiche")) || {};

var scadenzeModificate =
JSON.parse(localStorage.getItem("scadenzeModificate")) || {};

var offerte =
JSON.parse(localStorage.getItem("offerte")) || [];


function salvaProdotti(){
    localStorage.setItem(
        "prodotti",
        JSON.stringify(prodotti)
    );
}

function salvaStorico(){
    localStorage.setItem(
        "storicoModifiche",
        JSON.stringify(storicoModifiche)
    );
}

function salvaScadenze(){
    localStorage.setItem(
        "scadenzeModificate",
        JSON.stringify(scadenzeModificate)
    );
}

function salvaOfferte(){
    localStorage.setItem(
        "offerte",
        JSON.stringify(offerte)
    );
}
