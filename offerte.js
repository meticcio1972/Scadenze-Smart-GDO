// ===== OFFERTE =====

function mettiInOfferta(codice) {

    const prodotto = prodotti.find(p => p.codice === codice);

    if (!prodotto) {
        alert("Prodotto non trovato");
        return;
    }

    const pezzi = prompt("Quanti pezzi metti in offerta?", "1");

    if (pezzi === null) return;

    offerte.push({
        codice: prodotto.codice,
        descrizione: prodotto.descrizione,
        scadenza: prodotto.scadenza,
        pezzi: pezzi,
        data: new Date().toLocaleString()
    });

    localStorage.setItem("offerte", JSON.stringify(offerte));

    aggiornaContatoreOfferte();

    alert("Prodotto inserito in offerta");
}

function esportaVisualizzati() {

    if (prodottiVisualizzati.length === 0) {
        alert("Nessun prodotto da esportare");
        return;
    }

    let csv = "Codice;Descrizione;Scadenza;Giorni\n";

    prodottiVisualizzati.forEach(p => {
        csv += `${p.codice};${p.descrizione};${p.scadenza};${p.giorni}\n`;
    });

    const blob = new Blob([csv], {
        type: "text/csv;charset=utf-8;"
    });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "categoria.csv";
    link.click();
}

function aggiornaContatoreOfferte() {

    document.querySelector(".offerta").innerHTML =
        "🔵 Offerta<br><strong>" +
        offerte.length +
        "</strong>";
}
