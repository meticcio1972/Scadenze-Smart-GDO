// ============================================
// SCADENZE SMART GDO 2.0
// documenti.js
// Gestione Documenti
// ============================================

"use strict";

const Documenti = {

    // ==========================
    // PDF
    // ==========================

    pdf() {

        Registro.registraEvento({

            categoria: "DOCUMENTI",

            operazione: "PDF",

            livello: "SUCCESS",

            note: "Esportazione PDF"

        });

    },

    // ==========================
    // EXCEL
    // ==========================

    excel() {

        Registro.registraEvento({

            categoria: "DOCUMENTI",

            operazione: "EXCEL",

            livello: "SUCCESS",

            note: "Esportazione Excel"

        });

    },

    // ==========================
    // CSV
    // ==========================

    csv() {

        Registro.registraEvento({

            categoria: "DOCUMENTI",

            operazione: "CSV",

            livello: "SUCCESS",

            note: "Esportazione CSV"

        });

    },

    // ==========================
    // STAMPA
    // ==========================

    stampa() {

        Registro.registraEvento({

            categoria: "DOCUMENTI",

            operazione: "STAMPA",

            livello: "SUCCESS",

            note: "Documento inviato alla stampa"

        });

    },

    // ==========================
    // REPORT GIORNALIERO
    // ==========================

    reportGiornaliero() {

    },

    // ==========================
    // REPORT SETTIMANALE
    // ==========================

    reportSettimanale() {

    },

    // ==========================
    // REPORT MENSILE
    // ==========================

    reportMensile() {

    },

    // ==========================
    // REPORT ANNUALE
    // ==========================

    reportAnnuale() {

    },

    // ==========================
    // DOCUMENTO OFFERTE
    // ==========================

    offerte() {

    },

    // ==========================
    // DOCUMENTO PRODOTTI
    // ==========================

    prodotti() {

    },

    // ==========================
    // DOCUMENTO REGISTRO
    // ==========================

    registro() {

    },

    // ==========================
    // DASHBOARD
    // ==========================

    dashboard() {

    },

    // ==========================
    // CONDIVISIONE
    // ==========================

    condividi() {

    },

    // ==========================
    // PROGRAMMA REPORT
    // ==========================

    programmaReport() {

    }

};
