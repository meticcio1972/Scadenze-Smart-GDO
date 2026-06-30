alert("APP JS CARICATO");
let repartoAttivo =
localStorage.getItem("repartoAttivo") || "macelleria";
document.getElementById("reparto").value = repartoAttivo;

document.getElementById("reparto").onchange = function () {

    repartoAttivo = this.value; 

    localStorage.setItem(
        "repartoAttivo",
        repartoAttivo
    );

    location.reload();

};
if (prodotti.length > 0) {
    prodotti.forEach(p => {

    if (scadenzeModificate[p.codice]) {

        p.scadenza = scadenzeModificate[p.codice];

        const parti = p.scadenza.split("/");

        const dataScad = new Date(
            parti[2],
            parti[1]-1,
            parti[0]
        );

        const oggi = new Date();
        oggi.setHours(0,0,0,0);

        p.giorni = Math.ceil(
            (dataScad - oggi) /
            (1000*60*60*24)
        );
    }

});
    mostraProdotti(prodotti);
}
aggiornaDashboard();
setTimeout(() => {
    aggiornaContatoreOfferte();
},500);

function mostraProdotti(lista) {

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
   


document.getElementById("csvFile").addEventListener("change", function(e){

    const file = e.target.files[0];

    if(!file) return;

    const reader = new FileReader();

    reader.onload = function(event){
   alert("PASSO 1");
const testo = String(event.target.result);
alert("LUNGHEZZA FILE: " + testo.length);

const righe = testo.split(/\r\n|\n|\r/);


alert("RIGHE: " + righe.length);
        prodotti = [];

        let scaduti = 0;
        let g3 = 0;
        let g7 = 0;
        let g10 = 0;
        let g15 = 0;

        const oggi = new Date();
        oggi.setHours(0,0,0,0);

        for(let i=1; i<righe.length; i++){

         const colonne = righe[i].trim().split(/\t|;|,/);
            if(colonne.length < 3) continue;
            const codice = colonne[0].trim();
            const descrizione = colonne[1].trim();
            
            let dataStr = colonne[2].trim();

if(scadenzeModificate[codice]){
    dataStr = scadenzeModificate[codice];
}
            
            const parti = dataStr.split("/");

            if(parti.length !== 3) continue;

            const dataScad = new Date(
                parti[2],
                parti[1]-1,
                parti[0]
            );

            const diff = Math.ceil(
                (dataScad - oggi) /
                (1000*60*60*24)
            );

            prodotti.push({
                codice,
                descrizione,
                scadenza: dataStr,
                giorni: diff
            });

            if(diff < 0) scaduti++;
            else if(diff <= 3) g3++;
            else if(diff <= 7) g7++;
            else if(diff <= 10) g10++;
            else if(diff <= 15) g15++;
        }

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
        localStorage.setItem(
            "prodotti",
            JSON.stringify(prodotti)
        );
        console.log("SALVATO", prodotti.length);
console.log(localStorage.getItem("prodotti"))
        mostraProdotti(prodotti);
    };

    reader.readAsText(file);
});

document.querySelector(".scaduti").onclick = function(){
    mostraProdotti(prodotti.filter(p => p.giorni < 0));
};

document.querySelector(".g3").onclick = function(){
    mostraProdotti(prodotti.filter(p => p.giorni >= 0 && p.giorni <= 3));
};

document.querySelector(".g7").onclick = function(){
    mostraProdotti(prodotti.filter(p => p.giorni > 3 && p.giorni <= 7));
};

document.querySelector(".g10").onclick = function(){
    mostraProdotti(prodotti.filter(p => p.giorni > 7 && p.giorni <= 10));
};

document.querySelector(".g15").onclick = function(){
    mostraProdotti(prodotti.filter(p => p.giorni > 10 && p.giorni <= 15));
}; 

document.querySelector(".totale").onclick = function(){
    mostraProdotti(prodotti);
   };
async function modificaScadenza(codice){
   
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
await salvaProdotti();
mostraProdotti(prodotti);localStorage.setItem(
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

function mostraStorico(codice){

    const storico = storicoModifiche[codice];
   alert(JSON.stringify(storicoModifiche));
    if(!storico || storico.length === 0){
        alert("Nessuna modifica registrata");
        return;
    }

    let testo = "";

    storico.forEach((s,i)=>{
        testo +=
        (i+1) + ") " +
        s.vecchia +
        " → " +
        s.nuova +
        "\n" +
        s.dataModifica +
        "\n\n";
    });

    alert(testo);
}
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

    let csv =
    "Codice;Prodotto;Scadenza;Giorni\n";

    prodottiVisualizzati.forEach(p => {

        csv +=
        p.codice + ";" +
        p.descrizione + ";" +
        p.scadenza + ";" +
        p.giorni + "\n";

    });

    const blob = new Blob(
        [csv],
        {
            type:"text/csv;charset=utf-8;"
        }
    );

    const link =
    document.createElement("a");

    link.href =
    URL.createObjectURL(blob);

    link.download =
    "Scadenze_GDO.csv";

    link.click();

    alert(
        prodottiVisualizzati.length +
        " prodotti esportati"
    );
}
document.querySelector(".offerta").onclick = function(){
const contenuto =
document.getElementById("contenuto");
    prodottiVisualizzati = offerte;

   

    contenuto.innerHTML = offerte.map(o => `

        <div style="
            background:white;
            padding:15px;
            margin:10px 0;
            border-radius:10px;
            box-shadow:0 2px 5px rgba(0,0,0,.15);
        ">

            <p><strong>Codice:</strong> ${o.codice}</p>
            <p><strong>Prodotto:</strong> ${o.descrizione}</p>
            <p><strong>Scadenza:</strong> ${o.scadenza}</p>
            <p><strong>Pezzi:</strong> ${o.pezzi}</p>
            <p><strong>Inserito il:</strong> ${o.data}</p>

        </div>

    `).join("");

};


    
function aggiornaContatoreOfferte(){

    document.querySelector(".offerta").innerHTML =
    "🔵 Offerta<br><strong>" +
    offerte.length +
    "</strong>";

}
 async function salvaProdotti() {
     console.log("Prodotti da salvare:", prodotti);
alert("Prodotti da salvare: " + prodotti.length);

    for (const p of prodotti) {

        const { error } = await supabase
            .from("prodotti")
 .upsert({
    codice: p.codice,
    descrizione: p.descrizione,
    scadenza: p.scadenza,
    giorni: p.giorni,
    reparto: repartoAttivo,
    offerta: false
}, {
    onConflict: "codice"
});

        if (error) {
            console.error(error);
            alert("Errore salvataggio Supabase");
            return;
        }
    }

    console.log("Prodotti salvati su Supabase");
}
