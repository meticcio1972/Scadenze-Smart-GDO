alert("APP JS CARICATO");
let prodotti = [];

function mostraProdotti(lista) {

    const contenuto = document.getElementById("contenuto");

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

const righe = testo.replace(/\r\n|\n|\r/);

alert("RIGHE: " + righe.length);
alert("PASSO 2");
const righe = testo.split("\n");
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
            const dataStr = colonne[2].trim();

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
