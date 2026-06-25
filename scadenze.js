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
localStorage.setItem(
    "storicoModifiche",
    JSON.stringify(storicoModifiche)
);
prodotto.scadenza = nuovaData;
    scadenzeModificate[codice] = nuovaData;

localStorage.setItem(
    "scadenzeModificate",
    JSON.stringify(scadenzeModificate)
);

    const parti = nuovaData.split("/");

const dataScad = new Date(
    parti[2],
    parti[1]-1,
    parti[0]
);

const oggi = new Date();
oggi.setHours(0,0,0,0);

prodotto.giorni = Math.ceil(
    (dataScad - oggi) /
    (1000*60*60*24)
);
alert("Nuovi giorni: " + prodotto.giorni);
    alert("Scadenza aggiornata!");
    let scaduti = 0;
let g3 = 0;
let g7 = 0;
let g10 = 0;
let g15 = 0;

prodotti.forEach(p => {

    if(p.giorni < 0) scaduti++;
    else if(p.giorni <= 3) g3++;
    else if(p.giorni <= 7) g7++;
    else if(p.giorni <= 10) g10++;
    else if(p.giorni <= 15) g15++;

});

document.querySelector(".scaduti").innerHTML =
    "⚫ Scaduti<br><strong>" + scaduti + "</strong>";

document.querySelector(".g3").innerHTML =
    "🔴 Entro 3 giorni<br><strong>" + g3 + "</strong>";

document.querySelector(".g7").innerHTML =
    "🟠 Entro 7 giorni<br><strong>" + g7 + "</strong>";

document.querySelector(".g10").innerHTML =
    "🟡 Entro 10 giorni<br><strong>" + g10 + "</strong>";

document.querySelector(".g15").innerHTML =
    "🟢 Entro 15 giorni<br><strong>" + g15 + "</strong>";

document.querySelector(".totale").innerHTML =
    "📦 Totale Referenze<br><strong>" +
    prodotti.length +
    "</strong>";

    mostraProdotti(prodotti);
}
