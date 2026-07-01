// ============================================
// SCADENZE SMART GDO 2.0
// ui.js
// Gestione Interfaccia
// ============================================

"use strict";

const UI = {

    // ==========================
    // HOME
    // ==========================

    home() {

        this.mostraSezione("home");

    },

    // ==========================
    // DASHBOARD
    // ==========================

    dashboard() {

        this.mostraSezione("dashboard");

    },

    // ==========================
    // PRODOTTI
    // ==========================

    prodotti() {

        this.mostraSezione("prodotti");

    },

    // ==========================
    // OFFERTE
    // ==========================

    offerte() {

        this.mostraSezione("offerte");

    },

    // ==========================
    // DOCUMENTI
    // ==========================

    documenti() {

        this.mostraSezione("documenti");

    },

    // ==========================
    // ASSISTENTE GDO
    // ==========================

    assistente() {

        this.mostraSezione("assistente");

    },

    // ==========================
    // IMPOSTAZIONI
    // ==========================

    impostazioni() {

        this.mostraSezione("impostazioni");

    },

    // ==========================
    // CARICAMENTO
    // ==========================

    caricamento(testo = "Caricamento...") {

        const elemento = document.getElementById("loading");

        if (!elemento) return;

        elemento.style.display = "flex";

        elemento.innerText = testo;

    },

    // ==========================
    // NASCONDI CARICAMENTO
    // ==========================

    chiudiCaricamento() {

        const elemento = document.getElementById("loading");

        if (!elemento) return;

        elemento.style.display = "none";

    },

    // ==========================
    // MESSAGGIO
    // ==========================

    messaggio(testo) {

        alert(testo);

    },

    // ==========================
    // MOSTRA SEZIONE
    // ==========================

    mostraSezione(id) {

        document.querySelectorAll(".pagina").forEach(p => {

            p.style.display = "none";

        });

        const pagina = document.getElementById(id);

        if (pagina) {

            pagina.style.display = "block";

        }

    }

};
