function modificaScadenza(codice){
   
    const prodotto = prodotti.find(p => p.codice === codice);

    if(!prodotto) return;

    const pezzi = prompt(
    "Quanti pezzi hai trovato?",
    "1"
);

    const nuovaData = prompt(
        "Inserisci nuova data (gg/mm/aaaa)",
        prodotto.scadenza
    );

    if(!nuovaData) return;

    const vecchiaData = prodotto.scadenza;

if(!storicoModifiche[codice]){
    storicoModifiche[codice] = [];
}

storicoModifiche[codice].push({
    vecchia: vecchiaData,
    nuova: nuovaData,
    pezzi: pezzi,
    dataModifica: new Date().toLocaleString()
});
salvaStorico();
prodotto.scadenza = nuovaData;
    scadenzeModificate[codice] = nuovaData;

salvaScadenze();

    const parti = nuovaData.split("/");

const dataScad = new Date(
    parti[2],
    parti[1]-1,
    parti[0]
);

const oggi = new Date();
oggi.setHours(0,0,0,0);
prodotto.giorni = calcolaGiorni(nuovaData);

alert("Nuovi giorni: " + prodotto.giorni);
    alert("Scadenza aggiornata!");
 aggiornaDashboard();
 mostraProdotti(prodotti);  
}
