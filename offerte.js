function mettiInOfferta(codice){

    const prodotto =
    prodotti.find(p => p.codice === codice);

    if(!prodotto){
        alert("Prodotto non trovato");
        return;
    }

    const pezzi = prompt(
        "Quanti pezzi metti in offerta?",
        "1"
    );

    if(!pezzi) return;

    offerte.push({
        codice: prodotto.codice,
        descrizione: prodotto.descrizione,
        scadenza: prodotto.scadenza,
        pezzi: pezzi,
        data: new Date().toLocaleString()
    });

    localStorage.setItem(
        "offerte",
        JSON.stringify(offerte)
    );

    document.querySelector(".offerta").innerHTML =
        "🔵 Offerta<br><strong>" +
        offerte.length +
        "</strong>";

    alert("Prodotto inserito in offerta");
}
function esportaVisualizzati(){
alert("Da esportare: " + prodottiVisualizzati.length);
  
    if(prodottiVisualizzati.length === 0){
        alert("Nessun prodotto da esportare");
        return;
    }
