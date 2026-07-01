// ============================================
// SCADENZE SMART GDO 2.0
// eventi.js
// Gestione Eventi
// ============================================

"use strict";

const Eventi = {

    inizializza() {

        this.importaCSV();

        this.ricerca();

        this.menu();

        this.offerte();

        this.documenti();

        this.assistente();

    },

    // ==========================
    // IMPORT CSV
    // ==========================

    importaCSV() {

        const input = document.getElementById("csvFile");

        if (!input) return;

        input.addEventListener("change", (e) => {

            if (!e.target.files.length) return;

            CSV.importa(e.target.files[0]);

        });

    },

    // ==========================
    // RICERCA
    // ==========================

    ricerca() {

        const input = document.getElementById("ricerca");

        if (!input) return;

        input.addEventListener("input", (e) => {

            const risultati = Ricerca.testo(e.target.value);

            if (typeof mostraProdotti === "function") {

                mostraProdotti(risultati);

            }

        });

    },

    // ==========================
    // MENU
    // ==========================

    menu() {

        document.querySelectorAll("[data-pagina]")

        .forEach(bottone => {

            bottone.addEventListener("click", () => {

                UI.mostraSezione(

                    bottone.dataset.pagina

                );

            });

        });

    },

    // ==========================
    // OFFERTE
    // ==========================

    offerte() {

        document.querySelectorAll("[data-offerta]")

        .forEach(bottone => {

            bottone.addEventListener("click", () => {

                // verrà completato
                // quando costruiremo la schermata offerte

            });

        });

    },

    // ==========================
    // DOCUMENTI
    // ==========================

    documenti() {

        document.querySelectorAll("[data-documento]")

        .forEach(bottone => {

            bottone.addEventListener("click", () => {

                // PDF
                // Excel
                // CSV

            });

        });

    },

    // ==========================
    // ASSISTENTE GDO
    // ==========================

    assistente() {

        const bottone = document.getElementById("assistenteAI");

        if (!bottone) return;

        bottone.addEventListener("click", () => {

            const briefing = AI.briefing();

            console.log(briefing);

        });

    }

};
