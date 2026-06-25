// ===== CSV =====

function inizializzaCSV(){

    document.getElementById("csvFile")
    .addEventListener("change", importaCSV);

}

function importaCSV(e){

    const file = e.target.files[0];

    if(!file) return;

    const reader = new FileReader();

    reader.onload = function(event){

        // Qui sposteremo tutto il codice
        // dell'importazione CSV
        // dal vecchio app.js

    };

    reader.readAsText(file);

}

