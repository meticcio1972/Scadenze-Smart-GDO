
// ===== STORAGE =====

let prodotti =
JSON.parse(localStorage.getItem("prodotti")) || [];

let prodottiVisualizzati = [];

let storicoModifiche =
JSON.parse(localStorage.getItem("storicoModifiche")) || {};

let scadenzeModificate =
JSON.parse(localStorage.getItem("scadenzeModificate")) || {};

let offerte =
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
