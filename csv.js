// ===============================
// CSV.JS
// Importazione CSV
// ===============================

document.getElementById("csvFile").addEventListener("change", importaCSV);

function importaCSV(e) {
    alert("Funzione importaCSV avviata");

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function(event) {
        alert("File letto");

        const testo = event.target.result;

        const righe = testo.split(/\r\n|\n|\r/);

        prodotti = [];

        const oggi = new Date();
        oggi.setHours(0,0,0,0);

        for(let i = 1; i < righe.length; i++) {

            if(righe[i].trim() === "") continue;

            const colonne = righe[i].split(/\t|;|,/);

            if(colonne.length < 3) continue;

            const codice = colonne[0].trim();
            const descrizione = colonne[1].trim();

            let scadenza = colonne[2].trim();

            if(scadenzeModificate[codice]){
                scadenza = scadenzeModificate[codice];
            }

            const parti = scadenza.split("/");

            if(parti.length !== 3) continue;

            const dataScadenza = new Date(
                parti[2],
                parti[1]-1,
                parti[0]
            );

            const giorni = Math.ceil(
                (dataScadenza - oggi) /
                (1000*60*60*24)
            );

            prodotti.push({
                codice,
                descrizione,
                scadenza,
                giorni
            });

        }

        salvaProdotti();

        mostraProdotti(prodotti);

        aggiornaDashboard();

    };

    reader.readAsText(file);

}
