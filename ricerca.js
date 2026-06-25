// ===== RICERCA =====

document.getElementById("ricerca").addEventListener("input", function () {

    const testo = this.value.toLowerCase().trim();

    if (testo === "") {
        mostraProdotti(prodotti);
        return;
    }

    const risultati = prodotti.filter(p =>
        p.codice.toLowerCase().includes(testo) ||
        p.descrizione.toLowerCase().includes(testo)
    );

    mostraProdotti(risultati);

});
